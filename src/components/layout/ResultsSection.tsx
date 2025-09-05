"use client";

import { motion } from "framer-motion";

const ResultsSection = () => {
  const capabilities = [
    {
      metric: "12+",
      description: "Ready-to-deploy AI scenarios with custom solutions for unique challenges",
      color: "ignition-orange"
    },
    {
      metric: "1-8",
      description: "Week implementation timelines for rapid business impact",
      color: "ember-red"
    },
    {
      metric: "100%",
      description: "Custom-built solutions using proven AI technologies",
      color: "deep-charcoal"
    },
  ];

  return (
    <section className="section bg-ignition-orange text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Smart Solutions, Measurable Outcomes</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Here&apos;s what IgnitionAI brings to your AI and automation transformation journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-deep-charcoal rounded-lg p-6 text-center shadow-lg"
            >
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                capability.color === 'ignition-orange' ? 'text-ignition-orange' :
                capability.color === 'ember-red' ? 'text-ember-red' :
                capability.color === 'spark-yellow' ? 'text-spark-yellow' :
                'text-deep-charcoal'
              }`}>
                {capability.metric}
              </div>
              <p className="text-gray-700">{capability.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Implementation Approach */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Implementation Approach</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>
            
            <div className="space-y-12 md:space-y-0">
              {/* Week 1-2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:text-right"
                >
                  <h4 className="text-xl font-bold mb-2">Week 1-2: Discovery & Design</h4>
                  <p className="opacity-90">Understand your business challenges, identify AI opportunities, and design a custom solution.</p>
                </motion.div>
                <div className="hidden md:block relative">
                  <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ignition-orange flex items-center justify-center">
                    <span className="text-ignition-orange font-bold">1</span>
                  </div>
                </div>
              </div>
              
              {/* Week 3-6 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block relative">
                  <div className="absolute right-0 transform translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ignition-orange flex items-center justify-center">
                    <span className="text-ignition-orange font-bold">2</span>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold mb-2">Week 3-6: Development</h4>
                  <p className="opacity-90">Build your custom AI solution using proven technologies and integrate with your systems.</p>
                </motion.div>
              </div>
              
              {/* Week 7-8 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:text-right"
                >
                  <h4 className="text-xl font-bold mb-2">Week 7-8: Training & Deployment</h4>
                  <p className="opacity-90">Deploy the solution, train your team, and optimize based on real-world usage.</p>
                </motion.div>
                <div className="hidden md:block relative">
                  <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ignition-orange flex items-center justify-center">
                    <span className="text-ignition-orange font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Ongoing */}
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block relative">
                  <div className="absolute right-0 transform translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ignition-orange flex items-center justify-center">
                    <span className="text-ignition-orange font-bold">4</span>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold mb-2">Ongoing: Support & Growth</h4>
                  <p className="opacity-90">Monitor performance, provide support, and identify opportunities for expansion.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
