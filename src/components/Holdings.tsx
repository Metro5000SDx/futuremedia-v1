'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radio, TrendingUp, Users, MapPin } from 'lucide-react';

const radioStations = [
  {
    name: 'Radiowave',
    tagline: 'Namibia\'s Hit Music Station',
    audience: '450K+',
    demographic: '18-34',
    description: 'Contemporary hit radio targeting young urban professionals',
    color: 'from-purple-500 to-pink-500',
    type: 'Radio',
    frequency: '96.7 FM',
    coverage: 'Windhoek, Swakopmund, Walvis Bay',
    dataSources: [
      'Future Media Radio Analytics System (FMRAS)',
      'Namibia Broadcasting Corporation (NBC) Partnership Data',
      'Independent Radio Ratings Board (IRRB) Q3 2024'
    ],
    detailedMetrics: {
      weeklyReach: 385000,
      averageListeningTime: '3.2 hours/day',
      peakHours: '06:00-09:00, 16:00-19:00',
      marketShare: '23.5%',
      digitalEngagement: '125K monthly streams'
    },
    programming: ['Top 40 Charts', 'Celebrity Interviews', 'Traffic Updates', 'Entertainment News'],
    advertising: ['15/30/60 second spots', 'Show sponsorships', 'Live endorsements', 'Digital integration']
  },
  {
    name: 'Omulunga Radio',
    tagline: 'The Heartbeat of Namibia',
    audience: '380K+',
    demographic: '25-49',
    description: 'Adult contemporary with local Namibian music focus',
    color: 'from-orange-500 to-red-500',
    type: 'Radio',
    frequency: '97.4 FM',
    coverage: 'National Coverage (14 Regions)',
    dataSources: [
      'Future Media Radio Analytics System (FMRAS)',
      'Namibia Statistics Agency (NSA) Media Consumption Survey',
      'Mobile Network Provider Location Data'
    ],
    detailedMetrics: {
      weeklyReach: 342000,
      averageListeningTime: '4.1 hours/day',
      peakHours: '07:00-10:00, 17:00-20:00',
      marketShare: '19.8%',
      digitalEngagement: '95K monthly streams'
    },
    programming: ['Local Music Focus', 'Talk Shows', 'Community News', 'Cultural Programs'],
    advertising: ['Prime time spots', 'Talk show sponsorships', 'Community partnerships', 'Event coverage']
  },
  {
    name: 'Fresh FM',
    tagline: 'Feel Good Radio',
    audience: '320K+',
    demographic: '30-54',
    description: 'Classic hits and feel-good music for mature audiences',
    color: 'from-green-500 to-teal-500',
    type: 'Radio',
    frequency: '98.7 FM',
    coverage: 'Central & Northern Namibia',
    dataSources: [
      'Future Media Radio Analytics System (FMRAS)',
      'Retail Partner Foot Traffic Analysis',
      'Automotive In-Car Radio Monitoring'
    ],
    detailedMetrics: {
      weeklyReach: 289000,
      averageListeningTime: '3.8 hours/day',
      peakHours: '06:00-09:00, 16:00-18:00',
      marketShare: '16.7%',
      digitalEngagement: '78K monthly streams'
    },
    programming: ['Classic Hits', 'Lifestyle Programs', 'Wellness Shows', 'Weekend Specials'],
    advertising: ['Time-slot packages', 'Lifestyle sponsorships', 'Weekend programming', 'Retail partnerships']
  },
  {
    name: 'Nova 103.5',
    tagline: 'Entertainment Unlocked',
    audience: '280K+',
    demographic: '18-34',
    description: 'Urban contemporary with entertainment and lifestyle content',
    color: 'from-blue-500 to-purple-500',
    type: 'Radio',
    frequency: '103.5 FM',
    coverage: 'Urban Centers: Windhoek, Swakopmund, Oshakati',
    dataSources: [
      'Future Media Radio Analytics System (FMRAS)',
      'Social Media Engagement Analytics',
      'Concert & Event Attendance Data'
    ],
    detailedMetrics: {
      weeklyReach: 245000,
      averageListeningTime: '2.9 hours/day',
      peakHours: '15:00-19:00, 20:00-23:00',
      marketShare: '14.2%',
      digitalEngagement: '156K monthly streams'
    },
    programming: ['Urban Music', 'Celebrity Gossip', 'Party Mix', 'Club Scene Updates'],
    advertising: ['Evening spots', 'Event sponsorships', 'Social media integration', 'Brand activations']
  },
  {
    name: '99FM/OneAfrica',
    tagline: 'News & Talk Radio',
    audience: '250K+',
    demographic: '35-64',
    description: 'Current affairs, business news, and talk radio',
    color: 'from-red-500 to-orange-500',
    type: 'Radio',
    frequency: '99.0 FM',
    coverage: 'National with TV Integration',
    dataSources: [
      'Future Media Radio Analytics System (FMRAS)',
      'OneAfrica TV Cross-Platform Analytics',
      'Business & Government Partnership Data'
    ],
    detailedMetrics: {
      weeklyReach: 198000,
      averageListeningTime: '2.3 hours/day',
      peakHours: '06:00-09:00, 18:00-20:00',
      marketShare: '11.5%',
      digitalEngagement: '89K monthly streams'
    },
    programming: ['News Bulletins', 'Business Talk', 'Political Analysis', 'Current Affairs'],
    advertising: ['News sponsorships', 'Talk show partnerships', 'Business programming', 'Thought leadership']
  },
  {
    name: 'Future Media News',
    tagline: 'Digital News Platform',
    audience: '500K+',
    demographic: '25-64',
    description: 'Online news portal covering Namibia and Southern Africa',
    color: 'from-gray-600 to-gray-800',
    type: 'Digital News',
    frequency: 'Online & Mobile App',
    coverage: 'Namibia & Southern Africa',
    dataSources: [
      'Google Analytics & Search Console',
      'Social Media Platform Analytics',
      'Mobile App Usage Statistics',
      'Content Management System (CMS) Analytics'
    ],
    detailedMetrics: {
      monthlyVisitors: 523000,
      averageSessionDuration: '4:32 minutes',
      peakHours: '07:00-09:00, 12:00-14:00, 18:00-21:00',
      marketShare: 'Digital News: 31.2%',
      socialEngagement: '234K monthly interactions'
    },
    programming: ['Breaking News', 'Politics', 'Business', 'Sports', 'Entertainment'],
    advertising: ['Display ads', 'Sponsored content', 'Newsletter sponsorships', 'Video pre-roll']
  }
];

