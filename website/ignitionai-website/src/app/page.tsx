"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ServicesSection from "@/components/layout/ServicesSection";
import ResultsSection from "@/components/layout/ResultsSection";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import BlogPreviewSection from "@/components/layout/BlogPreviewSection";
import CTASection from "@/components/layout/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Value Proposition Section */}
      <section className="section bg-white dark:bg-deep-charcoal">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-ignition-orange/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ignition-orange">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Assessment</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Identify specific AI opportunities in your business with our free 30-minute AI audit.</p>
            </div>
            
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-ignition-orange/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ignition-orange">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Custom Solutions</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Tailored AI implementation designed specifically for your business needs and goals.</p>
            </div>
            
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-ignition-orange/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-ignition-orange">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Rapid ROI</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Achieve return on investment in 2-3 months with our focused implementation approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="section bg-gray-50 dark:bg-deep-charcoal/60 circuit-bg">
        <div className="container mx-auto">
          <h2 className="section-title text-center">AI Solutions for Your Industry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card hover:border-l-4 hover:border-l-ignition-orange transition-all">
              <h3 className="text-xl font-bold mb-4">Logistics</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Reduce supply chain disruptions by 60% with AI-powered predictive analytics.</p>
              <div className="text-spark-yellow font-bold">60% fewer disruptions</div>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-ignition-orange transition-all">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Cut administrative costs while improving multilingual patient communication.</p>
              <div className="text-spark-yellow font-bold">70% cost reduction</div>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-ignition-orange transition-all">
              <h3 className="text-xl font-bold mb-4">E-commerce</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Scale customer service globally without adding headcount or complexity.</p>
              <div className="text-spark-yellow font-bold">35% sales increase</div>
            </div>
            
            <div className="card hover:border-l-4 hover:border-l-ignition-orange transition-all">
              <h3 className="text-xl font-bold mb-4">Professional Services</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Transform your expertise into scalable assets through AI knowledge systems.</p>
              <div className="text-spark-yellow font-bold">80% faster document creation</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
