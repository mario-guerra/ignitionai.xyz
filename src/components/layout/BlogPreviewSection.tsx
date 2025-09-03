"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BlogPostMetadata } from '@/lib/blog/metadata';
import { getAllBlogPosts, getPostUrl } from '@/lib/blog/utils';

const BlogPreviewSection = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPostMetadata[]>([]);

  useEffect(() => {
    // Get filtered English posts and take first 3
    const englishPosts = getAllBlogPosts();
    const latestThree = englishPosts.slice(0, 3);
    setRecentPosts(latestThree);
  }, []);

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
              Stay updated with the latest trends, strategies, and insights in AI implementation.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
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
                  <span className="text-white font-bold text-lg">{post.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="text-ignition-orange">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  <Link href={getPostUrl(post)} className="hover:text-ignition-orange transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-5">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  
                  <Link href={getPostUrl(post)} className="text-ignition-orange hover:text-ember-red font-medium flex items-center transition-colors">
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
      </div>
    </section>
  );
};

export default BlogPreviewSection;
