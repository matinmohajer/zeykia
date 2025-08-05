'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, ArrowRight, Star, Award, Globe, Users } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
import Link from 'next/link';

export function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const featuredCollections = [
    {
      name: 'Heritage Collection',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Timeless designs rooted in centuries of tradition',
      price: 'From $18,000'
    },
    {
      name: 'Contemporary Masters',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop',
      description: 'Modern interpretations of classical artistry',
      price: 'From $25,000'
    },
    {
      name: 'Exclusive Signatures',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop',
      description: 'One-of-a-kind masterpieces for discerning collectors',
      price: 'From $45,000'
    }
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'International Awards' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Users, number: '500+', label: 'Master Artisans' },
    { icon: Star, number: '10', label: 'Years of Excellence' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop"
            alt="Zeykia artisan crafting luxury carpet"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="glass-panel p-12 rounded-3xl"
          >
            {/* Logo/Brand */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl text-white tracking-[0.3em] mb-4">ZEYKIA</h1>
              <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </motion.div>

            {/* Main Tagline */}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/90 mb-6 font-light"
            >
              Where Ancient Artistry Meets Contemporary Luxury
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Each carpet is a masterpiece, hand-woven by master artisans using techniques 
              passed down through generations. Discover the extraordinary.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(80, 200, 120, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="glass-button px-8 py-4 rounded-full text-white flex items-center space-x-3 border-2 border-emerald-500/50"
              >
                <Link href="/products" className="flex items-center space-x-3">
                  <span>EXPLORE COLLECTION</span>
                  <ArrowRight size={20} />
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVideoPlaying(!videoPlaying)}
                className="glass-button px-8 py-4 rounded-full text-white/90 flex items-center space-x-3"
              >
                <Play size={20} />
                <span>WATCH OUR STORY</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-800 mb-6">Curated Collections</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Three distinct collections, each representing a different facet of our 
              artisanal mastery and creative vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection, index) => (
              <motion.div
                key={collection.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer glass-glint"
                whileHover={{ y: -10 }}
              >
                <Link href="/products">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-slate-800 mb-3">{collection.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">{collection.price}</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-emerald-600 text-sm"
                      >
                        <span>Explore</span>
                        <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-2"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&h=500&fit=crop"
                alt="Master artisan at work"
                className="w-full h-[400px] object-cover rounded-2xl"
                fill
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8"
            >
              <h2 className="text-slate-800 mb-6">The Zeykia Legacy</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in the ancient weaving city of Istanbul, Zeykia represents the 
                  pinnacle of carpet artistry. Our master weavers combine centuries-old 
                  techniques with contemporary design sensibilities.
                </p>
                <p>
                  Every carpet tells a story—of the hands that crafted it, the traditions 
                  that inspired it, and the home it will grace. We don't just create carpets; 
                  we weave dreams into reality.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 glass-button px-6 py-3 rounded-full text-slate-700 flex items-center space-x-2"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Our Story</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-slate-800 mb-16"
          >
            Recognized Excellence
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="glass-button p-4 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon size={24} className="text-emerald-600" />
                </div>
                <div className="text-3xl text-slate-800 mb-2">{achievement.number}</div>
                <div className="text-slate-600 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-12 rounded-3xl"
          >
            <h2 className="text-slate-800 mb-6">Begin Your Journey</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Discover the perfect carpet for your space. Schedule a private consultation 
              with our design experts or explore our exclusive collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button px-8 py-4 rounded-full text-slate-700 border-2 border-emerald-500/30"
              >
                <Link href="/exclusive">VIEW EXCLUSIVE PIECES</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button px-8 py-4 rounded-full text-slate-700"
              >
                SCHEDULE CONSULTATION
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}