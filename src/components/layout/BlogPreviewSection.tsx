"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogPreviewSection = () => {
  // Sample blog posts - these would normally come from a CMS or data source
  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Customer Service in 2023',
      excerpt: 'Discover how AI-powered assistants and automation are transforming customer service operations and improving satisfaction metrics.',
      image: '/images/blog/customer-service-ai.jpg',
      date: 'June 15, 2023',
      author: 'Sarah Chen',
      category: 'Customer Service',
      slug: 'how-ai-is-revolutionizing-customer-service-2023'
    },
    {
      id: 2,
      title: 'The ROI of AI: Measuring Success in Business Process Automation',
      excerpt: 'Learn the key metrics and methodologies for calculating the return on investment for your AI implementation projects.',
      image: '/images/blog/roi-ai-measurement.jpg',
      date: 'May 22, 2023',
      author: 'Marcus Johnson',
      category: 'Business',
      slug: 'roi-ai-measuring-success-business-process-automation'
    },
    {
      id: 3,
      title: 'Breaking Language Barriers: Multilingual AI in Global Business',
      excerpt: 'How advanced language models are helping businesses communicate seamlessly across languages and cultural boundaries.',
      image: '/images/blog/multilingual-ai.jpg',
      date: 'April 8, 2023',
      author: 'Elena Rodriguez',
      category: 'Multilingual AI',
      slug: 'breaking-language-barriers-multilingual-ai-global-business'
    }
  ];

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest Insights</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Stay updated with the latest trends, strategies, and case studies in AI implementation.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-light-gray rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                {/* This would be replaced with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-ignition-orange/80 to-ember-red/80 flex items-center justify-center">
                  <span className="text-white font-bold">Blog Image</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="text-ignition-orange">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-ignition-orange transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-5">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="text-ignition-orange hover:text-ember-red font-medium flex items-center transition-colors">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </div>
        
        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-light-gray p-8 md:p-12 rounded-xl shadow-lg"
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest AI insights, case studies, and implementation strategies.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-ignition-orange"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
