"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const IntroducingIgnitionAI = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-ignition-orange text-white rounded-full text-sm font-semibold">
                Company Announcement
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
              Introducing IgnitionAI: Sparking Intelligent Transformation
            </h1>
            <p className="text-xl md:text-2xl !text-gray-300 mb-8">
              We&apos;re bridging the AI gap for small and medium businesses, making intelligent automation accessible, practical, and transformative.
            </p>
            <div className="flex items-center justify-center text-gray-300 text-sm">
              <span>By Mario Guerra & Hector Norzagaray</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                There&apos;s an invisible divide in today&apos;s business world. On one side, you have big tech companies where AI is woven into daily operations, where teams use intelligent tools as naturally as checking email. On the other side, countless small and medium businesses are watching from the sidelines, knowing AI could transform their operations but unsure where to even begin.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                That&apos;s exactly why we created IgnitionAI. We&apos;re here to spark intelligent transformation for businesses of all sizes, making AI accessible, practical, and genuinely transformative.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">The AI Divide We&apos;re Working to Bridge</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Having worked in the tech industry for years, we&apos;ve seen firsthand how AI can revolutionize operations. We&apos;ve lived in what you might call a &ldquo;tech bubble&rdquo; where everyone understands AI, uses it daily, and sees its immediate benefits. But stepping outside that bubble reveals a different reality.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For many businesses, AI remains mysterious, even intimidating. We&apos;ve heard stories of teams that panicked when AI tools were introduced, fearing job replacement rather than recognizing the productivity boost these tools provide. It took months to undo that damage and help them understand AI&apos;s true purpose as a collaborative partner.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This disconnect highlighted a massive opportunity. There are countless businesses that could benefit tremendously from AI but lack the knowledge, resources, or confidence to get started. That&apos;s where we come in.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">What Makes IgnitionAI Different</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Think of us as your AI implementation partners who speak your language. We&apos;re not here to overwhelm you with complex technical jargon or push expensive solutions you don&apos;t need. Instead, we focus on understanding your specific challenges and identifying practical AI applications that deliver real value.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">We Know How to Learn and Adapt</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The AI landscape evolves rapidly. New tools, features, and capabilities emerge constantly. We&apos;ve spent years working in fast-paced, constantly changing environments, which means we know how to quickly evaluate new technologies and piece together solutions that work for your specific situation.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You could spend months watching YouTube videos and experimenting with different tools, potentially wasting time and resources on approaches that don&apos;t fit your needs. Or you can partner with us to implement proven solutions while avoiding common pitfalls.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">We Focus on Practical Solutions</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our approach starts with understanding what you&apos;re trying to accomplish. Whether it&apos;s automating customer support, streamlining email management, improving scheduling efficiency, or enhancing communication across different languages, we identify the right AI tools and approaches for your specific needs.
              </p>

              <div className="bg-light-gray p-8 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Common AI Applications We Help Implement:</h4>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">•</span>
                    <span><strong>Intelligent Customer Support:</strong> AI-powered chatbots that understand context and provide accurate responses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">•</span>
                    <span><strong>Email and Calendar Management:</strong> Automated scheduling and intelligent email triage systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">•</span>
                    <span><strong>Document Processing:</strong> Automated invoice handling and receipt management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">•</span>
                    <span><strong>Multilingual Communication:</strong> Real-time translation and cross-cultural business communication</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Beyond Implementation: Training and Support</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We don&apos;t just build solutions and disappear. Our goal is to empower your team to understand, maintain, and expand upon the AI systems we implement together. This includes comprehensive training to ensure your team feels confident working with these new tools.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As we work with multiple clients facing similar challenges, we&apos;re building a knowledge base of common questions, best practices, and proven solutions. This collective experience benefits every client we work with, as we can apply lessons learned across different industries and use cases.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Building a Community of Success</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We envision creating a community where businesses share their AI success stories, learn from each other&apos;s experiences, and access resources that help them continue growing their AI capabilities. When businesses succeed with AI, they often discover new opportunities and use cases that we can help develop.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Why We Started IgnitionAI</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We started IgnitionAI because we believe every business deserves access to the transformative power of AI, regardless of size or technical expertise. Too many valuable businesses are being left behind simply because they don&apos;t know where to start or how to navigate the complex AI landscape.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our name reflects our mission. &ldquo;Ignition&rdquo; represents that crucial spark needed to get things moving. Just as a car needs ignition to start its journey, businesses need that initial push to begin their AI transformation. We provide that spark, that catalyst that gets intelligent transformation rolling.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We&apos;re not just consultants pointing out problems. We&apos;re hands-on partners who sit down with you, understand your unique challenges, and work together to implement solutions that make a real difference in your daily operations.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">What You Don&apos;t Know Can Help You</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many businesses struggle with the problem of not knowing what they don&apos;t know about AI. You might recognize that AI could help your business, but without understanding the possibilities, it&apos;s impossible to identify specific opportunities.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                That&apos;s where our discovery process becomes invaluable. We help you uncover inefficiencies and bottlenecks you might not have even recognized as problems. Sometimes we&apos;re able to suggest solutions you never knew were possible, opening up entirely new ways of thinking about your business operations.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                For example, you might think you need a complex AI chatbot when what you really need is a simple system that connects your existing calendar to provide real-time availability information. We help you see the forest through the trees, identifying the most impactful solutions that align with your actual needs and budget.
              </p>

              <div className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Whether you&apos;re just curious about AI possibilities or ready to implement specific solutions, we&apos;re here to help. Let&apos;s have a conversation about your business challenges and explore how AI can provide practical, valuable solutions.
                </p>
                <Link href="/contact" className="inline-block bg-white text-ignition-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Your Free Consultation
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">The Future We&apos;re Building Together</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We see a future where AI adoption isn&apos;t limited by company size or technical expertise. Where every business, from local restaurants to growing startups to established manufacturers, can leverage intelligent automation to improve their operations and serve their customers better.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This vision drives everything we do at IgnitionAI. We&apos;re not just implementing technology; we&apos;re democratizing access to intelligent transformation. We&apos;re helping level the playing field so that innovative small businesses can compete with larger companies that have dedicated AI teams.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                If you&apos;ve been curious about AI but weren&apos;t sure where to start, or if you&apos;ve tried to implement AI solutions but struggled with the complexity, we&apos;d love to hear from you. Let&apos;s spark your intelligent transformation together.
              </p>

            </motion.div>
          </div>
        </div>
      </article>

      {/* Services CTA */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From customer support automation to intelligent document processing, we help businesses implement AI solutions that deliver measurable results. Discover how our services can spark your intelligent transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors text-lg"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-charcoal transition-colors text-lg"
              >
                Schedule a Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              ✓ Free initial consultation  ✓ Tailored AI solutions  ✓ Ongoing support & training
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default IntroducingIgnitionAI;
