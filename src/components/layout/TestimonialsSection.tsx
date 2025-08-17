"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "IgnitionAI transformed our customer service with an AI assistant that handles 78% of inquiries automatically, freeing our team to focus on complex issues.",
      author: "Sarah Johnson",
      title: "Customer Experience Director",
      company: "RetailPlus",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "The multilingual content generation solution from IgnitionAI helped us expand into 12 new markets in just 3 months, something that would have taken a year with our previous approach.",
      author: "Michael Chen",
      title: "VP of Global Marketing",
      company: "GrowthTech",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "Our legal team used to spend weeks reviewing contracts. With IgnitionAI's document analysis solution, they now do it in hours with even greater accuracy.",
      author: "David Okafor",
      title: "Legal Operations Manager",
      company: "EnterpriseCore",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-light-gray relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-circuit-pattern bg-repeat"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what organizations are achieving with IgnitionAI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-xl p-8 relative"
            >
              {/* Quotation mark */}
              <div className="absolute top-4 left-4 text-6xl text-ignition-orange/20">&ldquo;</div>
              
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                    {/* This would be replaced with actual images when available */}
                    <div className="w-full h-full bg-gradient-to-br from-ignition-orange to-ember-red"></div>
                  </div>
                  <div>
                    <p className="font-bold text-deep-charcoal">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Client logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider font-medium">Trusted by innovative organizations</p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
          >
            {/* These would be replaced with actual client logos */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="h-8 w-32 bg-gray-200 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
            ))}
          </motion.div>
        </div>
        
        {/* Case study callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 md:p-12 rounded-xl shadow-2xl"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">See the full story</h3>
              <p className="text-white/90 max-w-xl">
                Learn how RetailPlus achieved 78% automation in customer service and saw a 42% reduction in response time with our AI solutions.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="/case-studies/retailplus" className="inline-block px-8 py-4 bg-white text-ignition-orange font-bold rounded-lg transition-all hover:bg-light-gray hover:shadow-lg">
                Read Case Study
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
