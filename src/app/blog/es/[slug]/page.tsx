import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/blog/utils';
import { blogPostsMetadata } from '@/lib/blog/metadata';
import dynamic from 'next/dynamic';

interface SpanishBlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all Spanish blog posts
export async function generateStaticParams() {
  const spanishPosts = Object.values(blogPostsMetadata).filter(post => post.language === 'es');
  return spanishPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SpanishBlogPostProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post || post.language !== 'es') {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ignitionai.xyz';
  const currentUrl = `${baseUrl}/blog/es/${post.slug}`;
  const englishUrl = post.alternateLanguages?.en ? `${baseUrl}/blog/${post.alternateLanguages.en}` : null;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: currentUrl,
      siteName: 'IgnitionAI',
      locale: 'es_ES',
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'es-ES': currentUrl,
        ...(englishUrl && { 'en-US': englishUrl }),
      },
    },
  };
}

// Dynamic import for the Spanish client component
const TomandoDecisionesInteligentesClient = dynamic(() => 
  import('../tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia/client'),
  { ssr: true }
);

export default async function SpanishBlogPost({ params }: SpanishBlogPostProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post || post.language !== 'es') {
    notFound();
  }

  // For now, we only have one Spanish post. In the future, this could be more dynamic
  if (resolvedParams.slug === 'tomando-decisiones-inteligentes-automatizacion-automatizacion-inteligente-o-ia') {
    return <TomandoDecisionesInteligentesClient post={post} />;
  }

  notFound();
}
