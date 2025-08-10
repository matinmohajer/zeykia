'use client';

import { motion } from 'framer-motion';
import { Truck, Globe, Users, Award, ArrowRight } from 'lucide-react';

import Image from 'next/image';

export function ExportPage() {
  const milestones = [
    { year: '2015', event: 'Founded in Istanbul', icon: Award },
    { year: '2017', event: 'First International Export', icon: Globe },
    { year: '2019', event: 'Partnership with Harrods', icon: Users },
    { year: '2021', event: 'Global Shipping Network', icon: Truck },
    { year: '2023', event: '50+ Countries Served', icon: Globe },
    { year: '2025', event: 'Luxury Hotel Partnerships', icon: Users }
  ];

  const services = [
    {
      title: 'International Shipping',
      description: 'White-glove delivery service to over 50 countries worldwide with full insurance coverage.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
      details: ['Climate-controlled transport', 'Real-time tracking', 'Installation service', 'Full insurance']
    },
    {
      title: 'Custom Partnerships',
      description: 'Bespoke carpet solutions for luxury hotels, private residences, and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
      details: ['Design consultation', 'Custom sizing', 'Brand integration', 'Volume pricing']
    },
    {
      title: 'White-Label Services',
      description: 'Private label manufacturing for select luxury brands and interior design houses.',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=600&fit=crop',
      details: ['Confidential production', 'Quality guarantee', 'Flexible minimums', 'Co-branding options']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            poster="/images/export-hero.jpg"
          >
            <source src="/videos/export-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/70" />
        </div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={"relative z-10 glass-panel p-12 rounded-3xl max-w-3xl mx-6 text-center"}
        >
          <h1 className="text-white mb-6">Global Export & Bespoke Collaborations</h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Bringing artisanal excellence to discerning clients worldwide through 
            premium shipping and custom partnership solutions.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`glass-card rounded-3xl p-2 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className={`glass-card rounded-3xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-slate-800 mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <ArrowRight size={16} className="text-emerald-500" />
                      <span className="text-slate-600">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  // whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button px-8 py-4 rounded-full text-slate-700 tracking-wider"
                >
                  LEARN MORE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-slate-800 mb-16"
          >
            Our Journey to Global Excellence
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-emerald-500 to-sapphire-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`glass-card rounded-2xl p-6 max-w-md ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="glass-button p-3 rounded-full">
                        <milestone.icon size={20} className="text-emerald-600" />
                      </div>
                      <span className="text-2xl text-slate-800">{milestone.year}</span>
                    </div>
                    <p className="text-slate-600">{milestone.event}</p>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}