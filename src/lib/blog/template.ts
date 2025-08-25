// Helper utility to generate blog post metadata entry
// Copy this template when creating a new blog post

export const newBlogPostTemplate = {
  'your-blog-post-slug': {
    id: 'your-blog-post-slug',
    title: 'Your Blog Post Title',
    excerpt: 'A brief description of your blog post that will appear in the listing.',
    publishDate: '2025-MM-DD', // Use YYYY-MM-DD format
    author: 'Author Name',
    category: 'Category Name', // Will automatically appear in the category filter
    slug: 'your-blog-post-slug', // Should match the folder name
    readTime: 'X min read',
    image: '/images/blog/your-image.jpg' // Optional
  }
};

// Instructions for adding a new blog post:
// 1. Create a new folder in /src/app/blog/ with your slug name
// 2. Add a page.tsx file in that folder with your blog content
// 3. Add a metadata entry in /src/lib/blog/metadata.ts using the template above
// 4. The blog will automatically appear on the blog listing page!
