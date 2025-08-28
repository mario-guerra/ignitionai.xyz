export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  author: string;
  category: string;
  slug: string;
  readTime: string;
  image?: string;
}

// Blog post metadata registry
export const blogPostsMetadata: Record<string, BlogPostMetadata> = {
  'introducing-ignitionai-sparking-intelligent-transformation': {
    id: 'introducing-ignitionai-sparking-intelligent-transformation',
    title: 'Introducing IgnitionAI: Sparking Intelligent Transformation',
    excerpt: 'We\'re bridging the AI gap for small and medium businesses, making intelligent automation accessible, practical, and transformative.',
    publishDate: '2025-08-25',
    author: 'Mario Guerra & Hector Norzagaray',
    category: 'Company Announcement',
    slug: 'introducing-ignitionai-sparking-intelligent-transformation',
    readTime: '6 min read',
    image: '/images/blog/ignitionai-announcement.jpg'
  },
  'how-ai-is-revolutionizing-customer-service-2025': {
    id: 'how-ai-is-revolutionizing-customer-service-2025',
    title: 'How AI is Revolutionizing Customer Service in 2025',
    excerpt: 'Discover how AI-powered assistants and automation are transforming customer service operations and improving satisfaction metrics.',
    publishDate: '2025-07-15',
    author: 'Mario Guerra',
    category: 'Customer Service',
    slug: 'how-ai-is-revolutionizing-customer-service-2025',
    readTime: '5 min read',
    image: '/images/blog/customer-service-ai.jpg'
  },
  'roi-ai-measuring-success-business-process-automation': {
    id: 'roi-ai-measuring-success-business-process-automation',
    title: 'The ROI of AI: Measuring Success in Business Process Automation',
    excerpt: 'Learn the key metrics and methodologies for calculating the return on investment for your AI implementation projects.',
    publishDate: '2025-06-22',
    author: 'Mario Guerra',
    category: 'Business',
    slug: 'roi-ai-measuring-success-business-process-automation',
    readTime: '7 min read',
    image: '/images/blog/roi-ai-measurement.jpg'
  },
  'breaking-language-barriers-multilingual-ai-global-business': {
    id: 'breaking-language-barriers-multilingual-ai-global-business',
    title: 'Breaking Language Barriers: Multilingual AI in Global Business',
    excerpt: 'How advanced language models are helping businesses communicate seamlessly across languages and cultural boundaries.',
    publishDate: '2025-05-08',
    author: 'Mario Guerra',
    category: 'Multilingual AI',
    slug: 'breaking-language-barriers-multilingual-ai-global-business',
    readTime: '6 min read',
    image: '/images/blog/multilingual-ai.jpg'
  }
  ,
  'do-you-need-ai-or-automation': {
    id: 'do-you-need-ai-or-automation',
    title: 'Do You Need a Full AI System or Just Workflow Automation? Understanding the Differences for Your Business',
    excerpt: 'Many small business owners hear the terms "automation," "intelligent automation," and "AI" and feel confused. Choosing the right approach can save time, reduce costs, and help your business grow.',
    publishDate: '2025-08-28',
    author: 'Mario Guerra',
    category: 'Business',
    slug: 'do-you-need-ai-or-automation',
    readTime: '4 min read',
    image: '/images/IgnitionAI-logo-300x300px.png'
  }
};
