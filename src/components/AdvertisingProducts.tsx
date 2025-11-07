'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radio, Megaphone, Monitor, Calendar, Target, Zap, Users, TrendingUp, Clock, Award } from 'lucide-react';

const advertisingProducts = [
  {
    category: 'Radio Advertising',
    icon: Radio,
    color: 'from-blue-500 to-purple-500',
    products: [
      {
        name: 'Prime Time Spots',
        description: 'Premium advertising slots during peak listening hours (6AM-9AM, 4PM-7PM)',
        features: ['15/30/60 second spots', 'Prime time placement', 'High frequency', 'Multi-station packages'],
        timeSlots: [
          { time: '06:00-09:00', rate: 'N$ 450/30sec', audience: 'Peak commuters' },
          { time: '12:00-14:00', rate: 'N$ 320/30sec', audience: 'Lunch time listeners' },
          { time: '16:00-19:00', rate: 'N$ 520/30sec', audience: 'Evening commuters' },
          { time: '19:00-22:00', rate: 'N$ 380/30sec', audience: 'Prime time entertainment' }
        ],
        startingPrice: 'N$ 2,500',
        cta: 'Get Radio Rates'
      },
      {
        name: 'Sponsorship Packages',
        description: 'Brand sponsorship of popular shows, segments, or time slots',
        features: ['Show sponsorships', 'Weather/traffic sponsorships', 'Brand mentions', 'Exclusive placement'],
        timeSlots: [
          { time: 'Morning Show (06:00-09:00)', rate: 'N$ 8,500/week', audience: '180K daily' },
          { time: 'Traffic Updates (07:00-09:00)', rate: 'N$ 3,200/week', audience: '220K daily' },
          { time: 'News Bulletin (12:00-13:00)', rate: 'N$ 2,800/week', audience: '150K daily' },
          { time: 'Drive Time (16:00-19:00)', rate: 'N$ 9,200/week', audience: '195K daily' }
        ],
        startingPrice: 'N$ 8,000',
        cta: 'Explore Sponsorships'
      },
      {
        name: 'Live Read Endorsements',
        description: 'Personal endorsements by popular radio hosts and presenters',
        features: ['Host read endorsements', 'Live testimonials', 'Authentic delivery', 'Call-in integration'],
        timeSlots: [
          { time: 'Host Endorsement (30sec)', rate: 'N$ 1,500', audience: 'Show-specific' },
          { time: 'Product Integration (60sec)', rate: 'N$ 2,800', audience: 'Show-specific' },
          { time: 'Call-in Sponsorship', rate: 'N$ 4,200/hour', audience: 'Live engagement' },
          { time: 'Remote Broadcast', rate: 'N$ 6,500/3hrs', audience: 'On-location' }
        ],
        startingPrice: 'N$ 1,500',
        cta: 'Book Endorsements'
      }
    ]
  },
  {
    category: 'Digital Advertising',
    icon: Monitor,
    color: 'from-green-500 to-teal-500',
    products: [
      {
        name: 'Display Advertising',
        description: 'Banner ads across our digital platforms and mobile apps',
        features: ['Responsive banners', 'Programmatic buying', 'Geo-targeting', 'Performance tracking'],
        startingPrice: 'N$ 1,200',
        cta: 'Get Display Rates'
      },
      {
        name: 'Video Pre-roll',
        description: 'Video ads before streaming content on our digital platforms',
        features: ['15/30 second videos', 'Skippable/non-skippable', 'Mobile optimized', 'View tracking'],
        startingPrice: 'N$ 3,000',
        cta: 'Book Video Ads'
      },
      {
        name: 'Podcast Advertising',
        description: 'Sponsorship and advertising in our popular podcast content',
        features: ['Pre/mid/post roll', 'Host read ads', 'Show sponsorships', 'Download tracking'],
        startingPrice: 'N$ 2,000',
        cta: 'Explore Podcasts'
      }
    ]
  },
  {
    category: 'Content & Production',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
    products: [
      {
        name: 'Content Creation',
        description: 'Professional audio and video content production for your brand',
        features: ['Jingle production', 'Commercial recording', 'Video production', 'Post-production'],
        startingPrice: 'N$ 5,000',
        cta: 'Start Production'
      },
      {
        name: 'Branded Content',
        description: 'Custom content series that align with your brand values',
        features: ['Content strategy', 'Production services', 'Multi-platform distribution', 'Performance analytics'],
        startingPrice: 'N$ 15,000',
        cta: 'Create Content'
      },
      {
        name: 'Event Coverage',
        description: 'Live broadcasting and coverage of your brand events',
        features: ['Live radio coverage', 'Social media coverage', 'Remote broadcasting', 'Interview packages'],
        startingPrice: 'N$ 7,500',
        cta: 'Book Coverage'
      }
    ]
  },
  {
    category: 'Integrated Campaigns',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    products: [
      {
        name: 'Multi-Platform Campaigns',
        description: 'Integrated campaigns across radio, digital, and social platforms',
        features: ['Cross-platform strategy', 'Unified messaging', 'Performance tracking', 'Optimization'],
        startingPrice: 'N$ 25,000',
        cta: 'Plan Campaign'
      },
      {
        name: 'Brand Partnerships',
        description: 'Long-term strategic partnerships with our media brands',
        features: ['Exclusive partnerships', 'Co-branded content', 'Event collaborations', 'Custom solutions'],
        startingPrice: 'N$ 50,000',
        cta: 'Partner With Us'
      }
    ]
  }
];

