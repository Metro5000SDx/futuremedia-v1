'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Phone, Mail, Download } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  const handleMediaKitClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+26461281234';
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {!isExpanded ? (
            // Main CTA Button
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setIsExpanded(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-full shadow-lg premium-shadow"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Request Media Kit
              </Button>
            </motion.div>
          ) : (
            // Expanded Options
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-background rounded-2xl shadow-2xl border p-4 min-w-[280px]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Get Started</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(false)}
                  className="h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleMediaKitClick}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground justify-start"
                >
                  <Download className="w-4 h-4 mr-3" />
                  Download Media Kit
                </Button>
                
                <Button
                  onClick={handleContactClick}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  Schedule Consultation
                </Button>
                
                <Button
                  onClick={handleCallClick}
                  variant="outline"
                  className="w-full justify-start"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Call Us Now
                </Button>
              </div>

              {/* Quick Info */}
              <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
                <div className="flex items-center justify-between mb-2">
                  <span>Business Hours:</span>
                  <span>8AM - 6PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Response Time:</span>
                  <span>&lt; 24 hours</span>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}