'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Target, Users, Award, ArrowRight, Calendar, Building } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'Telecom Namibia',
    campaign: '5G Network Launch',
    category: 'Product Launch',
    duration: '3 Months',
    budget: 'N$ 450,000',
    image: '📱',
    challenge: 'Launch 5G network across Namibia with mass awareness and drive early adoption',
    solution: 'Multi-platform campaign integrating radio spots, digital display ads, social media, and live event coverage',
    results: {
      reach: '2.3M',
      engagement: '45%',
      adoption: '120K',
      roi: '340%'
    },
    testimonial: 'Future Media\'s comprehensive approach helped us achieve record-breaking 5G adoption rates in just 3 months.',
    metrics: [
      { label: 'Brand Awareness', value: '89%', change: '+32%' },
      { label: 'Lead Generation', value: '45K', change: '+67%' },
      { label: 'Conversion Rate', value: '12%', change: '+8%' }
    ],
    tags: ['Radio', 'Digital', 'Social Media', 'Events']
  },
  {
    id: 2,
    client: 'Namibia Breweries',
    campaign: 'Festive Season Campaign',
    category: 'Seasonal Campaign',
    duration: '2 Months',
    budget: 'N$ 320,000',
    image: '🍺',
    challenge: 'Increase festive season sales and brand visibility during competitive holiday period',
    solution: 'Integrated radio sponsorship, digital video campaigns, and influencer partnerships',
    results: {
      reach: '1.8M',
      engagement: '38%',
      sales: '+67%',
      roi: '280%'
    },
    testimonial: 'The festive campaign exceeded all our KPIs. Future Media truly understands the Namibian market.',
    metrics: [
      { label: 'Sales Increase', value: '67%', change: '+45%' },
      { label: 'Market Share', value: '34%', change: '+12%' },
      { label: 'Brand Recall', value: '76%', change: '+28%' }
    ],
    tags: ['Radio', 'Video', 'Influencers', 'Sponsorship']
  },
  {
    id: 3,
    client: 'Bank Windhoek',
    campaign: 'Digital Banking Awareness',
    category: 'Digital Transformation',
    duration: '4 Months',
    budget: 'N$ 380,000',
    image: '🏦',
    challenge: 'Drive adoption of new digital banking platform among traditional banking customers',
    solution: 'Educational radio content, digital tutorials, and targeted social media campaigns',
    results: {
      reach: '1.5M',
      engagement: '52%',
      adoption: '85K',
      roi: '310%'
    },
    testimonial: 'Future Media helped us successfully transition customers to digital banking with impressive results.',
    metrics: [
      { label: 'App Downloads', value: '85K', change: '+210%' },
      { label: 'Active Users', value: '62K', change: '+180%' },
      { label: 'Transactions', value: '450K', change: '+290%' }
    ],
    tags: ['Radio', 'Digital', 'Education', 'Mobile']
  }
];

export default function CaseStudies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="case-studies" className="section-padding bg-muted/30">
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
            <Award className="w-4 h-4" />
            Success Stories
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Real <span className="text-gradient">Results</span> for Real Clients
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how leading Namibian brands have achieved extraordinary results with our 
            data-driven, multi-platform advertising solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-background rounded-3xl shadow-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Content */}
                <div className="p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                          {study.category}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {study.duration}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{study.campaign}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        {study.client}
                      </div>
                    </div>
                    <div className="text-6xl">{study.image}</div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                        <div className="text-xs text-green-600 font-medium">{metric.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-6">
                    "{study.testimonial}"
                  </blockquote>

                  {/* CTA */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-medium transition-colors">
                    View Full Case Study
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>

                {/* Right Column - Results */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-8 text-center">Campaign Results</h4>
                  
                  <div className="space-y-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-2">{study.results.reach}</div>
                      <div className="text-sm text-muted-foreground">Total Reach</div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                      <div className="text-3xl font-bold text-accent mb-2">{study.results.engagement}</div>
                      <div className="text-sm text-muted-foreground">Engagement Rate</div>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-primary mb-2">{study.results.adoption}</div>
                      <div className="text-sm text-muted-foreground">
                        {study.client === 'Telecom Namibia' ? '5G Adopters' : 
                         study.client === 'Namibia Breweries' ? 'Sales Increase' : 
                         'App Users'}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-6 text-center">
                      <Award className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-3xl font-bold mb-2">{study.results.roi}</div>
                      <div className="text-sm">Return on Investment</div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Campaign Investment</div>
                    <div className="text-xl font-semibold">{study.budget}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have achieved remarkable results with our targeted advertising solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Campaign
              </button>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium hover-lift">
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}