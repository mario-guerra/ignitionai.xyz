"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-deep-charcoal pt-16 md:pt-24 pb-24">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <Image 
          src="/images/circuit-pattern.svg" 
          alt="Circuit Pattern" 
          fill 
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-ignition-orange">Spark</span> Intelligent Transformation
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
                IgnitionAI delivers 80-95% time savings for small and medium-sized businesses through custom AI solutions with ROI in 2-3 months.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free AI Audit
                </Link>
                <Link href="/case-studies" className="btn-tertiary">
                  View Success Stories
                </Link>
              </div>
              
              <div className="mt-12 p-4 border-l-4 border-ignition-orange bg-gray-50 dark:bg-deep-charcoal/80">
                <p className="font-montserrat italic text-gray-700 dark:text-gray-300">
                  "Over 50% of SMBs are exploring AI adoption in 2025, yet many struggle with implementation. We bridge that gap."
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image/Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                <Image 
                  src="/images/catalyst-circuit-logo.svg" 
                  alt="IgnitionAI Catalyst Circuit Logo" 
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-contain"
                />
              </div>
              
              {/* Stats Around the Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-deep-charcoal shadow-lg rounded-lg p-3"
              >
                <p className="font-bold text-ignition-orange text-xl">80-95%</p>
                <p className="text-sm">Time Savings</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute top-1/2 -right-8 bg-white dark:bg-deep-charcoal shadow-lg rounded-lg p-3"
              >
                <p className="font-bold text-ignition-orange text-xl">2-3</p>
                <p className="text-sm">Month ROI</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-deep-charcoal shadow-lg rounded-lg p-3"
              >
                <p className="font-bold text-ignition-orange text-xl">60%</p>
                <p className="text-sm">Fewer Disruptions</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
