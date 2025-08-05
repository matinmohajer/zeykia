'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Palette } from 'lucide-react';
import Link from 'next/link';

interface Color {
  id: string;
  name: string;
  hex: string;
  hue: string;
  story: string;
  inspiration: string;
}

export function ColorLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hueFilter, setHueFilter] = useState('all');

  const colors: Color[] = [
    {
      id: '1',
      name: 'Midnight Oudh',
      hex: '#1a1a2e',
      hue: 'blue',
      story: 'Inspired by the mysterious depths of Arabian nights and the precious oudh incense that perfumes ancient palaces.',
      inspiration: 'Arabian Nights'
    },
    {
      id: '2',
      name: 'Saffron Sunrise',
      hex: '#f4a261',
      hue: 'orange',
      story: 'Captures the golden hour when saffron fields bloom in Kashmir, painting the landscape in precious amber tones.',
      inspiration: 'Kashmir Fields'
    },
    {
      id: '3',
      name: 'Emerald Whisper',
      hex: '#2a9d8f',
      hue: 'green',
      story: 'The secret language of ancient forests, where emeralds hide beneath fallen leaves and morning mist.',
      inspiration: 'Ancient Forests'
    },
    {
      id: '4',
      name: 'Ruby Eclipse',
      hex: '#e76f51',
      hue: 'red',
      story: 'Born from the rare moment when rubies catch the last light of a setting sun, creating fire within stone.',
      inspiration: 'Gemstone Sunset'
    },
    {
      id: '5',
      name: 'Ivory Dream',
      hex: '#f8f9fa',
      hue: 'neutral',
      story: 'Pure as the first snow on mountain peaks, representing new beginnings and infinite possibilities.',
      inspiration: 'Mountain Snow'
    },
    {
      id: '6',
      name: 'Sapphire Depth',
      hex: '#264653',
      hue: 'blue',
      story: 'The profound blue of the deepest ocean trenches, where ancient wisdom sleeps beneath the waves.',
      inspiration: 'Ocean Depths'
    },
    {
      id: '7',
      name: 'Rose Gold Mirage',
      hex: '#e9c46a',
      hue: 'gold',
      story: 'Like desert mirages that shimmer between reality and dream, this color dances with ethereal beauty.',
      inspiration: 'Desert Mirage'
    },
    {
      id: '8',
      name: 'Lavender Mist',
      hex: '#b19cd9',
      hue: 'purple',
      story: 'The gentle hue of twilight in Provence, where lavender fields stretch endlessly toward the horizon.',
      inspiration: 'Provence Twilight'
    },
    {
      id: '9',
      name: 'Copper Flame',
      hex: '#b07219',
      hue: 'orange',
      story: 'Forged in the heat of ancient furnaces, this color embodies the passion of master craftsmen.',
      inspiration: 'Ancient Forge'
    },
    {
      id: '10',
      name: 'Pearl Shadow',
      hex: '#8d99ae',
      hue: 'neutral',
      story: 'The subtle luminescence of pearls in moonlight, mysterious and eternally elegant.',
      inspiration: 'Moonlit Pearls'
    },
    {
      id: '11',
      name: 'Burgundy Velvet',
      hex: '#800020',
      hue: 'red',
      story: 'Rich as royal velvet curtains in opera houses, this color speaks of luxury and timeless elegance.',
      inspiration: 'Opera House'
    },
    {
      id: '12',
      name: 'Forest Sage',
      hex: '#6b705c',
      hue: 'green',
      story: 'The wisdom of ancient oak trees, carrying centuries of stories in their weathered bark.',
      inspiration: 'Ancient Oak'
    }
  ];

  const hueOptions = ['all', 'blue', 'red', 'green', 'orange', 'purple', 'gold', 'neutral'];

  const filteredColors = colors.filter(color => {
    const matchesSearch = color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         color.inspiration.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHue = hueFilter === 'all' || color.hue === hueFilter;
    return matchesSearch && matchesHue;
  });

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
            The Zeykia Color Library
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Each color in our palette tells a story, carries an emotion, and holds a piece of our artistic soul. 
            Discover the narratives woven into every hue.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by color name or inspiration..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass-panel pl-12 pr-6 py-4 rounded-2xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>

            {/* Hue Filters */}
            <div className="flex justify-center space-x-3 flex-wrap gap-y-3">
              {hueOptions.map((hue) => (
                <motion.button
                  key={hue}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setHueFilter(hue)}
                  className={`glass-button px-4 py-2 rounded-full text-sm tracking-wider transition-all duration-300 ${
                    hueFilter === hue 
                      ? 'bg-emerald-500/20 text-emerald-800 border-emerald-500/30' 
                      : 'text-slate-600'
                  }`}
                >
                  {hue === 'all' ? 'All Hues' : hue.charAt(0).toUpperCase() + hue.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredColors.map((color, index) => (
              <motion.div
                key={color.id}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer group glass-glint"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href={`/colors/${color.id}`}>
                  {/* Color Swatch */}
                  <div 
                    className="aspect-square relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Color Info Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="glass-button p-3 rounded-full">
                        <Palette size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Hex Code Badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="glass-button px-2 py-1 rounded text-xs text-white/90 font-mono">
                        {color.hex}
                      </span>
                    </div>
                  </div>

                  {/* Color Details */}
                  <div className="p-4">
                    <h3 className="text-slate-800 text-lg mb-1">{color.name}</h3>
                    <p className="text-slate-500 text-sm mb-3">{color.inspiration}</p>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {color.story}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results Message */}
          {filteredColors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="glass-panel rounded-2xl p-12 max-w-md mx-auto">
                <Palette size={48} className="text-slate-400 mx-auto mb-4" />
                <h3 className="text-slate-600 text-lg mb-2">No colors found</h3>
                <p className="text-slate-500 text-sm">
                  Try adjusting your search terms or filters to discover more colors.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}