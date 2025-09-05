"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="section py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-6">About IgnitionAI: Technology Solutions Matched to Business Needs</h2>
            <p className="text-lg mb-6 text-gray-700">
              IgnitionAI was founded to help startups and SMBs implement the right technology solutions, whether that&apos;s automation, 
              intelligent workflows, or advanced AI. Unlike consultancies that push complex AI regardless of need, we focus on 
              matching technology to your specific business challenges.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              With deep technical expertise and enterprise experience, we begin every engagement by understanding your business 
              goals and processes. Then we recommend the simplest, most cost-effective solution that will deliver the results you need.
              We have ready-to-deploy scenarios across the automation to AI spectrum that can be implemented immediately, with solutions 
              ranging from simple workflow automation to complex AI systems, each custom-built using proven technologies and frameworks.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">12+</h4>
                  <p className="text-sm text-gray-600">Ready Scenarios</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">1-8</h4>
                  <p className="text-sm text-gray-600">Week Delivery</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">100%</h4>
                  <p className="text-sm text-gray-600">Custom Built</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/about" className="text-ignition-orange hover:text-ember-red font-bold flex items-center transition-colors">
                Learn more about our approach
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional Visual */}
            <div className="min-h-[200px] md:aspect-video bg-gradient-to-br from-ignition-orange/5 to-ember-red/5 border border-gray-200 rounded-lg overflow-hidden shadow-xl relative flex items-center justify-center">
              <div className="text-center p-4 md:p-8 w-full">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-ignition-orange to-ember-red rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-deep-charcoal mb-2 md:mb-3">Enterprise AI for Startups & SMBs</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs mx-auto">
                  Bringing enterprise-grade AI solutions to startups and small and medium businesses with startup-friendly budgets and timelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
