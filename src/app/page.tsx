'use client';

import { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/HeroSection';
import BrandStorySection from '@/components/BrandStorySection';
import CollectionSection from '@/components/CollectionSection';
import FragranceExperienceSection from '@/components/FragranceExperienceSection';
import BestSellerSection from '@/components/BestSellerSection';
import CampaignSection from '@/components/CampaignSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

// Lazy-load components that are not needed immediately
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Loading screen — always rendered until complete */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main site — rendered behind loading screen, fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Global UI */}
        <CustomCursor />
        <ScrollProgress />
        <Navigation />

        {/* Page sections */}
        <main>
          <HeroSection />
          <BrandStorySection />
          <CollectionSection />
          <FragranceExperienceSection />
          <BestSellerSection />
          <CampaignSection />
          <TestimonialsSection />
          <NewsletterSection />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
