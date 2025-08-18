"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { label: "Time Savings", value: "80-95%", description: "Target efficiency gains for AI implementations" },
    { label: "ROI Timeline", value: "2-3 months", description: "Our goal for return on investment" },
    { label: "Portfolio Projects", value: "6+", description: "Ready scenarios plus custom solutions" },
    { label: "Cost Reduction", value: "70-90%", description: "Potential savings from AI automation" }
  ];

  const values = [
    {
      title: "Accessible AI",
      description: "We make advanced AI technology simple and approachable for non-technical business owners.",
      icon: "🎯"
    },
    {
      title: "Measurable Impact", 
      description: "Our solutions are designed to deliver quantifiable ROI within 2-3 months of deployment.",
      icon: "📊"
    },
    {
      title: "SMB Focus",
      description: "Purpose-built for small and medium businesses with real-world constraints and budgets.",
      icon: "🚀"
    },
    {
      title: "Proven Technology",
      description: "Built on battle-tested automation, knowledge management, and multilingual AI solutions.",
      icon: "⚡"
    }
  ];

  const scenarios = [
    {
      name: "Manual Process Automation",
      description: "Transform repetitive tasks like data entry, report generation, and workflow routing into intelligent automated systems.",
      challenges: ["Time-consuming manual work", "Human error", "Process bottlenecks"],
      examples: ["Invoice processing", "Customer onboarding", "Inventory tracking"]
    },
    {
      name: "Global Expansion & Communication", 
      description: "Break language barriers with real-time translation, multilingual customer support, and localized content creation.",
      challenges: ["Language barriers", "Cultural adaptation", "Communication scaling"],
      examples: ["Customer support translation", "Document localization", "International sales"]
    },
    {
      name: "Knowledge Management & Training",
      description: "Convert scattered expertise into searchable knowledge bases, automated training, and instant Q&A systems.",
      challenges: ["Knowledge silos", "Training consistency", "Information retrieval"],
      examples: ["Employee onboarding", "Customer self-service", "Internal documentation"]
    },
    {
      name: "Customer Experience Enhancement",
      description: "Deliver 24/7 intelligent support, personalized recommendations, and proactive customer communication.",
      challenges: ["Response time", "Consistency", "Personalization at scale"],
      examples: ["AI chatbots", "Smart recommendations", "Automated follow-ups"]
    },
    {
      name: "Decision Support & Analytics",
      description: "Transform data into actionable insights with automated reporting, trend analysis, and predictive recommendations.",
      challenges: ["Data overload", "Analysis complexity", "Decision delays"],
      examples: ["Market analysis", "Performance dashboards", "Demand forecasting"]
    },
    {
      name: "Document & Content Intelligence",
      description: "Automatically process, summarize, and extract insights from contracts, reports, emails, and other business documents.",
      challenges: ["Document volume", "Information extraction", "Compliance tracking"],
      examples: ["Contract analysis", "Report summarization", "Compliance monitoring"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sparking <span className="text-ignition-orange">SMB Growth</span> with Accessible AI
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              IgnitionAI brings proven AI technology to small and medium-sized businesses through 
              accessible, purpose-built solutions. With six production-ready AI projects in our portfolio, 
              we&apos;re ready to deliver measurable results in 2-3 months.
            </motion.p>
            <motion.div
              className="inline-flex items-center space-x-2 text-ignition-orange font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>🔥</span>
              <span>Making AI Simple and Impactful for Non-Technical SMBs</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-ignition-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                In 2025, over 50% of SMBs are exploring AI, but many struggle with manual processes, 
                global expansion barriers, and complex implementations. IgnitionAI was founded to bridge this gap 
                with accessible, ROI-driven AI solutions built specifically for 
                small and medium businesses.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-deep-charcoal mb-4">
                  Why IgnitionAI Exists
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The AI consulting industry is dominated by large firms targeting enterprise clients 
                  with million-dollar budgets. SMBs are left with generic IT consultants who lack 
                  AI expertise or affordable solutions that deliver real business impact.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  IgnitionAI was founded to change that narrative. We specialize exclusively in SMB AI adoption, 
                  bringing proven technology solutions with quick implementation timelines and measurable ROI.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-ignition-orange/10 to-ember-red/10 p-8 rounded-2xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-deep-charcoal mb-4">
                  Our Unique Edge
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>Affordable, SMB-focused AI with $5K-30K project budgets</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>Six ready-to-deploy scenarios plus custom solutions for unique business challenges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>1-8 week implementation timelines vs. 6+ month enterprise projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>Remote delivery model keeping costs low and accessibility high</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every client interaction and solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-deep-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Scenarios We Ignite
            </h2>
            <p className="text-xl text-gray-600">
              Common business challenges that AI can transform across any industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div 
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:border-ignition-orange/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-deep-charcoal mb-3">
                  {scenario.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {scenario.description}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-ignition-orange mb-2">
                    Common Challenges We Solve:
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {scenario.challenges.map((challenge, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-ignition-orange/10 text-ignition-orange px-3 py-1 rounded-full"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">
                    Example Applications:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {scenario.examples.map((example, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 bg-gradient-to-br from-deep-charcoal to-deep-charcoal/90 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-ignition-orange"
                style={{ color: 'var(--color-ignition-orange)', textShadow: '0 6px 18px rgba(255,98,0,0.12)' }}
              >
                The IgnitionAI Story
              </h2>
              <p className="text-xl text-gray-300">
                Born from the understanding that SMBs deserve enterprise-level AI solutions
              </p>
            </motion.div>

            <motion.div 
              className="prose prose-lg prose-invert mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 leading-relaxed mb-6">
                The AI revolution is happening now, but it&apos;s largely benefiting large enterprises 
                with unlimited budgets and dedicated AI teams. Small and medium businesses—the 
                backbone of the economy—are being left behind.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                IgnitionAI was founded to democratize AI access. Through deep technical expertise 
                and a portfolio of production-ready solutions, we bring enterprise-level AI capabilities 
                to SMBs at accessible price points and implementation timelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our approach is different: we don&apos;t just consult—we implement. We don&apos;t just 
                theorize—we deliver working solutions. Every project is designed with SMB 
                realities in mind: limited budgets, tight timelines, and the need for immediate ROI.
              </p>
            </motion.div>

            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors"
              >
                Start Your AI Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
