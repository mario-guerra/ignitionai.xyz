"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BlogPostMetadata } from '@/lib/blog/metadata';

interface LanguageToggleProps {
  currentPost: BlogPostMetadata;
}

export default function LanguageToggle({ currentPost }: LanguageToggleProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Don't show toggle if no alternate languages exist
  if (!currentPost.alternateLanguages || 
      !currentPost.alternateLanguages.en || 
      !currentPost.alternateLanguages.es) {
    return null;
  }

  const handleLanguageSwitch = async (targetLanguage: 'en' | 'es') => {
    if (targetLanguage === currentPost.language || isTransitioning) return;
    
    setIsTransitioning(true);
    
    const targetSlug = currentPost.alternateLanguages![targetLanguage];
    const targetUrl = targetLanguage === 'es' 
      ? `/blog/es/${targetSlug}` 
      : `/blog/${targetSlug}`;
    
    // Small delay for visual feedback
    setTimeout(() => {
      router.push(targetUrl);
      setIsTransitioning(false);
    }, 150);
  };

  const isEnglish = currentPost.language === 'en';

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-sm">Language:</span>
      <div className="relative inline-flex bg-gray-200 rounded-full p-1 transition-all duration-300">
        {/* Background slider */}
        <div 
          className={`absolute top-1 bottom-1 w-8 bg-ignition-orange rounded-full transition-transform duration-300 ease-in-out ${
            isEnglish ? 'translate-x-0' : 'translate-x-8'
          }`}
        />
        
        {/* English button */}
        <button
          onClick={() => handleLanguageSwitch('en')}
          disabled={isTransitioning}
          className={`relative z-10 px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
            isEnglish 
              ? 'text-white' 
              : 'text-gray-600 hover:text-gray-800'
          } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          EN
        </button>
        
        {/* Spanish button */}
        <button
          onClick={() => handleLanguageSwitch('es')}
          disabled={isTransitioning}
          className={`relative z-10 px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
            !isEnglish 
              ? 'text-white' 
              : 'text-gray-600 hover:text-gray-800'
          } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
