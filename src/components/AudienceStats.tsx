'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Users, TrendingUp, MapPin, Clock, Smartphone, Radio } from 'lucide-react';

const audienceData = [
  { name: 'Windhoek', listeners: 450000, percentage: 35 },
  { name: 'Swakopmund', listeners: 280000, percentage: 22 },
  { name: 'Walvis Bay', listeners: 220000, percentage: 17 },
  { name: 'Oshakati', listeners: 180000, percentage: 14 },
  { name: 'Otjiwarongo', listeners: 95000, percentage: 7 },
  { name: 'Other', listeners: 55000, percentage: 5 },
];

const demographicData = [
  { name: '18-24', value: 28, color: '#FF6B6B' },
  { name: '25-34', value: 32, color: '#4ECDC4' },
  { name: '35-44', value: 22, color: '#45B7D1' },
  { name: '45-54', value: 13, color: '#96CEB4' },
  { name: '55+', value: 5, color: '#FFEAA7' },
];

const listeningTrends = [
  { time: '06:00', listeners: 120000 },
  { time: '09:00', listeners: 450000 },
  { time: '12:00', listeners: 380000 },
  { time: '15:00', listeners: 420000 },
  { time: '18:00', listeners: 520000 },
  { time: '21:00', listeners: 280000 },
];

const platformData = [
  { platform: 'FM Radio', users: 1800000, growth: 12 },
  { platform: 'Online Streaming', users: 650000, growth: 45 },
  { platform: 'Mobile App', users: 420000, growth: 78 },
  { platform: 'Smart Speakers', users: 180000, growth: 120 },
];

export default function AudienceStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="audience" className="section-padding">
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
            <Users className="w-4 h-4" />
            Audience Insights
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Reach <span className="text-gradient">2 Million+</span> Namibians
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive audience data ensures your message reaches the right people at the right time, 
            across multiple platforms and demographics.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">2.1M</div>
            <div className="text-sm text-muted-foreground">Monthly Listeners</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-accent mb-1">14</div>
            <div className="text-sm text-muted-foreground">Major Cities</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">4.5hrs</div>
            <div className="text-sm text-muted-foreground">Daily Listening</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
            <Smartphone className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-accent mb-1">68%</div>
            <div className="text-sm text-muted-foreground">Mobile Users</div>
          </div>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Geographic Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-background rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Geographic Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={audienceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value: any) => [`${value.toLocaleString()} listeners`, 'Audience']}
                />
                <Bar dataKey="listeners" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.25 0.05 240)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="oklch(0.85 0.15 30)" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-background rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Age Demographics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value: any) => [`${value}%`, 'Audience Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {demographicData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Listening Trends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-background rounded-2xl p-6 shadow-sm mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Daily Listening Patterns
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={listeningTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value: any) => [`${value.toLocaleString()} listeners`, 'Active']}
              />
              <Line 
                type="monotone" 
                dataKey="listeners" 
                stroke="oklch(0.25 0.05 240)" 
                strokeWidth={3}
                dot={{ fill: "oklch(0.85 0.15 30)", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Platform Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Multi-Platform Reach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformData.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-sm hover-lift text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {platform.platform === 'FM Radio' && <Radio className="w-6 h-6 text-primary" />}
                  {platform.platform === 'Online Streaming' && <Smartphone className="w-6 h-6 text-primary" />}
                  {platform.platform === 'Mobile App' && <Smartphone className="w-6 h-6 text-accent" />}
                  {platform.platform === 'Smart Speakers' && <Radio className="w-6 h-6 text-accent" />}
                </div>
                <h4 className="font-semibold mb-2">{platform.platform}</h4>
                <div className="text-2xl font-bold text-primary mb-1">
                  {(platform.users / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-green-600 font-medium">
                  +{platform.growth}% growth
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Get Detailed Audience Analytics
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access comprehensive demographic data, listening patterns, and audience insights to optimize your advertising campaigns.
            </p>
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Full Analytics Report
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}