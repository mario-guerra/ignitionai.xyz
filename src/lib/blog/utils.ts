import { BlogPostMetadata, blogPostsMetadata } from './metadata';

export function getAllBlogPosts(): BlogPostMetadata[] {
  // Use the static metadata registry instead of reading the filesystem
  const posts = Object.values(blogPostsMetadata) as BlogPostMetadata[];

  // Sort by publishDate, newest first
  posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return posts;
}

export function getBlogPostBySlug(slug: string): BlogPostMetadata | null {
  return blogPostsMetadata[slug] || null;
}

export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  return categories;
}

export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllBlogPosts();

  if (category === 'All') {
    return posts;
  }

  return posts.filter(post => post.category === category);
}
