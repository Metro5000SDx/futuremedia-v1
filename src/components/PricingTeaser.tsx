'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, Zap, Crown, Target } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'From N$ 5,000',
    description: 'Perfect for small businesses and startups',
    features: [
      'Radio spots on 1 station',
      'Basic digital display ads',
      '1-month campaign duration',
      'Basic performance reporting',
      'Email support'
    ],
    highlighted: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    icon: Target,
    price: 'From N$ 15,000',
    description: 'Ideal for growing businesses',
    features: [
      'Radio spots on 3 stations',
      'Digital display + video ads',
      '3-month campaign duration',
      'Advanced analytics dashboard',
      'Dedicated account manager',
      'Creative production services',
      'Social media integration'
    ],
    highlighted: true,
    cta: 'Most Popular'
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 'From N$ 50,000',
    description: 'For large corporations and agencies',
    features: [
      'All stations + premium placement',
      'Full digital suite + programmatic',
      '6+ month campaign duration',
      'Custom reporting & insights',
      'Strategic planning consultation',
      'Full creative production',
      'Multi-platform integration',
      'Event sponsorship opportunities',
      'Priority support & optimization'
    ],
    highlighted: false,
    cta: 'Contact Sales'
  }
];

const addOns = [
  {
    name: 'Premium Production',
    price: 'N$ 2,500+',
    description: 'Professional jingles, voice-overs, and video production'
  },
  {
    name: 'Influencer Marketing',
    price: 'N$ 5,000+',
    description: 'Partner with local influencers and content creators'
  },
  {
    name: 'Event Coverage',
    price: 'N$ 7,500+',
    description: 'Live broadcasting and event promotion'
  },
  {
    name: 'Advanced Analytics',
    price: 'N$ 1,500+',
    description: 'Detailed audience insights and attribution modeling'
  }
];

export default function PricingTeaser() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="section-padding">
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
            <Star className="w-4 h-4" />
            Flexible Pricing Plans
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solutions for <span className="text-gradient">Every Budget</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our flexible advertising packages or let us create a custom solution 
            tailored to your specific goals and budget.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-green-500" />
            <span>No hidden fees</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
            <span className="mx-2">•</span>
            <Check className="w-4 h-4 text-green-500" />
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                pkg.highlighted 
                  ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-lg scale-105' 
                  : 'bg-background border border-border shadow-sm'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  pkg.highlighted 
                    ? 'bg-gradient-to-r from-primary to-accent text-white' 
                    : 'bg-muted'
                }`}>
                  <pkg.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                className={`w-full py-3 ${
                  pkg.highlighted 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-accent hover:bg-accent/90 text-accent-foreground'
                }`}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {pkg.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Enhance Your Campaign</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-border hover-lift"
              >
                <h4 className="font-semibold mb-2">{addOn.name}</h4>
                <div className="text-primary font-bold mb-2">{addOn.price}</div>
                <p className="text-sm text-muted-foreground">{addOn.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Custom Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let our team create a tailored advertising strategy 
              that aligns perfectly with your goals, audience, and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-8 py-3">
                Download Rate Card
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">48hr</div>
              <div className="text-sm text-muted-foreground">Campaign Launch</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">0</div>
              <div className="text-sm text-muted-foreground">Hidden Fees</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}