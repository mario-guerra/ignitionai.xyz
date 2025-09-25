"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import LanguageToggle from '@/components/blog/LanguageToggle';
import { BlogPostMetadata } from '@/lib/blog/metadata';

interface NeverLoseAnotherLeadClientProps {
  post: BlogPostMetadata;
}

const NeverLoseAnotherLeadClient = ({ post }: NeverLoseAnotherLeadClientProps) => {
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
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
              {post.title}
            </h1>
            <p className="text-xl md:text-2xl !text-gray-300 mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center text-gray-300 text-sm gap-4">
              <div className="flex items-center">
                <span>By {post.author}</span>
                <span className="mx-3">•</span>
                <span>{post.readTime}</span>
              </div>
              <LanguageToggle currentPost={post} />
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
                In today&apos;s hyper-competitive business landscape, the difference between winning and losing a customer often comes down to seconds, literally. A potential client reaches out, eager to learn about your services, but if you&apos;re stuck in meetings, away from your desk, or simply overwhelmed with daily tasks, that golden opportunity can slip away faster than you can say &ldquo;missed call.&rdquo;
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At Ignition AI, we&apos;ve cracked the code on this challenge with an intelligent automation system that doesn&apos;t just respond to leads, it engages them, qualifies them, and guides them seamlessly toward becoming your next customer. All while you focus on what you do best: running your business.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6 mt-12">The Hidden Cost of Manual Lead Management</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Picture this scenario: Sarah, a potential client, visits your website at 8 PM on a Tuesday. She&apos;s been researching solutions all week, she&apos;s ready to make a decision, and your service is exactly what she needs. She fills out your contact form with genuine interest, hits submit, and then... waits.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hours pass. Then a full day. By the time you respond with &ldquo;Thanks for reaching out, let&apos;s schedule a call,&rdquo; Sarah has already moved on to a competitor who got back to her within minutes. You&apos;ve lost not just a sale, but potentially a long-term customer relationship worth thousands of dollars.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This scenario plays out countless times across businesses every day. The statistics are sobering:
              </p>

              <div className="bg-light-gray p-8 rounded-lg mb-8">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>78% of customers</strong> buy from the first company that responds to their inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>50% of sales</strong> go to the vendor who responds first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2 font-bold">•</span>
                    <span><strong>Lead response time</strong> directly correlates with conversion rates: every minute of delay reduces your chances</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                But here&apos;s the thing: this isn&apos;t about working harder or checking email more frequently. It&apos;s about working smarter with systems that never sleep, never take breaks, and never let an opportunity slip through the cracks.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Beyond Basic Auto-Replies: The Anatomy of Intelligent Lead Automation</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Most businesses think automation means sending a generic &ldquo;We&apos;ll get back to you&rdquo; email. That&apos;s like putting a band-aid on a broken arm. True lead automation is a sophisticated, multi-stage system that treats every inquiry as a unique opportunity requiring personalized attention.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Let me walk you through how our intelligent system works by following an actual client interaction from start to finish.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 1: Instant Capture and Intelligent Routing</h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When a lead fills out your contact form, our system doesn&apos;t just collect their information: it analyzes it. Within seconds, the system:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Captures all inquiry details</strong> including contact information, specific needs, and urgency level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Automatically categorizes the lead</strong> based on their responses (service type, company size, budget indicators)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Adds the prospect to your CRM</strong> with proper tagging and pipeline placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Triggers the appropriate response sequence</strong> tailored to their specific inquiry type</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                No manual data entry. No risk of typos. No leads falling into digital black holes.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 2: Personalized Response That Actually Engages</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Here&apos;s where most automation fails: the response. Generic templates feel robotic and impersonal. Our system crafts responses that feel human while delivering immediate value.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Take Emily Chen, who recently contacted one of our legal clients about estate planning. Within 3 minutes of her form submission, she received this response:
              </p>

              <div className="bg-gray-50 border-l-4 border-ignition-orange p-6 mb-8">
                <div className="text-lg text-gray-700">
                  <p className="font-semibold mb-4">Subject: Your Estate Planning Inquiry - Let&apos;s Secure Your Family&apos;s Future, Emily</p>
                  
                  <p className="mb-4">Hi Emily,</p>
                  
                  <p className="mb-4">Thank you for reaching out about estate planning services. Given that you mentioned concerns about protecting your family&apos;s assets and ensuring your children&apos;s future security, I want to make sure we address your specific situation properly.</p>
                  
                  <p className="mb-4">To provide you with the most relevant guidance during our consultation, I&apos;ve prepared a brief questionnaire that will help me understand your unique circumstances. It takes just 3-4 minutes to complete and ensures our conversation is highly productive from the start.</p>
                  
                  <p className="mb-4 font-semibold">[Complete Your Estate Planning Assessment - Click Here]</p>
                  
                  <p className="mb-4">Once you&apos;ve completed the assessment, you can immediately schedule your consultation at a time that works for you. I have availability this week and would be happy to discuss how we can protect what matters most to you.</p>
                  
                  <p className="mb-2">Best regards,</p>
                  <p className="mb-1">Attorney Max Power</p>
                  <p>Harborview Legal Group</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Notice the difference? This isn&apos;t just acknowledgment: it&apos;s engagement. Emily feels heard, understood, and guided toward the next logical step.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 3: Intelligent Information Gathering</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When Emily clicks through to the questionnaire, she&apos;s not filling out a generic form. The questions dynamically adjust based on her initial inquiry, creating a tailored experience that feels more like a conversation with an expert than a bureaucratic process.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For estate planning, she might see questions like:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-6 pl-6">
                <li>&ldquo;What specific assets are you most concerned about protecting?&rdquo;</li>
                <li>&ldquo;Do you have minor children who would need guardianship arrangements?&rdquo;</li>
                <li>&ldquo;Have you experienced any significant life changes recently (marriage, divorce, new business, etc.)?&rdquo;</li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Meanwhile, someone inquiring about business law would see completely different questions focused on their commercial needs.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 4: AI-Powered Lead Analysis and Prioritization</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Here&apos;s where the magic really happens. As responses come in, our AI system analyzes them and creates executive summaries for your team. Instead of reading through lengthy questionnaire responses, you get insights like this:
              </p>

              <div className="bg-gradient-to-r from-ignition-orange/10 to-ember-red/10 border border-ignition-orange/20 p-6 mb-8 rounded-lg">
                <div className="text-lg text-gray-700">
                  <p className="font-bold text-deep-charcoal mb-2">Emily Chen - Estate Planning Lead Summary</p>
                  <p className="mb-2"><strong>Priority Level:</strong> High</p>
                  <p className="mb-2"><strong>Key Needs:</strong> Recently inherited property, concerned about tax implications, has minor children</p>
                  <p className="mb-2"><strong>Urgency Indicators:</strong> Mentioned &ldquo;need to get this sorted soon&rdquo;</p>
                  <p className="mb-2"><strong>Estimated Case Value:</strong> $15,000-25,000 based on complexity indicators</p>
                  <p><strong>Recommended Next Steps:</strong> Schedule within 3 days, prepare inheritance tax guidance materials</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                This level of intelligence allows you to prioritize your most valuable opportunities and come to every conversation fully prepared.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 5: Smart Scheduling Integration</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Emily doesn&apos;t need to play phone tag to book her consultation. The system presents her with available time slots that sync with the attorney&apos;s calendar in real-time. When she books, both parties receive automatic confirmations, and the system adds all the context from her questionnaire to the calendar event.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                But here&apos;s the sophisticated part: the system recognizes different types of meetings require different time allocations. A simple will consultation might default to 30 minutes, while a complex business succession planning discussion automatically blocks 60 minutes.
              </p>

              <h3 className="text-2xl font-semibold text-deep-charcoal mb-4">Stage 6: Intelligent Follow-Up That Never Feels Pushy</h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Not every lead converts immediately, and that&apos;s where most businesses drop the ball. Our system monitors engagement and automatically triggers appropriate follow-up sequences based on specific behaviors:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>If someone completes the questionnaire but doesn&apos;t schedule:</strong> gentle reminder focused on scheduling convenience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>If someone schedules but doesn&apos;t complete the questionnaire:</strong> follow-up emphasizing how it will make their consultation more productive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>If someone shows no engagement after 48 hours:</strong> value-driven follow-up with relevant resources or case studies</span>
                </li>
              </ul>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Each touch point feels natural and helpful, never desperate or aggressive.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Real-World Results: The Numbers Don&apos;t Lie</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Let&apos;s talk about what this actually means for your business. Here are results from recent client implementations:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-light-gray p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Harborview Legal Group (6-month results):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Response time:</strong> Reduced from 4+ hours to under 5 minutes</li>
                    <li><strong>Lead conversion rate:</strong> Increased from 23% to 47%</li>
                    <li><strong>Consultation show-rate:</strong> Improved from 71% to 89%</li>
                    <li><strong>Revenue impact:</strong> $180,000 in additional bookings directly attributed to faster response and better qualification</li>
                  </ul>
                </div>
                
                <div className="bg-light-gray p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">TechSolutions Consulting (3-month results):</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Lead qualification time:</strong> Reduced from 20 minutes per lead to 3 minutes</li>
                    <li><strong>Sales team efficiency:</strong> 300% improvement in qualified leads per hour</li>
                    <li><strong>Pipeline value:</strong> Increased average deal size by 34% due to better pre-qualification</li>
                    <li><strong>Client satisfaction:</strong> 95% positive feedback on initial response experience</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">The Technology Behind the Magic</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                You might be wondering: &ldquo;This sounds complex. Do I need a team of developers to implement this?&rdquo; Absolutely not. Our system integrates with tools you&apos;re likely already using:
              </p>

              <div className="bg-light-gray p-8 rounded-lg mb-8">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Form Integration:</strong> Works with any website form, landing page builder, or CRM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Email Platform:</strong> Connects to Gmail, Outlook, or any business email system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Calendar Tools:</strong> Syncs with Calendly, Acuity, Google Calendar, or Outlook Calendar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>CRM Systems:</strong> Integrates with Salesforce, HubSpot, Pipedrive, and 50+ other platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ignition-orange mr-2">▪</span>
                    <span><strong>Analytics Tracking:</strong> Provides detailed reporting on every step of your lead journey</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The entire system can be up and running in less than a week, with most clients seeing immediate improvements in lead response and engagement.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Beyond Email: The Complete Lead Experience</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                While email automation is the foundation, truly intelligent lead management extends across every touchpoint:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8 pl-6">
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>SMS Integration:</strong> For urgent inquiries, the system can send text message confirmations and reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Multi-Channel Follow-Up:</strong> Coordinates email, social media, and phone outreach to stay top-of-mind without being overwhelming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Lead Scoring:</strong> Automatically ranks prospects based on engagement, qualification responses, and behavioral indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ignition-orange mr-2">▪</span>
                  <span><strong>Team Coordination:</strong> Ensures the right team member handles each lead based on expertise, availability, and workload</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Getting Started: Your Path to Never Missing Another Lead</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ready to transform how your business handles leads? Here&apos;s how to begin:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Option 1: DIY Implementation</h4>
                  <p className="text-gray-700 mb-4">If you&apos;re technically inclined and want to start simple:</p>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. Set up basic email automation with your current tools</li>
                    <li>2. Create a simple questionnaire using Google Forms or Typeform</li>
                    <li>3. Connect a scheduling tool like Calendly</li>
                    <li>4. Gradually add more sophisticated features as you see results</li>
                  </ol>
                </div>
                
                <div className="bg-gradient-to-br from-ignition-orange/10 to-ember-red/10 p-6 rounded-lg border border-ignition-orange/20">
                  <h4 className="text-xl font-semibold text-deep-charcoal mb-4">Option 2: Professional Implementation with Ignition AI</h4>
                  <p className="text-gray-700 mb-4">For businesses that want the full system without the learning curve:</p>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. <strong>Discovery Call:</strong> We analyze your current lead process and identify opportunities</li>
                    <li>2. <strong>Custom Design:</strong> We build automation sequences tailored to your specific industry and needs</li>
                    <li>3. <strong>Integration:</strong> We connect everything to your existing tools and workflows</li>
                    <li>4. <strong>Training:</strong> We ensure your team knows how to maximize the system</li>
                    <li>5. <strong>Optimization:</strong> We monitor results and continuously improve performance</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">The Investment That Pays for Itself</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Let&apos;s put this in perspective. If you typically convert 20% of your leads and you&apos;re getting 50 leads per month, you&apos;re closing 10 deals. Now imagine doubling your conversion rate to 40% simply by responding faster and providing a better initial experience. That&apos;s 20 deals instead of 10: a 100% increase in sales from the same marketing spend.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                For most businesses, this system pays for itself within the first month just from the leads that would have otherwise been lost to slow response times.
              </p>

              <h2 className="text-3xl font-bold text-deep-charcoal mb-6">Your Turn: Stop Letting Opportunities Slip Away</h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every day you wait to implement intelligent lead automation is another day of missed opportunities. While you&apos;re manually responding to emails and playing phone tag with prospects, your competitors are capturing those leads in minutes with systems that never sleep.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The question isn&apos;t whether you can afford to implement this system: it&apos;s whether you can afford not to.
              </p>

              <div className="bg-gradient-to-r from-ignition-orange to-ember-red text-white p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Lead Management?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Book a free consultation with our team. We&apos;ll show you exactly how intelligent automation can transform your lead management, and we&apos;ll even build you a sample automation sequence during our call.
                </p>
                <Link href="/contact" className="inline-block bg-white text-ignition-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Your Free Automation Strategy Session
                </Link>
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Or, if you prefer to start with a conversation, reach out directly. Tell us about your biggest lead management challenges, and we&apos;ll share specific strategies that can help, whether you work with us or not.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Because at Ignition AI, we believe every business deserves to capture every opportunity. Let&apos;s make sure none of yours slip away.
              </p>

            </motion.div>
          </div>
        </div>
      </article>

      {/* Services CTA */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 !text-white">
              Ready to Never Lose Another Lead?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From intelligent lead automation to advanced customer engagement systems, we help businesses capture and convert more opportunities. Discover how our automation solutions can transform your lead management process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors text-lg"
              >
                Explore Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-deep-charcoal transition-colors text-lg"
              >
                Get Your Free Lead Audit
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              ✓ Free lead management audit  ✓ Custom automation strategy  ✓ Implementation roadmap
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NeverLoseAnotherLeadClient;