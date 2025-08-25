import fs from 'fs';
import path from 'path';
import { BlogPostMetadata, blogPostsMetadata } from './metadata';

export function getAllBlogPosts(): BlogPostMetadata[] {
  try {
    // Get all blog post directories
// Blog directory path constant
const BLOG_DIR = path.join(process.cwd(), 'src/app/blog');

export function getAllBlogPosts(): BlogPostMetadata[] {
  try {
    // Get all blog post directories
    const blogDir = BLOG_DIR;
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    
    // Filter for directories that contain page.tsx (actual blog posts)
    const blogPostDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(dirName => {
        const pagePath = path.join(blogDir, dirName, 'page.tsx');
        return fs.existsSync(pagePath);
      });

    // Get metadata for each blog post
    const blogPosts = blogPostDirs
      .map(slug => blogPostsMetadata[slug])
      .filter(Boolean) // Remove any undefined entries
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()); // Sort by date, newest first

    return blogPosts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPostMetadata | null {
  return blogPostsMetadata[slug] || null;
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = ['All', ...new Set(posts.map(post => post.category))];
  return categories;
}

export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();
  
  if (category === 'All') {
    return posts;
  }
  
  return posts.filter(post => post.category === category);
}
