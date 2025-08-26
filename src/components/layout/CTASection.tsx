"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  // Predetermined positions for the sparks to avoid hydration errors
  const sparkPositions = [
    { left: "10%", top: "20%" },
    { left: "30%", top: "15%" },
    { left: "50%", top: "25%" },
    { left: "70%", top: "10%" },
    { left: "85%", top: "30%" },
    { left: "15%", top: "70%" },
    { left: "40%", top: "80%" },
    { left: "75%", top: "65%" }
  ];
  
  // Predetermined animation durations and delays
  const animations = [
    { duration: 3, delay: 0 },
    { duration: 2.5, delay: 0.5 },
    { duration: 4, delay: 0.2 },
    { duration: 3.5, delay: 0.7 },
    { duration: 2.8, delay: 0.3 },
    { duration: 3.2, delay: 0.6 },
    { duration: 4.2, delay: 0.1 },
    { duration: 3.7, delay: 0.4 }
  ];
  
  return (
    <section className="section bg-deep-charcoal text-white py-24 relative overflow-hidden">
      {/* Animated sparks in background */}
      <div className="absolute inset-0 overflow-hidden">
        {sparkPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-ignition-orange"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: animations[i].duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: animations[i].delay,
            }}
          />
        ))}
      </div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-circuit-pattern bg-repeat"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 !text-white">
              Ready to <span className="text-ignition-orange">Ignite</span> Your Organization&apos;s AI Potential?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Schedule a free consultation with our experts to discover how IgnitionAI can transform your business operations and deliver measurable ROI
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule Consultation
              </Link>
              
              <Link href="/blog" className="btn-secondary text-lg px-8 py-4">
                Read Our Insights
              </Link>
            </div>
          </motion.div>
          
          {/* Features highlight */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-deep-charcoal/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 rounded-full bg-ignition-orange/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Fast Implementation</h3>
              <p className="text-gray-300">Solutions deployed in weeks, not months, for rapid ROI.</p>
            </div>
            
            <div className="bg-deep-charcoal/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 rounded-full bg-ignition-orange/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and data privacy compliance.</p>
            </div>
            
            <div className="bg-deep-charcoal/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 rounded-full bg-ignition-orange/20 flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Custom Solutions</h3>
              <p className="text-gray-300">Tailored to your specific industry and workflow needs.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
