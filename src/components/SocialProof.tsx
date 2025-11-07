'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, TrendingUp, Star, Quote, Building } from 'lucide-react';

const awards = [
  {
    name: 'Namibia Radio Awards',
    category: 'Best Radio Network',
    year: '2023',
    icon: Award
  },
  {
    name: 'Digital Media Awards',
    category: 'Best Digital Platform',
    year: '2023',
    icon: TrendingUp
  },
  {
    name: 'Advertising Excellence',
    category: 'Top Media Partner',
    year: '2022',
    icon: Star
  }
];

const partners = [
  { name: 'Telecom Namibia', logo: 'TN' },
  { name: 'Bank Windhoek', logo: 'BW' },
  { name: 'Shoprite Namibia', logo: 'SN' },
  { name: 'Namibia Breweries', logo: 'NB' },
  { name: 'FNB Namibia', logo: 'FN' },
  { name: 'MTC Namibia', logo: 'MT' },
  { name: 'Pick n Pay', logo: 'PP' },
  { name: 'Standard Bank', logo: 'SB' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'Telecom Namibia',
    content: 'Future Media\'s multi-platform approach helped us reach 2.3 million Namibians with our 5G campaign. The results exceeded our expectations by 45%.',
    rating: 5,
    campaign: '5G Launch Campaign'
  },
  {
    name: 'Michael Peters',
    position: 'Brand Manager',
    company: 'Namibia Breweries',
    content: 'The integrated radio and digital campaign created by Future Media was outstanding. Their understanding of the Namibian market is unmatched.',
    rating: 5,
    campaign: 'Brand Awareness Campaign'
  },
  {
    name: 'Lisa Ndapandula',
    position: 'CEO',
    company: 'Local Retail Chain',
    content: 'From concept to execution, Future Media delivered exceptional results. Our sales increased by 67% during the campaign period.',
    rating: 5,
    campaign: 'Festive Season Campaign'
  }
];

const pressMentions = [
  {
    publication: 'Namibian Economist',
    headline: 'Future Media Leads Digital Transformation in Broadcasting',
    date: 'October 2023',
    category: 'Industry News'
  },
  {
    publication: 'New Era Newspaper',
    headline: 'Radio Reimagined: How Future Media is Shaping Namibia\'s Audio Landscape',
    date: 'September 2023',
    category: 'Feature'
  },
  {
    publication: 'Confidente',
    headline: 'Advertising Success: Future Media\'s Data-Driven Approach Delivers Results',
    date: 'August 2023',
    category: 'Business'
  }
];

export default function SocialProof() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="social-proof" className="section-padding">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4" />
            Trusted by Leading Brands
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Proven <span className="text-gradient">Success</span> & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have achieved remarkable results with our 
            multi-platform advertising solutions across Namibia.
          </p>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 text-center border border-primary/20"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <award.icon className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{award.name}</h4>
                <p className="text-primary font-medium mb-1">{award.category}</p>
                <p className="text-muted-foreground text-sm">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Namibia's Leading Brands</h3>
          <div className="bg-background rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-center h-20 bg-muted/30 rounded-lg p-4 hover-lift"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{partner.logo}</div>
                    <div className="text-xs text-muted-foreground">{partner.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Client Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-sm hover-lift"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Campaign: {testimonial.campaign}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">In the News</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pressMentions.map((press, index) => (
              <motion.div
                key={press.headline}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-sm hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {press.category}
                  </div>
                  <div className="text-xs text-muted-foreground">{press.date}</div>
                </div>
                
                <h4 className="font-semibold mb-2">{press.headline}</h4>
                <p className="text-sm text-muted-foreground mb-4">{press.publication}</p>
                
                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
                  Read Article →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}