"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const DoYouNeedAIOrAutomation = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-ignition-orange text-white rounded-full text-sm font-semibold">
                Business Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
              Do You Need a Full AI System or Just Workflow Automation? Understanding the Differences for Your Business
            </h1>
            <p className="text-xl md:text-2xl !text-gray-300 mb-8">
              A short, pragmatic guide to choose between simple automation, intelligent automation, and AI so you spend money where it actually moves the needle.
            </p>
            <div className="flex items-center justify-center text-gray-300 text-sm">
              <span>By Mario Guerra & Hector Norzagaray</span>
              <span className="mx-3">•</span>
              <span>4 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Many small business owners hear the terms “automation,” “intelligent automation,” and “AI” and feel confused. These terms are often used interchangeably, but they are not the same. Choosing the right approach can save time, reduce costs, and help your business grow.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A recent MIT study on the state of AI in business (2025) found that most AI projects fail to deliver measurable results. The main reasons include poor integration, unclear goals, and lack of alignment with business needs. This shows that using AI wisely starts with understanding the difference between simple automation, intelligent automation, and AI.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">What is Automation?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Automation is when technology performs repetitive tasks that humans usually do.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Examples</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>Sending automatic appointment reminders.</li>
                  <li>Generating daily sales or inventory reports.</li>
                  <li>Moving invoices from email to accounting software automatically.</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Benefits: saves time on routine work, reduces human error, and increases efficiency. Best use: predictable, repetitive tasks that take up a lot of time.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">What is Intelligent Automation?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Intelligent automation builds on automation and adds “smarts.” It can interpret data and make small decisions.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Examples</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>An email system that reads incoming messages, decides which are urgent, and assigns them automatically.</li>
                  <li>A tool that scans invoices in different formats and organizes them for accounting.</li>
                  <li>A customer service system that routes requests based on keywords.</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Benefits: handles more complex tasks, reduces manual decision-making, improves speed and accuracy. Best use: tasks with some variability or that require basic decision-making.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">What is AI?</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AI systems learn from data, adapt to new situations, and improve over time. Unlike automation, AI can make predictions and provide insights.
              </p>

              <div className="bg-light-gray p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-deep-charcoal mb-3">Examples</h3>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>An AI chatbot that answers customer questions and improves with each interaction.</li>
                  <li>A tool that predicts which leads are most likely to convert into sales.</li>
                  <li>A call scheduling assistant that interacts naturally with customers and sets appointments.</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Benefits: learns and improves continuously, makes data-driven decisions, creates new opportunities that automation alone cannot deliver. Best use: when you want systems that handle complex tasks, adapt over time, and help you make better business decisions.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">How to Decide What You Need</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                - Automation: For simple, repetitive tasks.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                - Intelligent Automation: For tasks that require decision-making or handling variable inputs.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                - AI: For tasks that need learning, predictions, or insights.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The MIT study emphasizes that AI works best when it is implemented thoughtfully with clear goals and alignment with business processes. Starting small and focusing on quick wins helps ensure measurable results.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">Next Steps</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you want to explore whether automation, intelligent automation, or AI is right for your business, IgnitionAI can help. We guide small businesses through assessing opportunities, implementing solutions, and measuring impact—so you can focus on running and growing your business.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Contact us today to see how your business can work smarter, not harder.</strong>
              </p>

              <div className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to evaluate your opportunities?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Book a short discovery call and we’ll identify practical, high-impact AI and automation opportunities you can implement quickly.
                </p>
                <Link href="/contact" className="inline-block bg-white text-ignition-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule a Free Consultation
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DoYouNeedAIOrAutomation;
