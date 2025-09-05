"use client";

import { motion } from 'framer-motion';

const SolutionSpectrumSection = () => {
  const solutions = [
    {
      title: "Automation",
      description: "Simple, rule-based solutions for repetitive tasks",
      examples: ["Invoice processing", "Appointment reminders", "Data entry"],
      bestFor: "Predictable, repetitive tasks",
      complexity: "Low",
      roi: "30-60 days",
      icon: "⚙️"
    },
    {
      title: "Intelligent Automation",
      description: "Advanced solutions that can interpret data and make basic decisions",
      examples: ["Email triage & prioritization", "Document classification", "Customer service routing"],
      bestFor: "Variable inputs, basic decision-making",
      complexity: "Medium",
      roi: "60-90 days",
      icon: "🔄"
    },
    {
      title: "AI Solutions",
      description: "Learning systems that adapt, predict, and provide insights",
      examples: ["Customer service chatbots", "Sales prediction tools", "Content generation"],
      bestFor: "Complex tasks requiring learning & adaptation",
      complexity: "High",
      roi: "90+ days",
      icon: "🧠"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">Solution Spectrum</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find the right solution for your business needs, from simple automation to advanced AI
          </p>
        </motion.div>
        
        {/* Visual Spectrum */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-300 via-ignition-orange to-ember-red transform -translate-y-1/2 rounded-full" />
          
          {/* Solution Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 relative z-10"
              >
                {/* Circle Indicator on Timeline (desktop only) */}
                <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg items-center justify-center">
                  <div 
                    className={`w-5 h-5 rounded-full ${
                      index === 0 ? 'bg-blue-400' : 
                      index === 1 ? 'bg-ignition-orange' : 
                      'bg-ember-red'
                    }`}
                  />
                </div>

                <div className="text-center mb-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="text-xl font-bold text-deep-charcoal mt-3">{solution.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <span className="font-semibold text-deep-charcoal">Best for:</span>
                    <span className="text-gray-700 ml-2">{solution.bestFor}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-deep-charcoal">Complexity:</span>
                    <span className="text-gray-700 ml-2">{solution.complexity}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-deep-charcoal">Typical ROI:</span>
                    <span className="text-gray-700 ml-2">{solution.roi}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">Example use cases:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {solution.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Not sure where your business needs fall on the spectrum?
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get a Free Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSpectrumSection;
