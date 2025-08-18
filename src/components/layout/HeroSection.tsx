"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-20 lg:pb-24">
      {/* Subtle tech pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="2" fill="#FF6200"/>
            <path d="M25,5 L25,45 M5,25 L45,25" stroke="#FF6200" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Hero Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="inline-block bg-gradient-to-r from-ignition-orange to-ember-red bg-clip-text text-transparent">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Ignite Your Business with AI
                </h1>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto lg:mx-0">
                Transform your organization with enterprise-grade AI solutions that deliver 
                measurable results. From strategy to implementation, we accelerate your AI journey 
                with proven frameworks and cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                <Link href="/contact" className="btn-primary text-center">
                  Start Your AI Journey
                </Link>
                <Link href="/services" className="btn-secondary text-center">
                  Explore Services
                </Link>
              </div>

              <div className="mt-8 md:mt-12 p-4 border-l-4 border-ignition-orange bg-gray-50 max-w-2xl mx-auto lg:mx-0">
                <p className="font-montserrat italic text-gray-700 text-sm sm:text-base">
                  &ldquo;IgnitionAI helped us achieve 300% ROI within 6 months through intelligent 
                  automation and predictive analytics.&rdquo;
                </p>
                <cite className="block mt-2 text-xs sm:text-sm text-gray-600">
                  - Sarah Chen, CTO at TechFlow Solutions
                </cite>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="flex-1 relative w-full max-w-md lg:max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main AI Flame visualization */}
              <div className="relative flex items-center justify-center h-80 w-80 mx-auto">
                {/* Flame SVG */}
                <svg 
                  viewBox="0 0 200 280" 
                  className="w-full h-full" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Flame shape with gradient */}
                  <path 
                    d="M100 20C100 20 70 50 70 90C70 130 90 140 90 170C90 140 110 140 110 90C110 50 100 20 100 20Z
                       M100 20C100 20 80 40 80 70C80 100 100 110 100 140C100 110 120 110 120 70C120 40 100 20 100 20Z
                       M100 20C100 20 85 35 85 60C85 85 100 95 100 120C100 95 115 95 115 60C115 35 100 20 100 20Z" 
                    fill="url(#flameGradient)" 
                    className="drop-shadow-lg"
                  />
                  
                  {/* AI text in the center */}
                  <text 
                    x="100" 
                    y="120" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="text-4xl font-bold fill-white"
                    style={{ fontSize: '36px' }}
                  >
                    AI
                  </text>
                  
                  {/* Circuit pattern base */}
                  <g transform="translate(0, 200)">
                    <line x1="30" y1="0" x2="170" y2="0" stroke="#1A2526" strokeWidth="3"/>
                    <line x1="50" y1="-10" x2="50" y2="10" stroke="#1A2526" strokeWidth="2"/>
                    <line x1="100" y1="-10" x2="100" y2="10" stroke="#1A2526" strokeWidth="2"/>
                    <line x1="150" y1="-10" x2="150" y2="10" stroke="#1A2526" strokeWidth="2"/>
                    <circle cx="50" cy="0" r="4" fill="#1A2526"/>
                    <circle cx="100" cy="0" r="4" fill="#FFC107"/>
                    <circle cx="150" cy="0" r="4" fill="#1A2526"/>
                  </g>
                  
                  {/* Spark at the tip */}
                  <circle cx="100" cy="25" r="6" fill="#FFC107" className="animate-pulse"/>
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="flameGradient" x1="100" y1="20" x2="100" y2="170" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFC107" />
                      <stop offset="40%" stopColor="#FF6200" />
                      <stop offset="100%" stopColor="#D32F2F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Floating metrics - repositioned for mobile */}
              <motion.div 
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white shadow-lg rounded-lg p-2 sm:p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-xs text-gray-600">ROI Increase</div>
                <div className="text-sm sm:text-lg font-bold text-ignition-orange">+300%</div>
              </motion.div>

              <motion.div 
                className="absolute top-1/2 right-2 sm:-right-2 lg:-right-8 bg-white shadow-lg rounded-lg p-2 sm:p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-xs text-gray-600">Time Saved</div>
                <div className="text-sm sm:text-lg font-bold text-ember-red">80%</div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white shadow-lg rounded-lg p-2 sm:p-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xs text-gray-600">Accuracy</div>
                <div className="text-sm sm:text-lg font-bold text-spark-yellow">99.5%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
