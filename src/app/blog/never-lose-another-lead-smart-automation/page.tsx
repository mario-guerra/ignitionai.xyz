import { getBlogPostBySlug } from '@/lib/blog/utils';
import { Metadata } from 'next';
import NeverLoseAnotherLeadClient from './client';

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const post = getBlogPostBySlug('never-lose-another-lead-smart-automation');
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ignitionai.xyz';
  const currentUrl = `${baseUrl}/blog/${post.slug}`;
  const spanishUrl = post.alternateLanguages?.es ? `${baseUrl}/blog/es/${post.alternateLanguages.es}` : null;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: currentUrl,
      siteName: 'IgnitionAI',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-US': currentUrl,
        ...(spanishUrl && { 'es-ES': spanishUrl }),
      },
    },
  };
}

export default function NeverLoseAnotherLead() {
  const post = getBlogPostBySlug('never-lose-another-lead-smart-automation');
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return <NeverLoseAnotherLeadClient post={post} />;
}