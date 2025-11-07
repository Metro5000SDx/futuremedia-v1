'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, Users } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+264 61 281 234', '+264 81 123 4567'],
    action: 'tel:+26461281234'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['advertising@futuremedia.com.na', 'info@futuremedia.com.na'],
    action: 'mailto:advertising@futuremedia.com.na'
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['123 Independence Avenue', 'Windhoek, Namibia'],
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
    action: '#'
  }
];

const teamContacts = [
  {
    name: 'Sarah Ndapandula',
    position: 'Sales Director',
    email: 'sarah@futuremedia.com.na',
    phone: '+264 61 281 235',
    expertise: 'Large Enterprise Accounts'
  },
  {
    name: 'Michael Peters',
    position: 'Digital Advertising Manager',
    email: 'michael@futuremedia.com.na',
    phone: '+264 61 281 236',
    expertise: 'Digital Campaigns & Analytics'
  },
  {
    name: 'Lisa Kamati',
    position: 'Client Relations Manager',
    email: 'lisa@futuremedia.com.na',
    phone: '+264 61 281 237',
    expertise: 'Small & Medium Business'
  }
];

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
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
            <Send className="w-4 h-4" />
            Get In Touch
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Amplify</span> Your Brand?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards reaching millions of Namibians. Our team is ready to 
            create a custom advertising solution that drives real results for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-background rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Request Your Media Kit</h3>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+264 61 123 456"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="5000-15000">N$ 5,000 - 15,000</option>
                        <option value="15000-50000">N$ 15,000 - 50,000</option>
                        <option value="50000+">N$ 50,000+</option>
                        <option value="custom">Custom Quote</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Campaign Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-border rounded-lg bg-background"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1month">Within 1 Month</option>
                        <option value="3months">Within 3 Months</option>
                        <option value="6months">Within 6 Months</option>
                        <option value="planning">Just Planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Campaign Goals</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your advertising goals, target audience, and any specific requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Request Media Kit & Consultation
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your media kit request has been received. Our team will contact you within 24 hours 
                    to schedule your consultation.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-background rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Team Contacts */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Team</h3>
              <div className="space-y-4">
                {teamContacts.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-background/80 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-primary font-medium">{member.position}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.expertise}</p>
                      </div>
                      <div className="text-right">
                        <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline block">
                          {member.email}
                        </a>
                        <a href={`tel:${member.phone}`} className="text-sm text-muted-foreground hover:text-primary block">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-background rounded-2xl p-8 shadow-sm text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
              <p className="text-muted-foreground mb-6">
                Book a free 30-minute consultation with our advertising specialists
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Download Media Kit CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Download Our Complete Media Kit
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get detailed information about our audience demographics, advertising rates, 
              case studies, and success metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Download PDF Media Kit
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Request Printed Copy
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}