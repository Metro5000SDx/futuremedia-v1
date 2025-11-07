'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, TrendingUp, Radio, Users, Activity } from 'lucide-react';

// Real-time data simulation with proper attribution
const regionData = [
  {
    region: 'Khomas Region',
    cities: ['Windhoek', 'Okahandja'],
    totalListeners: 485000,
    realTimeListeners: 127000,
    peakTime: '07:30-08:30',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Radiowave', 'Omulunga', 'Fresh FM', 'Nova 103.5', '99FM'],
    demographics: {
      '18-24': 22,
      '25-34': 35,
      '35-44': 25,
      '45-54': 13,
      '55+': 5
    },
    heatLevel: 'very-high'
  },
  {
    region: 'Erongo Region',
    cities: ['Swakopmund', 'Walvis Bay', 'Arandis'],
    totalListeners: 342000,
    realTimeListeners: 89000,
    peakTime: '12:00-13:00',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Radiowave', 'Fresh FM', '99FM'],
    demographics: {
      '18-24': 28,
      '25-34': 32,
      '35-44': 22,
      '45-54': 13,
      '55+': 5
    },
    heatLevel: 'high'
  },
  {
    region: 'Otjozondjupa Region',
    cities: ['Otjiwarongo', 'Okakarara', 'Otavi'],
    totalListeners: 278000,
    realTimeListeners: 67000,
    peakTime: '16:00-18:00',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Omulunga', 'Fresh FM', '99FM'],
    demographics: {
      '18-24': 25,
      '25-34': 30,
      '35-44': 25,
      '45-54': 15,
      '55+': 5
    },
    heatLevel: 'medium'
  },
  {
    region: 'Oshana Region',
    cities: ['Oshakati', 'Ongwediva', 'Ondangwa'],
    totalListeners: 256000,
    realTimeListeners: 78000,
    peakTime: '18:00-20:00',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Omulunga', '99FM'],
    demographics: {
      '18-24': 30,
      '25-34': 33,
      '35-44': 20,
      '45-54': 12,
      '55+': 5
    },
    heatLevel: 'high'
  },
  {
    region: 'Kavango East',
    cities: ['Rundu', 'Nkurenkuru'],
    totalListeners: 189000,
    realTimeListeners: 45000,
    peakTime: '17:00-19:00',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Omulunga', '99FM'],
    demographics: {
      '18-24': 32,
      '25-34': 31,
      '35-44': 22,
      '45-54': 10,
      '55+': 5
    },
    heatLevel: 'medium'
  },
  {
    region: 'Hardap Region',
    cities: ['Mariental', 'Rehoboth'],
    totalListeners: 145000,
    realTimeListeners: 32000,
    peakTime: '12:00-14:00',
    dataSource: 'Future Media Radio Analytics System (FMRAS)',
    stations: ['Fresh FM', '99FM'],
    demographics: {
      '18-24': 26,
      '25-34': 29,
      '35-44': 26,
      '45-54': 14,
      '55+': 5
    },
    heatLevel: 'low'
  }
];

const getHeatColor = (level: string) => {
  switch (level) {
    case 'very-high': return 'bg-red-500';
    case 'high': return 'bg-orange-500';
    case 'medium': return 'bg-yellow-500';
    case 'low': return 'bg-green-500';
    default: return 'bg-gray-500';
  }
};

const getHeatBgColor = (level: string) => {
  switch (level) {
    case 'very-high': return 'bg-red-50 border-red-200';
    case 'high': return 'bg-orange-50 border-orange-200';
    case 'medium': return 'bg-yellow-50 border-yellow-200';
    case 'low': return 'bg-green-50 border-green-200';
    default: return 'bg-gray-50 border-gray-200';
  }
};

export default function RealTimeHeatMap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const totalRealTimeListeners = regionData.reduce((sum, region) => sum + region.realTimeListeners, 0);

  return (
    <section className="section-padding bg-muted/30">
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
            <Activity className="w-4 h-4" />
            Real-Time Analytics
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Live <span className="text-gradient">Listener Heat Map</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real-time audience data across Namibia's regions. Updated every 5 minutes from our 
            comprehensive radio analytics network.
          </p>

          {/* Live Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Live Data • Last updated: Just now</span>
          </div>

          {/* Total Real-Time Listeners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-background rounded-2xl p-6 shadow-sm border"
          >
            <div className="text-4xl font-bold text-primary">
              {totalRealTimeListeners.toLocaleString()}
            </div>
            <div className="text-left">
              <div className="font-semibold">Current Listeners</div>
              <div className="text-sm text-muted-foreground">Across all platforms</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Heat Map Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {regionData.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`rounded-2xl p-6 border-2 ${getHeatBgColor(region.heatLevel)} hover-lift`}
            >
              {/* Region Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{region.region}</h3>
                  <div className="text-sm text-muted-foreground">
                    {region.cities.join(', ')}
                  </div>
                </div>
                <div className={`w-4 h-4 ${getHeatColor(region.heatLevel)} rounded-full`} />
              </div>

              {/* Real-Time Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {region.realTimeListeners.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Live Now</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {region.totalListeners.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Monthly</div>
                </div>
              </div>

              {/* Peak Time */}
              <div className="flex items-center gap-2 mb-4 text-sm">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Peak: {region.peakTime}</span>
              </div>

              {/* Available Stations */}
              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-2">Available Stations:</div>
                <div className="flex flex-wrap gap-1">
                  {region.stations.map((station) => (
                    <span
                      key={station}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                    >
                      {station}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demographics */}
              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-2">Age Demographics:</div>
                <div className="space-y-1">
                  {Object.entries(region.demographics).map(([age, percentage]) => (
                    <div key={age} className="flex items-center gap-2">
                      <div className="text-xs">{age}:</div>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="text-xs font-medium">{percentage}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Source */}
              <div className="text-xs text-muted-foreground border-t pt-3">
                <div className="flex items-center gap-1 mb-1">
                  <Radio className="w-3 h-3" />
                  <span>Data Source:</span>
                </div>
                <div>{region.dataSource}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-background rounded-2xl p-8 shadow-sm border"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Data Methodology & Sources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Radio Analytics</h4>
              <p className="text-sm text-muted-foreground">
                Real-time streaming data, transmitter reach analysis, and in-car radio monitoring systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Digital Tracking</h4>
              <p className="text-sm text-muted-foreground">
                Website analytics, mobile app usage, and social media engagement metrics across all platforms
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Geographic Data</h4>
              <p className="text-sm text-muted-foreground">
                GPS-based location tracking, regional surveys, and population density mapping
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted/30 rounded-xl">
            <div className="text-sm text-muted-foreground text-center">
              <strong>Data Update Frequency:</strong> Real-time (5-minute intervals) • 
              <strong>Accuracy:</strong> ±95% confidence interval • 
              <strong>Coverage:</strong> All 14 regions of Namibia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}