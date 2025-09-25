import { getBlogPostBySlug } from '@/lib/blog/utils';
import { Metadata } from 'next';
import NuncaPierdasOtroClientePotencialClient from './client';

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogPostBySlug('nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente');
  
  if (!post) {
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

export default function NuncaPierdasOtroClientePotencial() {
  const post = getBlogPostBySlug('nunca-pierdas-otro-cliente-potencial-automatizacion-inteligente');
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return <NuncaPierdasOtroClientePotencialClient post={post} />;
}