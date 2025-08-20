"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlogPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Customer Service in 2025',
      excerpt: 'Discover how AI-powered assistants and automation are transforming customer service operations and improving satisfaction metrics.',
      image: '/images/blog/customer-service-ai.jpg',
      publishDate: '2025-07-15', // Internal use only
      author: 'Mario Guerra',
      category: 'Customer Service',
      slug: 'how-ai-is-revolutionizing-customer-service-2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The ROI of AI: Measuring Success in Business Process Automation',
      excerpt: 'Learn the key metrics and methodologies for calculating the return on investment for your AI implementation projects.',
      image: '/images/blog/roi-ai-measurement.jpg',
      publishDate: '2025-06-22', // Internal use only
      author: 'Mario Guerra',
      category: 'Business',
      slug: 'roi-ai-measuring-success-business-process-automation',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Breaking Language Barriers: Multilingual AI in Global Business',
      excerpt: 'How advanced language models are helping businesses communicate seamlessly across languages and cultural boundaries.',
      image: '/images/blog/multilingual-ai.jpg',
      publishDate: '2025-05-08', // Internal use only
      author: 'Mario Guerra',
      category: 'Multilingual AI',
      slug: 'breaking-language-barriers-multilingual-ai-global-business',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Customer Service', 'Business', 'Multilingual AI', 'Implementation'];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 !text-white">
                AI Insights & <span className="text-ignition-orange">Strategies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Practical insights, implementation guides, and strategies for implementing AI solutions that drive real business results.
              </p>
            </motion.div>
          ) : (
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                AI Insights & <span className="text-ignition-orange">Strategies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Practical insights, implementation guides, and strategies for implementing AI solutions that drive real business results.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-light-gray py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  index === 0 
                    ? 'bg-ignition-orange text-white border-ignition-orange' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-ignition-orange hover:text-ignition-orange'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-ignition-orange/80 to-ember-red/80 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="text-ignition-orange">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-ignition-orange transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-5">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-ignition-orange hover:text-ember-red font-medium flex items-center transition-colors"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-deep-charcoal text-white py-20">
        <div className="container mx-auto text-center">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest AI insights and implementation strategies delivered to your inbox.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-ignition-orange"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          ) : (
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest AI insights and implementation strategies delivered to your inbox.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-ignition-orange"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