export default function AdvertisingProducts() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="products" className="section-padding bg-muted/30">
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Megaphone className="w-4 h-4" />
            Advertising Solutions
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Multi-Platform <span className="text-gradient">Advertising</span> Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional radio spots to cutting-edge digital campaigns, we offer comprehensive 
            advertising solutions that reach your target audience wherever they are.
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <Target className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-semibold mb-1">Targeted Reach</div>
            <div className="text-sm text-muted-foreground">Precision audience targeting</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="font-semibold mb-1">Measurable ROI</div>
            <div className="text-sm text-muted-foreground">Real-time performance tracking</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-semibold mb-1">Quick Launch</div>
            <div className="text-sm text-muted-foreground">Campaigns live in 48 hours</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <Award className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="font-semibold mb-1">Premium Quality</div>
            <div className="text-sm text-muted-foreground">Award-winning content</div>
          </div>
        </motion.div>

        {/* Product Categories */}
        <div className="space-y-12">
          {advertisingProducts.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">{category.category}</h3>
                  <p className="text-muted-foreground">
                    {category.category === 'Radio Advertising' && 'Reach millions through Namibia\'s most popular radio stations'}
                    {category.category === 'Digital Advertising' && 'Engage audiences across our digital platforms and mobile apps'}
                    {category.category === 'Content & Production' && 'Professional content creation and production services'}
                    {category.category === 'Integrated Campaigns' && 'Comprehensive multi-platform advertising solutions'}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 + productIndex * 0.05 }}
                    className="bg-background rounded-2xl p-6 shadow-sm hover-lift h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-3">{product.name}</h4>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      
                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Time Slots - Only for Radio Advertising */}
                      {product.timeSlots && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-sm mb-3">Time Slot Rates:</h5>
                          <div className="space-y-2">
                            {product.timeSlots.map((slot, index) => (
                              <div key={index} className="flex justify-between items-center text-xs bg-muted/30 rounded p-2">
                                <div>
                                  <div className="font-medium">{slot.time}</div>
                                  <div className="text-muted-foreground">{slot.audience}</div>
                                </div>
                                <div className="text-primary font-semibold">{slot.rate}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Pricing and CTA */}
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Starting from</div>
                          <div className="text-xl font-bold text-primary">{product.startingPrice}</div>
                        </div>
                      </div>
                      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-medium transition-colors">
                        {product.cta}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Advertising Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can create tailored advertising packages to meet your specific goals, budget, and target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Custom Quote
              </button>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium hover-lift">
                Download Rate Card
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}