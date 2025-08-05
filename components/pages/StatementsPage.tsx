'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Quote } from 'lucide-react';
import Link from 'next/link';

interface Statement {
  id: string;
  theme: string;
  text: string;
  author: string;
  videoThumbnail: string;
}

export function StatementsPage() {
  const [filter, setFilter] = useState('all');

  const statements: Statement[] = [
    {
      id: '1',
      theme: 'Craftsmanship',
      text: 'Every knot we tie is a prayer, every thread a story passed down through generations. In our hands, wool becomes poetry.',
      author: 'Master Weaver Ahmet',
      videoThumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      theme: 'Artistry',
      text: 'We do not merely follow patterns; we breathe life into them. Each carpet is a canvas where tradition meets innovation.',
      author: 'Design Director Ayşe',
      videoThumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      theme: 'Innovation',
      text: 'The future of carpet making lies not in abandoning the past, but in weaving it with tomorrow\'s possibilities.',
      author: 'Founder Mehmet Zeykia',
      videoThumbnail: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      theme: 'Craftsmanship',
      text: 'Time is our most precious ingredient. We measure our work not in hours, but in the lifetime of beauty we create.',
      author: 'Master Colorist Fatma',
      videoThumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop'
    },
    {
      id: '5',
      theme: 'Artistry',
      text: 'Colors speak a language older than words. We are simply translators, bringing their whispers to life.',
      author: 'Senior Artisan Kemal',
      videoThumbnail: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=400&fit=crop'
    },
    {
      id: '6',
      theme: 'Innovation',
      text: 'Luxury is not about price—it is about the soul we weave into every fiber, the love embedded in every pattern.',
      author: 'Creative Director Elif',
      videoThumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop'
    }
  ];

  const themes = ['all', 'Craftsmanship', 'Artistry', 'Innovation'];
  
  const filteredStatements = statements.filter(statement => 
    filter === 'all' || statement.theme === filter
  );

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 mb-6"
          >
            Voices of Zeykia
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            The philosophy, passion, and poetry that drives our artisans. 
            Each statement reveals the heart behind our craft.
          </motion.p>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-4 flex-wrap gap-y-3"
          >
            {themes.map((theme) => (
              <motion.button
                key={theme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(theme)}
                className={`glass-button px-6 py-3 rounded-full tracking-wider transition-all duration-300 ${
                  filter === theme 
                    ? 'bg-emerald-500/20 text-emerald-800 border-emerald-500/30' 
                    : 'text-slate-600'
                }`}
              >
                {theme === 'all' ? 'All Themes' : theme}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statements Masonry */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            {filteredStatements.map((statement, index) => (
              <motion.div
                key={statement.id}
                layout
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="break-inside-avoid glass-card rounded-2xl p-8 cursor-pointer group glass-glint relative"
                whileHover={{ y: -5 }}
              >
                <Link href={`/statements/${statement.id}`}>
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote size={32} className="text-emerald-500 opacity-60" />
                  </div>

                  {/* Statement Text */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    {statement.text}
                  </blockquote>

                  {/* Author & Theme */}
                  <div className="space-y-2">
                    <p className="text-slate-600 font-medium">— {statement.author}</p>
                    <span className="inline-block glass-button px-3 py-1 rounded-full text-xs tracking-wider text-slate-500">
                      {statement.theme}
                    </span>
                  </div>

                  {/* Video Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="glass-button p-2 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}