'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Radio } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Brands', href: '#holdings' },
    { name: 'Careers', href: '#' },
    { name: 'Press & Media', href: '#' }
  ],
  advertising: [
    { name: 'Radio Advertising', href: '#products' },
    { name: 'Digital Advertising', href: '#products' },
    { name: 'Production Services', href: '#products' },
    { name: 'Rate Card', href: '#pricing' }
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Media Kit', href: '#contact' },
    { name: 'Technical Support', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Advertising Guidelines', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

const radioStations = [
  { name: 'Radiowave', frequency: '96.7 FM' },
  { name: 'Omulunga Radio', frequency: '97.4 FM' },
  { name: 'Fresh FM', frequency: '98.7 FM' },
  { name: 'Nova 103.5', frequency: '103.5 FM' },
  { name: '99FM', frequency: '99.0 FM' },
  { name: 'Future Media News', frequency: 'Online' }
];

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Radio className="w-8 h-8" />
              <span className="text-2xl font-bold">Future Media</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Namibia's leading multi-platform media powerhouse, reaching over 2 million Namibians 
              through radio, digital, and broadcast solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+264 61 281 234</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>advertising@futuremedia.com.na</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>123 Independence Avenue, Windhoek</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6">Advertising</h4>
            <ul className="space-y-3">
              {footerLinks.advertising.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Radio Stations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-primary-foreground/20 mt-12 pt-8"
        >
          <h4 className="font-semibold mb-6 text-center">Our Radio Stations</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {radioStations.map((station) => (
              <div key={station.name} className="text-center">
                <div className="bg-primary-foreground/10 rounded-lg p-3 hover:bg-primary-foreground/20 transition-colors">
                  <div className="font-medium">{station.name}</div>
                  <div className="text-sm text-primary-foreground/70">{station.frequency}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Future Media Namibia. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}