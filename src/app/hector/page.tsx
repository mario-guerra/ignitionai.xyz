"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HectorBusinessCard = () => {
  // Generate vCard for contact download
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Hector Norzagaray
N:Norzagaray;Hector;;;
ORG:IgnitionAI
TITLE:Product Engineering & Community Strategy
EMAIL;TYPE=WORK:hector.norzagaray@ignitionai.xyz
URL;TYPE=WORK:https://ignitionai.xyz
NOTE:Product Strategist with experience in enterprise software, honed within the Microsoft Azure ecosystem. Focuses on driving innovation in cloud-based platforms and intelligent automation tools.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Hector_Norzagaray_Contact.vcf';
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
            {/* Avatar Placeholder */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gray-100 bg-gradient-to-br from-ignition-orange/20 to-ember-red/20 flex items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-ignition-orange">
                  HN
                </div>
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
                Hector Norzagaray
              </h1>
              <p className="text-xl md:text-2xl text-ignition-orange font-semibold">
                Product Engineering & Community Strategy
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
              <p className="text-gray-700 leading-relaxed">
                Product Strategist with experience in enterprise software, honed within the Microsoft Azure ecosystem. 
                Focuses on driving innovation in cloud-based platforms and intelligent automation tools.
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
                  href="mailto:hector.norzagaray@ignitionai.xyz" 
                  className="text-deep-charcoal hover:text-ignition-orange transition-colors font-medium"
                >
                  hector.norzagaray@ignitionai.xyz
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

              <Link
                href="/about"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Learn More</span>
              </Link>
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
                    src="/images/qr_codes/hector-business-card.png"
                    alt="QR Code - Hector Norzagaray Business Card"
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
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 text-ignition-orange hover:text-ember-red transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-semibold">IgnitionAI</span>
              </Link>
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

export default HectorBusinessCard;