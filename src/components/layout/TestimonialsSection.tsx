"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const PortfolioShowcase = () => {
  const portfolioHighlights = [
    {
      title: "Multi-Agent AI System",
      description: "Complex workflow automation using LangGraph for multi-step business processes with decision-making capabilities.",
      technology: "LangGraph + Python",
      scenario: "Process Automation",
      icon: "⚡"
    },
    {
      title: "Knowledge-Powered Chatbot",
      description: "Intelligent assistant that leverages your existing documentation and data to deliver precise, relevant responses instantly.",
      technology: "Azure AI + TypeScript",
      scenario: "Knowledge Management",
      icon: "🤖"
    },
    {
      title: "Document Intelligence",
      description: "AI-powered document summarization and analysis system for rapid information extraction and insights.",
      technology: "Azure AI + Python",
      scenario: "Document Processing",
      icon: "📄"
    }
  ];

  const technologies = [
    { name: "LangGraph", category: "AI Framework" },
    { name: "Azure AI", category: "Cloud Platform" },
    { name: "Next.js", category: "Frontend" },
    { name: "Python", category: "Backend" },
    { name: "TypeSpec", category: "API Development" },
    { name: "TypeScript", category: "Development" }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <pattern id="portfolio-circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="#FF6200"/>
            <path d="M25,5 L25,45 M5,25 L45,25" stroke="#FF6200" strokeWidth="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#portfolio-circuit)"/>
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Portfolio Highlights</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Real AI solutions built with proven technologies. Here&apos;s what IgnitionAI can deliver for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {portfolioHighlights.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8 relative border border-gray-100 hover:border-ignition-orange/30 transition-colors"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{project.icon}</div>
              
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-ignition-orange/10 text-ignition-orange text-sm font-semibold rounded-full mb-3">
                  {project.scenario}
                </div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="text-sm text-gray-500 font-medium">
                  Built with: {project.technology}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Technology Stack */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-deep-charcoal mb-8">Technology Stack</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-ignition-orange/30 transition-colors"
                >
                  <div className="font-semibold text-deep-charcoal">{tech.name}</div>
                  <div className="text-sm text-gray-500">{tech.category}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 md:p-12 rounded-xl shadow-2xl"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Solution?</h3>
              <p className="text-white/90 max-w-xl">
                Let&apos;s discuss how these proven technologies can solve your specific business challenges. 
                Schedule a free consultation to explore what&apos;s possible.
              </p>
            </div>
            <div className="flex-shrink-0 space-y-3 md:space-y-0 md:space-x-3 md:flex">
              <Link href="/services" className="inline-block px-6 py-3 bg-white text-ignition-orange font-bold rounded-lg transition-all hover:bg-gray-100 hover:shadow-lg text-center">
                View All Solutions
              </Link>
              <Link href="/contact" className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded-lg transition-all hover:bg-white hover:text-ignition-orange text-center">
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
