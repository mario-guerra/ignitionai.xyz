"use client";

import { motion } from "framer-motion";

const ResultsSection = () => {
  const results = [
    {
      metric: "80-95%",
      description: "Time savings through AI-powered automation and workflows",
      color: "ignition-orange"
    },
    {
      metric: "2-3",
      description: "Months to achieve return on investment",
      color: "ember-red"
    },
    {
      metric: "60%",
      description: "Reduction in operational disruptions",
      color: "spark-yellow"
    },
    {
      metric: "70%",
      description: "Cost savings on translation and multilingual services",
      color: "deep-charcoal"
    },
  ];

  return (
    <section className="section bg-ignition-orange text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Results That Speak for Themselves</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Our clients achieve measurable business impact with IgnitionAI solutions. Here's what you can expect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-deep-charcoal/90 text-deep-charcoal dark:text-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className={`text-5xl md:text-6xl font-bold mb-4 ${
                result.color === 'ignition-orange' ? 'text-ignition-orange' :
                result.color === 'ember-red' ? 'text-ember-red' :
                result.color === 'spark-yellow' ? 'text-spark-yellow' :
                'text-deep-charcoal'
              }`}>
                {result.metric}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{result.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Process Timeline */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Implementation Timeline</h3>
          
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
                  <h4 className="text-xl font-bold mb-2">Week 1-2: Assessment & Design</h4>
                  <p className="opacity-90">Complete AI audit, identify highest-ROI opportunities, and create custom solution design.</p>
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
                  <h4 className="text-xl font-bold mb-2">Week 3-6: Implementation</h4>
                  <p className="opacity-90">Develop custom solutions, integrate with existing systems, and provide initial training.</p>
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
                  <h4 className="text-xl font-bold mb-2">Week 7-8: Optimization</h4>
                  <p className="opacity-90">Fine-tune solutions based on initial usage data and train team members on best practices.</p>
                </motion.div>
                <div className="hidden md:block relative">
                  <div className="absolute left-0 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-ignition-orange flex items-center justify-center">
                    <span className="text-ignition-orange font-bold">3</span>
                  </div>
                </div>
              </div>
              
              {/* Week 9+ */}
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
                  <h4 className="text-xl font-bold mb-2">Week 9+: ROI Realization</h4>
                  <p className="opacity-90">Measure results, calculate ROI, and identify opportunities for expansion and improvement.</p>
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