export default function Holdings() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="holdings" className="section-padding bg-muted/30">
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
            <Radio className="w-4 h-4" />
            Our Media Portfolio
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Leading <span className="text-gradient">Brands</span> Across Namibia
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse portfolio reaches every demographic across Namibia, from urban youth to rural communities, 
            delivering targeted content and advertising solutions.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">Media Brands</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
            <div className="text-sm text-muted-foreground">Monthly Reach</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">14</div>
            <div className="text-sm text-muted-foreground">Major Cities</div>
          </div>
          <div className="text-center p-6 bg-background rounded-2xl shadow-sm hover-lift">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">National Coverage</div>
          </div>
        </motion.div>

        {/* Radio Stations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {radioStations.map((station, index) => (
            <motion.div
              key={station.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 shadow-sm hover-lift h-full">
                {/* Station Header */}
                <div className={`h-2 bg-gradient-to-r ${station.color} rounded-full mb-6`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{station.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{station.tagline}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{station.type}</span>
                      <span>•</span>
                      <span>{station.frequency}</span>
                      <span>•</span>
                      <span>{station.coverage}</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${station.color} rounded-full flex items-center justify-center text-white`}>
                    <Radio className="w-6 h-6" />
                  </div>
                </div>

                {/* Station Description */}
                <p className="text-muted-foreground mb-4">
                  {station.description}
                </p>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-primary">
                      {station.type === 'Digital News' 
                        ? (station.detailedMetrics?.monthlyVisitors || 0).toLocaleString() 
                        : (station.detailedMetrics?.weeklyReach || 0).toLocaleString()
                      }
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {station.type === 'Digital News' ? 'Monthly Visitors' : 'Weekly Reach'}
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="text-lg font-bold text-accent">
                      {station.detailedMetrics?.marketShare || '0%'}
                    </div>
                    <div className="text-xs text-muted-foreground">Market Share</div>
                  </div>
                </div>

                {/* Peak Hours */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-1">Peak Hours:</div>
                  <div className="text-sm font-medium">{station.detailedMetrics?.peakHours || 'N/A'}</div>
                </div>

                {/* Data Sources */}
                <div className="mb-4">
                  <div className="text-xs text-muted-foreground mb-2">Data Sources:</div>
                  <div className="space-y-1">
                    {station.dataSources.slice(0, 2).map((source, index) => (
                      <div key={index} className="text-xs bg-primary/5 rounded p-2">
                        {source}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Station Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">{station.audience}</div>
                      <div className="text-xs text-muted-foreground">Monthly Listeners</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">{station.demographic}</div>
                      <div className="text-xs text-muted-foreground">Core Demographic</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full mt-6 text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                  Learn more about {station.name} →
                </button>
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
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Reach Your Target Audience?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get detailed audience insights, demographics, and advertising rates for any of our premium brands.
            </p>
            <button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-medium hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Detailed Media Kit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}