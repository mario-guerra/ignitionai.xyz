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
            <h2 className="section-title mb-6">About IgnitionAI</h2>
            <p className="text-lg mb-6 text-gray-700">
              IgnitionAI was founded to make enterprise-grade AI accessible to small and medium-sized businesses. 
              As a solo practitioner with deep technical expertise, I focus on delivering practical AI solutions 
              that solve real business problems.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              I have six ready-to-deploy AI scenarios that can be implemented immediately, but I'm not limited to these. 
              Each solution is custom-built using proven technologies and frameworks, adapting to whatever challenge 
              your business faces.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">6+</h4>
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
                Learn more about my approach
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
            {/* Technical Stack Visualization */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-deep-charcoal rounded-lg overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <pattern id="tech-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="1" fill="#FF6200"/>
                    <path d="M25,5 L25,45 M5,25 L45,25" stroke="#FF6200" strokeWidth="0.3"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#tech-grid)"/>
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="text-white text-xl font-bold mb-4">Technology Stack</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="text-ignition-orange text-sm font-semibold">LangChain</div>
                  <div className="text-ignition-orange text-sm font-semibold">Azure AI</div>
                  <div className="text-ignition-orange text-sm font-semibold">Next.js</div>
                  <div className="text-ignition-orange text-sm font-semibold">Python</div>
                  <div className="text-ignition-orange text-sm font-semibold">FastAPI</div>
                  <div className="text-ignition-orange text-sm font-semibold">TypeScript</div>
                </div>
              </div>
            </div>
            
            {/* Portfolio Highlight */}
            <div className="absolute -bottom-10 -left-10 bg-white border border-gray-200 p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-ignition-orange rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-bold text-deep-charcoal">Portfolio Highlight</span>
              </div>
              <p className="text-gray-700 text-sm">
                Multi-agent AI system that automates complex workflows and decision-making processes.
              </p>
              <Link href="/services" className="text-ignition-orange text-sm font-semibold mt-2 inline-block">
                View All Solutions →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
