'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  sections: { id: string; name: string }[];
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Navigation({ sections, activeSection, isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-premium">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+26461281234" className="hover:underline">+264 61 281 234</a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:advertising@futuremedia.com.na" className="hover:underline">advertising@futuremedia.com.na</a>
              </span>
            </div>
            <div className="text-xs">
              Namibia's Leading Media Holdings Group
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 glass-effect border-b">
        <div className="container-premium">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gradient">
                Future Media
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section.name}
                </button>
              ))}
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection('contact')}
              >
                Request Media Kit
                <span className="ml-2">→</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t"
            >
              <div className="container-premium py-4">
                <div className="flex flex-col gap-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left text-sm font-medium transition-colors hover:text-primary py-2 ${
                        activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {section.name}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => scrollToSection('contact')}
                    >
                      Request Media Kit
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t text-sm text-muted-foreground">
                    <a href="tel:+26461281234" className="flex items-center gap-2 hover:text-primary">
                      <Phone className="w-4 h-4" />
                      +264 61 281 234
                    </a>
                    <a href="mailto:advertising@futuremedia.com.na" className="flex items-center gap-2 hover:text-primary">
                      <Mail className="w-4 h-4" />
                      advertising@futuremedia.com.na
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}