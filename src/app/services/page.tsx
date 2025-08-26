"use client";

import { motion } from "framer-motion";

const ServicesPage = () => {
  const services = [
    {
      title: "Multi-Agent AI Systems",
      subtitle: "Intelligent Task Coordination & Automation",
      description: "Deploy specialized AI agents that work together to handle complex business workflows, from information gathering to decision-making.",
      features: [
        "Automated workflow orchestration",
        "Real-time data aggregation from multiple sources",
        "Intelligent task routing and parallel processing",
        "Natural language query processing"
      ],
      technologies: ["LangGraph", "LangChain", "Google Gemini", "SerpAPI"],
      industries: ["Logistics", "Construction", "Event Planning", "Agriculture"],
      roi: "80-95% time savings",
      timeline: "4-6 weeks",
      investment: "From $15K",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Knowledge Management",
      subtitle: "Transform Communication into Searchable Intelligence",
      description: "Convert your team&apos;s conversations, documents, and expertise into AI-powered knowledge bases that everyone can access instantly.",
      features: [
        "Teams/Slack conversation mining",
        "Document summarization and Q&A extraction",
        "RAG-powered chatbots for internal knowledge",
        "Automated knowledge base updates"
      ],
      technologies: ["Azure OpenAI", "Microsoft Graph API", "RAG Architecture", "Vector Databases"],
      industries: ["Professional Services", "Healthcare", "Manufacturing", "Technology"],
      roi: "60-80% reduction in support tickets",
      timeline: "3-5 weeks",
      investment: "From $10K",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Multilingual AI Solutions",
      subtitle: "Break Language Barriers with Smart Translation",
      description: "Real-time translation and transcription services that maintain context and business terminology across multiple languages and formats.",
      features: [
        "Real-time audio transcription and translation",
        "Context-aware document translation",
        "Multi-format processing (PDF, Word, audio, web)",
        "Custom terminology preservation"
      ],
      technologies: ["Azure Speech Services", "Azure Translator", "Azure OpenAI", "Speech SDK"],
      industries: ["Healthcare", "E-commerce", "Manufacturing", "Tourism"],
      roi: "70-90% translation cost reduction",
      timeline: "2-4 weeks",
      investment: "From $8K",
      icon: "🌍",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Document Intelligence & Automation",
      subtitle: "Transform Documents into Actionable Insights",
      description: "Automated document processing that extracts, summarizes, and structures information from any format while maintaining context and accuracy.",
      features: [
        "Intelligent document summarization",
        "Multi-format text extraction (PDF, Word, web)",
        "Custom summary levels for different audiences",
        "Automated content categorization"
      ],
      technologies: ["Azure OpenAI", "PyPDF2", "BeautifulSoup", "Async Processing"],
      industries: ["Legal", "Insurance", "Real Estate", "Financial Services"],
      roi: "85-95% processing time reduction",
      timeline: "2-3 weeks",
      investment: "From $5K",
      icon: "📄",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Conversational AI Development",
      subtitle: "Custom AI Assistants for Your Business",
      description: "Build sophisticated chatbots and AI assistants that understand your business context, integrate with your systems, and provide accurate, helpful responses.",
      features: [
        "Custom chatbot development",
        "API and system integrations",
        "Voice and text interfaces",
        "Contextual conversation management"
      ],
      technologies: ["Azure OpenAI", "LangGraph", "Speech SDK", "Custom APIs"],
      industries: ["Customer Service", "Technical Support", "Sales", "Education"],
      roi: "50-70% support cost reduction",
      timeline: "4-8 weeks",
      investment: "From $12K",
      icon: "💬",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "API Design & Integration",
      subtitle: "AI-Powered API Design and Documentation",
      description: "Streamline API development with AI-assisted design, automatic documentation generation, and intelligent integration planning.",
      features: [
        "Conversational API design",
        "Automatic TypeSpec generation",
        "Integration planning and documentation",
        "Voice-driven design sessions"
      ],
      technologies: ["Azure OpenAI", "TypeSpec", "Speech Recognition", "API Design"],
      industries: ["Software Development", "E-commerce", "SaaS", "Technology"],
      roi: "80-90% design time reduction",
      timeline: "1-3 weeks",
      investment: "From $5K",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current processes, identify automation opportunities, and define success metrics",
      duration: "1 week"
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Custom AI solution architecture tailored to your specific business needs and technical requirements",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Agile development with weekly demos, ensuring the solution fits perfectly into your workflow",
      duration: "2-6 weeks"
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing, performance optimization, and team training for successful adoption",
      duration: "1 week"
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Go-live support with ongoing monitoring, maintenance, and continuous improvement",
      duration: "Ongoing"
    }
  ];

  const guarantees = [
    {
      title: "ROI Guarantee",
      description: "Measurable return on investment within 2-3 months",
      icon: "📈"
    },
    {
      title: "Fixed Timeline",
      description: "Clear project timelines with weekly milestones",
      icon: "⏱️"
    },
    {
      title: "Transparent Pricing",
      description: "Transparent pricing",
      icon: "💰"
    },
    {
      title: "30-Day Support",
      description: "Support for 30 days after deployment",
      icon: "🛠️"
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
              AI Solutions That <span className="text-ignition-orange">Drive Results</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From quick-win pilots to comprehensive transformations, we deliver proven AI implementations 
              that generate measurable ROI in 2-3 months. Start small or go big—we meet you where you are.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="#quick-wins" 
                className="px-8 py-4 border-2 border-ignition-orange text-ignition-orange font-semibold rounded-lg hover:bg-ignition-orange hover:text-white transition-colors"
              >
                Start with Quick Wins
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Wins Section */}
      <section id="quick-wins" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Start Your AI Journey - <span className="text-ignition-orange">Proven Quick Wins</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast results, clear ROI, and a natural path to scale. Start small, see immediate impact, 
              then expand to comprehensive AI transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* AI Call Agent */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">AI Call Agent</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Missing calls = lost revenue. AI answers, qualifies, and books appointments automatically
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $500</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate </span>
                  <span className="text-gray-600"> 1-2 weeks</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 3+ bookings/week</span>
                </div>
              </div>
              <div className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Conversational AI Development
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>

            {/* Email Lead Triage */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-purple-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">Email Lead Triage</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Buried leads, slow responses. AI prioritizes and suggests replies instantly
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $750</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate </span>
                  <span className="text-gray-600"> 1-2 weeks</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 80% faster responses</span>
                </div>
              </div>
              <div className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Multi-Agent AI Systems
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>

            {/* FAQ Support Bot */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-green-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">FAQ Support Bot</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Team wastes time searching for answers. AI provides instant, accurate responses
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $1500</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate </span>
                  <span className="text-gray-600"> 2-4 weeks</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 50% ticket deflection</span>
                </div>
              </div>
              <div className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Intelligent Knowledge Management
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Appointment Booking Automation */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-indigo-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">Booking Automation</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Manual scheduling eats time, creates errors. Automated flow reduces no-shows and admin burden
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $300</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate</span>
                  <span className="text-gray-600"> 1 week</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 60% fewer no-shows</span>
                </div>
              </div>
              <div className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Multi-Agent AI Systems
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>

            {/* Invoice & Receipt Automation */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-orange-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🧾</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">Invoice Automation</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Manual invoice handling is slow and error-prone. AI extracts, matches, and reconciles automatically
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $1500</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate</span>
                  <span className="text-gray-600"> 2-4 weeks</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 85% faster processing</span>
                </div>
              </div>
              <div className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Document Intelligence & Automation
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>

            {/* Multilingual Communications */}
            <motion.div 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-teal-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-deep-charcoal mb-2">Multilingual Communications</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Language barriers lead to missed sales. AI provides fast, accurate translations with brand voice
              </p>
              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Solutions from </span>
                  <span className="text-gray-600"> $500</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">Timeline estimate </span>
                  <span className="text-gray-600"> 1-3 weeks</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-deep-charcoal">ROI up to </span>
                  <span className="text-ignition-orange font-semibold"> 70% faster translations</span>
                </div>
              </div>
              <div className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full mb-4 inline-block">
                ↗ Scales to Multilingual AI Solutions
              </div>
              <a 
                href="/contact" 
                className="block w-full text-center px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors text-sm"
              >
                Start Pilot Project
              </a>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Ready for comprehensive AI transformation?
            </p>
            <a 
              href="#enterprise-services" 
              className="inline-flex items-center text-ignition-orange font-semibold hover:text-ignition-orange/80 transition-colors"
            >
              Explore Enterprise Solutions 
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enterprise Services Grid */}
      <section id="enterprise-services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI transformations for businesses ready to scale. 
              Each solution is built from real-world implementations with documented success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-max">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow w-full"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold text-deep-charcoal mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-ignition-orange font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      {(service.title === "Conversational AI Development" || 
                        service.title === "Multi-Agent AI Systems" || 
                        service.title === "Intelligent Knowledge Management" ||
                        service.title === "Document Intelligence & Automation" ||
                        service.title === "Multilingual AI Solutions") && (
                        <div className="text-xs bg-ignition-orange/10 text-ignition-orange px-3 py-1 rounded-full mb-4 inline-block">
                          Quick Start Available
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-deep-charcoal mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <span className="text-ignition-orange mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-deep-charcoal">Timeline estimate</span>
                        <p className="text-gray-600">{service.timeline}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-deep-charcoal">Investment</span>
                        <p className="text-gray-600">{service.investment}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-deep-charcoal">Potential ROI</span>
                        <p className="text-ignition-orange font-semibold">{service.roi}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-deep-charcoal">Industries</span>
                        <p className="text-gray-600">{service.industries.slice(0, 2).join(", ")}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.technologies.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                            +{service.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <a 
                        href="/contact" 
                        className="block w-full text-center px-4 py-2 bg-deep-charcoal text-white font-semibold rounded-lg hover:bg-deep-charcoal/90 transition-colors"
                      >
                        Schedule Consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach refined through dozens of successful AI implementations
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-ignition-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-deep-charcoal">
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">
              Our Commitment to Your Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our work to ensure your AI investment delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-ignition-orange">
                  {guarantee.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Schedule a free consultation to discover which AI solution will deliver 
              the biggest impact for your business in the next 90 days
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/blog" 
                className="px-8 py-4 border-2 border-ignition-orange text-ignition-orange font-semibold rounded-lg hover:bg-ignition-orange hover:text-white transition-colors"
              >
                Read Our Insights
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
