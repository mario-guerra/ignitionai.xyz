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
  language: 'en' | 'es';
  alternateLanguages?: {
    en?: string; // English slug
    es?: string; // Spanish slug  
  };
}

// Blog post metadata registry (auto-generated)
export const blogPostsMetadata: Record<string, BlogPostMetadata> = {
  'never-lose-another-lead-smart-automation': {
    id: 'never-lose-another-lead-smart-automation',
    title: 'Never Lose Another Lead: Make Every Customer Feel Like Your Top Priority Using Smart Automation',
    excerpt: 'Learn how intelligent automation can transform your lead management, convert more prospects, and ensure no opportunity slips through the cracks - all while you focus on running your business.',
    publishDate: '2025-09-25',
    author: 'Mario Guerra & Hector Norzagaray',
    category: 'Lead Management',
    slug: 'never-lose-another-lead-smart-automation',
    readTime: '12 min read',
    image: '/images/blog/lead-automation.jpg',
    language: 'en',
    alternateLanguages: {
      en: 'never-lose-another-lead-smart-automation',
      es: 'nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente'
    },
  },
  'nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente': {
    id: 'nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente',
    title: 'Haz que cada cliente se sienta como tu cliente más importante a través de la automatización inteligente',
    excerpt: 'Aprende cómo la automatización inteligente puede transformar la gestión de tus clientes potenciales, convertir más prospectos y asegurar que ninguna oportunidad se escape - todo mientras te enfocas en dirigir tu negocio.',
    publishDate: '2025-09-25',
    author: 'Hector Norzagaray',
    category: 'Gestión de Clientes Potenciales',
    slug: 'nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente',
    readTime: '12 min lectura',
    image: '/images/blog/lead-automation-es.jpg',
    language: 'es',
    alternateLanguages: {
      en: 'never-lose-another-lead-smart-automation',
      es: 'nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente'
    },
  },
  'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia': {
    id: 'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia',
    title: 'Tomando decisiones inteligentes: ¿Automatización, Automatización Inteligente o IA?',
    excerpt: 'Una guía pragmática para elegir entre automatización simple, automatización inteligente e IA para que gastes dinero donde realmente importa.',
    publishDate: '2025-09-02',
    author: 'Hector Norzagaray & Mario Guerra',
    category: 'Business',
    slug: 'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia',
    readTime: '5 min read',
    image: '/images/IgnitionAI-logo-300x300px.png',
    language: 'es',
    alternateLanguages: {
      en: 'do-you-need-ai-or-automation',
      es: 'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia'
    },
  },
  'do-you-need-ai-or-automation': {
    id: 'do-you-need-ai-or-automation',
    title: 'Do You Need a Full AI System or Just Workflow Automation? Understanding the Differences for Your Business',
    excerpt: 'A short, pragmatic guide to choose between simple automation, intelligent automation, and AI so you spend money where it actually moves the needle.',
    publishDate: '2025-08-28',
    author: 'Mario Guerra & Hector Norzagaray',
    category: 'Business',
    slug: 'do-you-need-ai-or-automation',
    readTime: '4 min read',
    image: '/images/IgnitionAI-logo-300x300px.png',
    language: 'en',
    alternateLanguages: {
      en: 'do-you-need-ai-or-automation',
      es: 'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia'
    },
  },
  'introducing-ignitionai-sparking-intelligent-transformation': {
    id: 'introducing-ignitionai-sparking-intelligent-transformation',
    title: 'Introducing IgnitionAI: Sparking Intelligent Transformation',
    excerpt: 'We\'re bridging the AI gap for small and medium businesses, making intelligent automation accessible, practical, and transformative.',
    publishDate: '2025-08-25',
    author: 'Mario Guerra & Hector Norzagaray',
    category: 'Company Announcement',
    slug: 'introducing-ignitionai-sparking-intelligent-transformation',
    readTime: '6 min read',
    image: '/images/blog/ignitionai-announcement.jpg',
    language: 'en',
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
    image: '/images/blog/customer-service-ai.jpg',
    language: 'en',
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
    image: '/images/blog/roi-ai-measurement.jpg',
    language: 'en',
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
    image: '/images/blog/multilingual-ai.jpg',
    language: 'en',
  }
};
