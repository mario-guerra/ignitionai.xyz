"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { blogPostsMetadata, BlogPostMetadata } from '@/lib/blog/metadata';

const getAllBlogPosts = (): BlogPostMetadata[] => {
  const posts = Object.values(blogPostsMetadata);
  return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

const getAllCategories = (): string[] => {
  const posts = getAllBlogPosts();
  const categories = ['All', ...new Set(posts.map(post => post.category))];
  return categories;
};

const getBlogPostsByCategory = (category: string): BlogPostMetadata[] => {
  const posts = getAllBlogPosts();
  
  if (category === 'All') {
    return posts;
  }
  
  return posts.filter(post => post.category === category);
};
import { getAllBlogPosts, getAllCategories, getBlogPostsByCategory } from '@/lib/blog/utils';
const BlogPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState<BlogPostMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchBlogPosts = useCallback((category: string = 'All') => {
    const posts = getBlogPostsByCategory(category);
    const cats = getAllCategories();
    setBlogPosts(posts);
    setCategories(cats);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  useEffect(() => {
    if (isMounted) {
      fetchBlogPosts(selectedCategory);
    }
  }, [selectedCategory, isMounted, fetchBlogPosts]);

  return (
    <main className="bg-white">
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
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-colors ${
                  category === selectedCategory
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
          {blogPosts.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 text-lg">No blog posts found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
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
          )}
        </div>
      </section>

      {/* Free AI Audit CTA */}
      <section className="bg-deep-charcoal text-white py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free 30-minute consultation to identify your best AI opportunities and create a custom roadmap for implementation.
            </p>
            
            <div className="max-w-md mx-auto">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-ignition-orange text-white font-semibold rounded-lg hover:bg-ignition-orange/90 transition-colors text-lg"
              >
                Schedule Free AI Audit
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              ✓ No commitment required  ✓ Identify quick wins  ✓ Get actionable recommendations
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
