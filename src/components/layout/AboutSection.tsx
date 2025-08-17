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
              IgnitionAI was founded with a mission to make cutting-edge AI technology accessible and practical for organizations of all sizes. Our team of AI experts, data scientists, and business strategists works collaboratively to create solutions that deliver measurable value.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Unlike generic AI consultancies, we focus exclusively on practical implementations with rapid ROI. Every solution we design is tailored to your specific business challenges, industry context, and growth objectives.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">30+</h4>
                  <p className="text-sm text-gray-600">AI Specialists</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">50+</h4>
                  <p className="text-sm text-gray-600">Client Projects</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-ignition-orange/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ignition-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">97%</h4>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/about" className="text-ignition-orange hover:text-ember-red font-bold flex items-center transition-colors">
                Learn more about our team
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
            {/* This would be replaced with an actual team or office image */}
            <div className="aspect-video bg-gradient-to-br from-ignition-orange to-ember-red rounded-lg overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-circuit-pattern bg-repeat"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">Team Image Placeholder</div>
              </div>
            </div>
            
            {/* Testimonial callout */}
            <div className="absolute -bottom-10 -left-10 bg-white border border-gray-200 p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex space-x-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spark-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm italic">
                &ldquo;IgnitionAI helped us reduce customer response times by 62% while improving satisfaction scores.&rdquo;
              </p>
              <p className="font-bold text-sm mt-2">CTO, Fortune 500 Retailer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
