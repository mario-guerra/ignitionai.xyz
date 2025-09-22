"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MarioBusinessCard = () => {
  // Generate vCard for contact download
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mario Guerra
N:Guerra;Mario;;;
ORG:IgnitionAI
TITLE:Founder & Principal AI Architect
EMAIL;TYPE=WORK:mario.guerra@ignitionai.xyz
TEL;TYPE=WORK,VOICE:(512) 354-4753
URL;TYPE=WORK:https://ignitionai.xyz
URL:https://marioguerra.xyz
URL:https://www.linkedin.com/in/mario-guerra/
NOTE:AI-focused Technical Leader with 15+ years delivering AI-enabled products, developer platforms, and solutions architecture.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Mario_Guerra_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gray-100">
                <Image
                  src="/images/avatars/Mario_Guerra_avatar_new.png"
                  alt="Mario Guerra"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal mb-3">
                Mario Guerra
              </h1>
              <p className="text-xl md:text-2xl text-ignition-orange font-semibold">
                Founder & Principal AI Architect
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-ignition-orange to-ember-red mx-auto mt-4"></div>
            </motion.div>

            {/* About Section */}
            <motion.div
              className="mb-8 p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-lg font-bold text-deep-charcoal mb-3">About</h2>
              <p className="text-gray-700 leading-relaxed">
                AI-focused Technical Leader with 15+ years delivering AI-enabled products, 
                developer platforms, and solutions architecture.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Email */}
              <div className="flex items-center justify-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-ignition-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:mario.guerra@ignitionai.xyz" 
                  className="text-deep-charcoal hover:text-ignition-orange transition-colors font-medium"
                >
                  mario.guerra@ignitionai.xyz
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5 text-ignition-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:+15123544753" 
                  className="text-deep-charcoal hover:text-ignition-orange transition-colors font-medium"
                >
                  (512) 354-4753
                </a>
              </div>
            </motion.div>

            {/* Action Links */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Save Contact Button */}
              <button
                onClick={generateVCard}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Save Contact</span>
              </button>

              <a
                href="https://www.linkedin.com/in/mario-guerra/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <a
                href="https://marioguerra.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tertiary inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 0l6-6m-6 6l6 6" />
                </svg>
                <span>Personal Site</span>
              </a>
            </motion.div>

            {/* QR Code */}
            <motion.div
              className="mb-8 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                  <Image
                    src="/images/qr_codes/mario-business-card.png"
                    alt="QR Code - Mario Guerra Business Card"
                    width={240}
                    height={240}
                    className="w-48 h-48 md:w-60 md:h-60"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Scan to save contact info
              </p>
            </motion.div>

            {/* Company Logo/Link */}
            <motion.div
              className="mt-8 pt-6 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="/"
                className="inline-flex items-center space-x-2 text-ignition-orange hover:text-ember-red transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold">IgnitionAI</span>
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Spark Intelligent Transformation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarioBusinessCard;