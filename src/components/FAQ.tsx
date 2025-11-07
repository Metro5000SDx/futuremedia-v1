'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    icon: HelpCircle,
    questions: [
      {
        q: 'How quickly can I launch an advertising campaign?',
        a: 'Most campaigns can be launched within 48-72 hours after approval. Premium production services may require additional time for creative development.'
      },
      {
        q: 'What is the minimum budget required to advertise?',
        a: 'Our starter packages begin at N$ 5,000. We also offer custom solutions for businesses with specific requirements and budget constraints.'
      },
      {
        q: 'Do you provide creative production services?',
        a: 'Yes, we offer comprehensive creative services including jingle production, voice-overs, video production, and graphic design starting from N$ 2,500.'
      }
    ]
  },
  {
    category: 'Advertising Solutions',
    icon: MessageCircle,
    questions: [
      {
        q: 'Which radio stations do you operate?',
        a: 'We operate 6 leading radio stations: Radiowave, Omulunga Radio, Fresh FM, Nova 103.5, 99FM/OneAfrica, and Future Media News, covering all major Namibian demographics.'
      },
      {
        q: 'Can I target specific geographic areas?',
        a: 'Absolutely! We offer precise geographic targeting from city-level to regional coverage across our 14 major broadcast locations.'
      },
      {
        q: 'What digital advertising platforms do you offer?',
        a: 'Our digital suite includes display advertising, video pre-roll, mobile app ads, social media campaigns, and programmatic buying across premium publisher networks.'
      },
      {
        q: 'Do you offer integrated campaigns?',
        a: 'Yes, integrated multi-platform campaigns are our specialty. We combine radio, digital, and social media to maximize reach and impact.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    icon: HelpCircle,
    questions: [
      {
        q: 'How is pricing determined?',
        a: 'Pricing is based on factors including station popularity, time slot, campaign duration, ad format, and target audience. We provide transparent rate cards for all packages.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, credit/debit cards, and offer flexible payment terms for qualifying clients and long-term campaigns.'
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No, we believe in complete transparency. All costs are clearly outlined in your proposal, including production, media placement, and any additional services.'
      },
      {
        q: 'Do you offer discounts for long-term commitments?',
        a: 'Yes, we provide significant discounts for campaigns of 3+ months and custom pricing for annual partnerships.'
      }
    ]
  },
  {
    category: 'Performance & Reporting',
    icon: MessageCircle,
    questions: [
      {
        q: 'How do you measure campaign performance?',
        a: 'We provide comprehensive analytics including reach, frequency, engagement rates, conversion tracking, and ROI analysis through our advanced dashboard.'
      },
      {
        q: 'Can I make changes to my campaign once it\'s live?',
        a: 'Yes, we offer real-time optimization capabilities. Creative changes can be made within 24 hours, and targeting adjustments can be implemented immediately.'
      },
      {
        q: 'What kind of reporting can I expect?',
        a: 'You\'ll receive weekly performance reports, monthly executive summaries, and access to our real-time analytics dashboard with detailed insights and recommendations.'
      }
    ]
  }
];

const stillHaveQuestions = [
  {
    icon: Phone,
    title: 'Call Our Team',
    description: 'Speak directly with our advertising specialists',
    action: '+264 61 281 234',
    link: 'tel:+26461281234'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get detailed information via email',
    action: 'advertising@futuremedia.com.na',
    link: 'mailto:advertising@futuremedia.com.na'
  },
  {
    icon: MessageCircle,
    title: 'Schedule Consultation',
    description: 'Book a free strategy session',
    action: 'Book Now',
    link: '#contact'
  }
];

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="section-padding bg-muted/30">
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
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our advertising solutions, pricing, and services. 
            Can't find what you're looking for? Our team is here to help.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <div className="bg-background rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-xl px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Still Have Questions?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {stillHaveQuestions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="bg-background rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <a 
                    href={item.link}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {item.action} →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2M+</div>
              <div className="text-sm text-muted-foreground">Monthly Reach</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}