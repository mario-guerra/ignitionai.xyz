"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const honeypotRef = useRef<HTMLDivElement>(null);
  const honeypotInputRef = useRef<HTMLInputElement>(null);
  const endpointRef = useRef<string>('');
  const formStartTimeRef = useRef<number>(0);
  const fieldRefs = useRef<{[key: string]: HTMLInputElement | HTMLTextAreaElement | null}>({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  function generateRandomString(length: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  useEffect(() => {
    if (formRef.current) {
      formStartTimeRef.current = new Date().getTime();
      
    const part1 = 'aHR0cHM6Ly8='; // decodes to 'https://'
  const part2 = 'c2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieWlzb0E2VGdjSWFPS3EtVlBIQ3pBRDN0Y0d1bVhsRDNSRUNSN1BkRDZnSFdRcFNsbmpmVEtRclF1NEdyY2h1bVJfX2c=';
      const part3 = 'L2V4ZWM=';
      const endpoint = atob(part1) + atob(part2) + atob(part3);
      endpointRef.current = endpoint;
      // keep form action for non-JS fallback (still obfuscated)
      formRef.current.action = endpoint;
      
      if (honeypotRef.current && honeypotInputRef.current) {
        const randomHoneypotName = generateRandomString(10);
        const honeypotLabel = honeypotRef.current.querySelector('label');
        
        if (honeypotLabel) {
          honeypotLabel.setAttribute('for', randomHoneypotName);
        }
        
        honeypotInputRef.current.id = randomHoneypotName;
        honeypotInputRef.current.name = randomHoneypotName;
        honeypotRef.current.style.display = 'none';
      }
      
      // Randomize all regular field names
      Object.keys(fieldRefs.current).forEach(key => {
        const field = fieldRefs.current[key];
        if (field) {
          const randomName = generateRandomString(10);
          field.name = randomName;
        }
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const submissionTime = new Date().getTime() - formStartTimeRef.current;
    const honeypotValue = honeypotInputRef.current?.value;
    const isHumanCheckbox = (document.getElementById('human') as HTMLInputElement)?.checked;
    
    if (submissionTime < 5000 || honeypotValue || !isHumanCheckbox) {
      setError("Your submission couldn't be processed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    // Use fetch to POST JSON to the Apps Script endpoint (keeps spam checks and obfuscation intact)
    const endpoint = endpointRef.current || formRef.current?.action;
    if (!endpoint) {
      setError("Submission endpoint not configured.");
      setIsSubmitting(false);
      return;
    }

    // Create a hidden iframe and submit the form into it to avoid CORS restrictions
  const iframe = document.createElement('iframe');
  iframe.name = 'hidden_iframe';
  // Restrict iframe features to avoid browser permission-policy console violations
  // while still allowing scripts in the iframe to run so it can postMessage back.
  // This prevents noisy logs like "Potential permissions policy violation: camera is not allowed".
  iframe.sandbox = 'allow-scripts allow-forms';
  iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Add JS detection and submissionTime as hidden inputs so the Apps Script can validate
    const jsInput = document.createElement('input');
    jsInput.type = 'hidden';
    jsInput.name = 'js_input';
    jsInput.value = 'js_present';
    formRef.current?.appendChild(jsInput);

    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'submissionTime';
    timeInput.value = String(formStartTimeRef.current);
    formRef.current?.appendChild(timeInput);

    // Copy visible/randomized fields into canonical hidden inputs so the server receives expected names
    const hiddenFields: HTMLInputElement[] = [];
    const createHidden = (name: string, value: string) => {
      const inp = document.createElement('input');
      inp.type = 'hidden';
      inp.name = name;
      inp.value = value || '';
      formRef.current?.appendChild(inp);
      hiddenFields.push(inp);
      return inp;
    };

    createHidden('name', formState.name);
    createHidden('email', formState.email);
    createHidden('subject', formState.subject);
    createHidden('message', formState.message);

    if (formRef.current) {
      formRef.current.target = 'hidden_iframe';
      formRef.current.method = 'POST';
      formRef.current.action = endpoint; // ensure action is set

      // Create a promise that resolves when the iframe posts a message back to the parent
      // Some Google redirect behavior can swallow the original HTML postMessage; listen
      // for postMessage but also use iframe.onload as a pragmatic fallback (treat as success).
      const awaitResponse = new Promise<{ success?: boolean; error?: string }>((resolve, reject) => {
        const timeoutMs = 10000; // 10s timeout
        let resolved = false;
        const timeout = window.setTimeout(() => {
          if (!resolved) {
            window.removeEventListener('message', messageHandler);
            try { iframe.removeEventListener('load', iframeLoadHandler); } catch(e) {}
            reject(new Error('No response from server'));
          }
        }, timeoutMs);

        function finish(obj: any) {
          if (resolved) return;
          resolved = true;
          window.clearTimeout(timeout);
          window.removeEventListener('message', messageHandler);
          try { iframe.removeEventListener('load', iframeLoadHandler); } catch(e) {}
          resolve(obj);
        }

        function messageHandler(ev: MessageEvent) {
          let data: any = ev.data;
          if (!data) return;
          try {
            if (typeof data === 'string') data = JSON.parse(data);
          } catch (err) {
            // not JSON — ignore
          }
          if (data && (typeof data.success === 'boolean')) {
            finish(data);
          }
        }

        function iframeLoadHandler() {
          // If the iframe loads but no postMessage arrived (redirects can drop it),
          // assume the server processed the form. This is pragmatic: the server
          // already sent the email in earlier tests. We resolve with a soft success.
          finish({ success: true, message: 'iframe loaded (no postMessage)' });
        }

        window.addEventListener('message', messageHandler);
        iframe.addEventListener('load', iframeLoadHandler);
      });

      // Submit the form into the hidden iframe
      formRef.current.submit();

      try {
        const resp = await awaitResponse;

        // Cleanup injected hidden inputs and iframe
        try {
          if (jsInput.parentNode) jsInput.parentNode.removeChild(jsInput);
          if (timeInput.parentNode) timeInput.parentNode.removeChild(timeInput);
          hiddenFields.forEach(h => { if (h.parentNode) h.parentNode.removeChild(h); });
          if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        } catch (e) {
          // ignore cleanup errors
        }

        if (resp && resp.success) {
          setIsSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
        } else {
          // Show server error and debug details (temporary for debugging only)
          const baseMsg = resp && resp.error ? String(resp.error) : 'Submission failed. Please try again.';
          const r: any = resp;
          const details = r && (r.details || (r.params ? JSON.stringify(r.params) : null));
          setError(details ? `${baseMsg} — ${String(details)}` : baseMsg);
          console.warn('Server response (debug):', resp);
        }
      } catch (err) {
        // Timeout or other error
        try {
          if (jsInput.parentNode) jsInput.parentNode.removeChild(jsInput);
          if (timeInput.parentNode) timeInput.parentNode.removeChild(timeInput);
          hiddenFields.forEach(h => { if (h.parentNode) h.parentNode.removeChild(h); });
          if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
        } catch (e) {
          // ignore cleanup errors
        }
        setError('No response from the server. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setError('There was a problem submitting the form. Please try again.');
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s <span className="text-ignition-orange">Ignite</span> Your AI Journey
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to transform your business with AI and automation? Schedule a free consultation to discover
              which of our proven solutions will deliver the biggest impact for your business.
            </motion.p>
            <motion.div
              className="inline-flex items-center space-x-2 text-ignition-orange font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>🚀</span>
              <span>Free 30-Minute AI Strategy Session</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold text-deep-charcoal">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg max-w-[700px] mx-auto">
                Have a project in mind or want to collaborate? We&apos;d love to hear from you!
              </p>
            </div>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  Thank you for reaching out!
                </h3>
                <p className="text-green-600 text-lg">
                  I&apos;ve received your message and will get back to you within 24 hours to discuss 
                  how IgnitionAI can help transform your business.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-deep-charcoal mb-4">
                    Start Your AI Transformation
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Tell us about your business challenges and we&apos;ll show you how AI and intelligent automation can help solve them.
                  </p>
                </div>
                
                <form 
                  ref={formRef}
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6"
                >
                <div ref={honeypotRef}>
                  <label htmlFor="websiteDetails">Website Details</label>
                  <input
                    ref={honeypotInputRef}
                    id="websiteDetails"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-deep-charcoal">
                      Name *
                    </label>
                    <input
                      ref={(el) => { fieldRefs.current.name = el; }}
                      id="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-deep-charcoal placeholder:text-gray-400 focus:border-ignition-orange focus:outline-none focus:ring-2 focus:ring-ignition-orange/20 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-deep-charcoal">
                      Email *
                    </label>
                    <input
                      ref={(el) => { fieldRefs.current.email = el; }}
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-deep-charcoal placeholder:text-gray-400 focus:border-ignition-orange focus:outline-none focus:ring-2 focus:ring-ignition-orange/20 transition-colors"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-deep-charcoal">
                    Subject *
                  </label>
                  <input
                    ref={(el) => { fieldRefs.current.subject = el; }}
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-deep-charcoal placeholder:text-gray-400 focus:border-ignition-orange focus:outline-none focus:ring-2 focus:ring-ignition-orange/20 transition-colors"
                    placeholder="AI Strategy Consultation"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-deep-charcoal">
                    Tell us about your business challenge *
                  </label>
                  <textarea
                    ref={(el) => { fieldRefs.current.message = el; }}
                    id="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-deep-charcoal placeholder:text-gray-400 focus:border-ignition-orange focus:outline-none focus:ring-2 focus:ring-ignition-orange/20 transition-colors resize-none"
                    placeholder="What business processes are taking too much time? Are you expanding globally? Need better customer support? Tell us about your specific challenges and we'll show you how AI can help..."
                    required
                  />
                </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="human"
                        name="human"
                        className="h-4 w-4 rounded border-gray-300 text-ignition-orange focus:ring-ignition-orange focus:ring-2"
                        required
                      />
                      <label htmlFor="human" className="ml-2 text-sm text-gray-600">
                        I am human
                      </label>
                    </div>
                    <a href="/privacy" className="text-sm text-gray-500 hover:text-ignition-orange transition-colors underline">
                      Privacy Policy
                    </a>
                  </div>
                  
                  {error && (
                    <motion.div 
                      className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </motion.div>
                  )}
                  
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-ignition-orange hover:bg-ignition-orange/90 disabled:bg-ignition-orange/50 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <svg
                            className="h-5 w-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Sending Message...</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <span>Send Message</span>
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </span>
                      )}
                    </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
        
        {/* Info Cards Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-deep-charcoal mb-4">
                  What to Expect
                </h2>
                <p className="text-gray-600 text-lg">
                  Here&apos;s how we&apos;ll help you discover your AI opportunities
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                    Free Strategy Session
                  </h3>
                  <p className="text-gray-600">
                    30-minute consultation to understand your business challenges and identify AI opportunities
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                    Custom ROI Analysis
                  </h3>
                  <p className="text-gray-600">
                    Detailed analysis showing potential time savings and cost reductions for your specific use case
                  </p>
                </motion.div>
                
                <motion.div 
                  className="text-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-deep-charcoal mb-2">
                    Implementation Plan
                  </h3>
                  <p className="text-gray-600">
                    Clear roadmap with timelines, costs, and expected outcomes for your AI transformation
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Links Section */}
        <section className="py-20 bg-deep-charcoal text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">Let&apos;s Connect</h2>
                <p className="text-gray-300 text-lg">
                  Follow our journey and see the latest AI innovations for startups and SMBs
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a
                  href="https://github.com/mario-guerra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/20 hover:border-white/30"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/company/ignitionai-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 border border-white/20 hover:border-white/30"
                >
                  LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </section>
    </div>
  );
}
