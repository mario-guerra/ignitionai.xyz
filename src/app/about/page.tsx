"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { label: "Enterprise Experience", value: "15+ Years", description: "Microsoft, Qualcomm, and ARM" },
    { label: "Client Demonstrations", value: "65+", description: "Proven client-facing expertise" },
    { label: "Monthly AI Interactions", value: "5,000+", description: "Queries handled by deployed systems" },
    { label: "Typical ROI Timeline", value: "90 Days", description: "Measurable impact delivery" }
  ];

  const values = [
    {
      title: "Production-Ready Solutions",
      description: "We architect, implement, and deploy AI systems that scale in production environments, not just prototypes.",
      icon: "🎯"
    },
    {
      title: "Enterprise Methodologies", 
      description: "Our solutions are built on methodologies tested across Fortune 500 companies at Microsoft, Qualcomm, and ARM.",
      icon: "📊"
    },
    {
      title: "Measurable Impact",
      description: "Every engagement delivers quantifiable ROI within 90 days, with 40-70% improvements in key metrics.",
      icon: "🚀"
    },
    {
      title: "Deep Technical Expertise",
      description: "15+ years of enterprise AI experience shipping solutions that handle thousands of daily interactions.",
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
              Enterprise-Proven <span className="text-ignition-orange">AI Solutions</span> for Growing Businesses
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              IgnitionAI brings 15+ years of enterprise AI experience from Microsoft, Qualcomm, and ARM 
              to help businesses implement production-ready AI solutions that deliver measurable impact 
              within 90 days.
            </motion.p>
            <motion.div
              className="inline-flex items-center space-x-2 text-ignition-orange font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>🔥</span>
              <span>Production-Ready AI • Enterprise-Proven Methodologies • Measurable Results</span>
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

      {/* Founder & Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                Leadership & Expertise
              </h2>
              <p className="text-xl text-gray-600">
                Founded by enterprise AI veterans with a track record of shipping production solutions
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Mario Guerra Profile (left column) */}
              <div>
                <h3 className="text-2xl font-bold text-deep-charcoal mb-2">Mario Guerra</h3>
                <p className="text-lg text-ignition-orange font-semibold mb-4">Founder & Principal AI Architect</p>
                <p className="mb-6 text-gray-700">
                  Mario Guerra is the Founder and Principal AI Architect of IgnitionAI, bringing 15+ years of enterprise AI experience from Microsoft, Qualcomm, and ARM to help businesses transform operations through production-ready AI implementations.
                </p>
                <p className="mb-6 text-gray-700">
                  Unlike consultants who focus on experimental prototypes, Mario specializes in shipping AI solutions that deliver measurable business impact—from reducing documentation queries by 85% to achieving 30+% adoption across Azure services.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-deep-charcoal mb-2">Enterprise Platform Heritage</h4>
                  <p className="text-gray-700 text-sm">
                    Having architected solutions for Azure services, Snapdragon AI platforms, and ARM Cortex systems, Mario understands how AI implementations must integrate with existing enterprise infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal mb-2">Client-Facing Excellence</h4>
                  <p className="text-gray-700 text-sm">
                    With over 65 client demonstrations and training sessions delivered across Microsoft, Qualcomm, and ARM, Mario brings a unique combination of technical depth and client communication skills.
                  </p>
                </div>
              </div>
              {/* Achievements (right column) */}
              <div className="space-y-8">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="font-bold text-deep-charcoal mb-3">Production-Ready AI Solutions</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    At IgnitionAI, we don&apos;t just build proof-of-concepts. We architect, implement, and deploy AI systems that scale in production environments. Our approach is grounded in methodologies tested across Fortune 500 companies.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li>85% reduction in support response times through knowledge-powered AI assistants</li>
                    <li>70% improvement in process efficiency via multi-agent AI architectures</li>
                    <li>92% user satisfaction rates across deployed AI solutions</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-deep-charcoal mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                    <li>Led prototyping and production launch of GitHub Copilot extension for Azure</li>
                    <li>Built AI assistants processing 5,000+ monthly queries with 92% satisfaction</li>
                    <li>Guided TypeSpec API language to 30+% adoption across Azure services</li>
                    <li>Delivered 40+ customer onboarding sessions supporting 150+ deployments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hector Norzagaray Profile */}
            <div className="mt-16 pt-16 border-t border-gray-200">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Hector Profile (left column) */}
                <div>
                  <h3 className="text-2xl font-bold text-deep-charcoal mb-2">Hector Norzagaray</h3>
                  <p className="text-lg text-ignition-orange font-semibold mb-4">Product Engineering & Community Strategy</p>
                  <p className="mb-6 text-gray-700">
                    Hector Norzagaray is a dedicated Product Strategist with several years of experience in enterprise software, honed within the Microsoft Azure ecosystem. With a focus on driving innovation in cloud-based platforms and AI-first developer tools, Hector helps organizations enhance their operations through scalable, secure technology solutions.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Unlike many professionals who emphasize theoretical concepts, Hector thrives on delivering practical, impactful products that support technical adoption and business growth across diverse environments.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-deep-charcoal mb-2">Enterprise Platform Insight</h4>
                    <p className="text-gray-700 text-sm">
                      With a background shaping solutions in Azure&apos;s cloud landscape, Hector brings a solid understanding of how technology integrations can strengthen enterprise systems, supporting scalable infrastructure and user-focused applications.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-deep-charcoal mb-2">Client-Facing Strength</h4>
                    <p className="text-gray-700 text-sm">
                      Having led numerous engagement sessions and community initiatives at Microsoft, Hector combines technical expertise with effective communication to align strategies with stakeholder expectations.
                    </p>
                  </div>
                </div>
                {/* Hector's Achievements (right column) */}
                <div className="space-y-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-deep-charcoal mb-3">Impact Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                      <li>Measurable improvements in developer engagement through community platforms</li>
                      <li>Significant enhancements in product usability and user satisfaction</li>
                      <li>High approval ratings from feedback on deployed tools</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-bold text-deep-charcoal mb-3">Key Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                      <li>Guided the development of cloud-based SDKs, enhancing data management capabilities</li>
                      <li>Created widely shared content on innovative technology applications for developers</li>
                      <li>Supported numerous client onboarding efforts, contributing to successful deployments</li>
                      <li>Facilitated global developer engagement through interactive platforms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                The IgnitionAI Difference
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We bridge the gap between enterprise-grade AI capabilities and accessible business solutions. 
                Our implementations deliver immediate, measurable impact through production-ready systems 
                built on proven methodologies.
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
                  Enterprise-Proven Methodologies
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our solutions are built on methodologies tested across Fortune 500 companies at Microsoft, 
                  Qualcomm, and ARM. We understand enterprise constraints, compliance requirements, and the 
                  critical difference between a working demo and a production system that handles thousands 
                  of daily interactions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This enterprise heritage enables us to deliver faster, more reliable deployments that work 
                  within your current technology ecosystem while scaling to meet growing business demands.
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
                  Measurable Business Impact
                </h3>
                <p className="text-gray-600 mb-4">
                  Every engagement is designed around specific, measurable outcomes:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>ROI typically achieved within 90 days of deployment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>40-70% improvements in key operational metrics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>Production systems handling thousands of daily interactions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-ignition-orange mt-1">•</span>
                    <span>Seamless integration with existing technology infrastructure</span>
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
                Why IgnitionAI Exists
              </h2>
              <p className="text-xl text-gray-300">
                Bridging the gap between enterprise-grade AI capabilities and accessible business solutions
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
                The AI revolution is creating a two-tier system: large enterprises with unlimited budgets 
                and dedicated AI teams are rapidly implementing sophisticated solutions, while growing 
                businesses are left with generic consultants who lack deep AI expertise or experimental 
                prototypes that never reach production.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                IgnitionAI was founded to democratize access to enterprise-grade AI solutions. Through 
                our founder&apos;s 15+ years of experience shipping production AI systems at Microsoft, 
                Qualcomm, and ARM, we bring Fortune 500-proven methodologies to businesses ready 
                to transform their operations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our approach is fundamentally different: we don&apos;t just consult—we implement production-ready 
                systems. We don&apos;t just theorize—we deliver measurable results. Every solution is designed 
                with the understanding that businesses need AI implementations that integrate seamlessly 
                with existing infrastructure and deliver ROI within 90 days.
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
