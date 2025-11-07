'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Menu, X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Import components
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Holdings from '@/components/Holdings';
import AudienceStats from '@/components/AudienceStats';
import RealTimeHeatMap from '@/components/RealTimeHeatMap';
import AdvertisingProducts from '@/components/AdvertisingProducts';
import SocialProof from '@/components/SocialProof';
import CaseStudies from '@/components/CaseStudies';
import PricingTeaser from '@/components/PricingTeaser';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import LiveChat from '@/components/LiveChat';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'holdings', name: 'Our Brands' },
    { id: 'audience', name: 'Audience' },
    { id: 'products', name: 'Solutions' },
    { id: 'case-studies', name: 'Success Stories' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <Hero />
        <Holdings />
        <AudienceStats />
        <RealTimeHeatMap />
        <AdvertisingProducts />
        <SocialProof />
        <CaseStudies />
        <PricingTeaser />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
      <StickyCTA />
      <LiveChat />
    </div>
  );
}