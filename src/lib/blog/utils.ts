import { BlogPostMetadata, blogPostsMetadata } from './metadata';

export function getAllBlogPosts(): BlogPostMetadata[] {
  // Use the static metadata registry instead of reading the filesystem
  const posts = Object.values(blogPostsMetadata) as BlogPostMetadata[];

  // Filter to show only English posts in listings (Spanish posts discoverable via toggle)
  const englishPosts = posts.filter(post => post.language === 'en');

  // Sort by publishDate, newest first
  englishPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return englishPosts;
}

export function getBlogPostBySlug(slug: string): BlogPostMetadata | null {
  return blogPostsMetadata[slug] || null;
}

export function getAllCategories(): string[] {
  // Get categories from English posts only (for listing consistency)
  const englishPosts = Object.values(blogPostsMetadata).filter(post => post.language === 'en') as BlogPostMetadata[];
  const categories = ['All', ...Array.from(new Set(englishPosts.map(post => post.category)))];
  return categories;
}

export function getBlogPostsByCategory(category: string): BlogPostMetadata[] {
  // Get only English posts for listings 
  const englishPosts = Object.values(blogPostsMetadata).filter(post => post.language === 'en') as BlogPostMetadata[];

  if (category === 'All') {
    // Sort by publishDate, newest first
    englishPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    return englishPosts;
  }

  const filteredPosts = englishPosts.filter(post => post.category === category);
  // Sort by publishDate, newest first
  filteredPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  return filteredPosts;
}

// New language-related utility functions
export function getLanguageVersion(slug: string, targetLanguage: 'en' | 'es'): BlogPostMetadata | null {
  const post = getBlogPostBySlug(slug);
  if (!post?.alternateLanguages) return null;
  
  const targetSlug = post.alternateLanguages[targetLanguage];
  return targetSlug ? getBlogPostBySlug(targetSlug) : null;
}

export function hasLanguageVersion(slug: string, language: 'en' | 'es'): boolean {
  const post = getBlogPostBySlug(slug);
  return !!(post?.alternateLanguages?.[language]);
}

export function getPostUrl(post: BlogPostMetadata): string {
  return post.language === 'es' ? `/blog/es/${post.slug}` : `/blog/${post.slug}`;
}
