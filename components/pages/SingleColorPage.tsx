'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Download, Copy, Palette, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface Color {
  id: string;
  name: string;
  hex: string;
  hue: string;
  story: string;
  inspiration: string;
}

interface SingleColorPageProps {
  colorId: string;
}

export function SingleColorPage({ colorId }: SingleColorPageProps) {
  const [copied, setCopied] = useState(false);

  // Mock color data - in a real app, this would come from an API
  const color: Color = {
    id: colorId,
    name: 'Midnight Oudh',
    hex: '#1a1a2e',
    hue: 'blue',
    story: 'Inspired by the mysterious depths of Arabian nights and the precious oudh incense that perfumes ancient palaces.',
    inspiration: 'Arabian Nights'
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard');
    }
  };

  const colorVariations = [
    { name: 'Original', hex: color.hex, brightness: 100 },
    { name: 'Light', hex: lightenColor(color.hex, 20), brightness: 120 },
    { name: 'Lighter', hex: lightenColor(color.hex, 40), brightness: 140 },
    { name: 'Dark', hex: darkenColor(color.hex, 20), brightness: 80 },
    { name: 'Darker', hex: darkenColor(color.hex, 40), brightness: 60 }
  ];

  function lightenColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255))
      .toString(16).slice(1);
  }

  function darkenColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return '#' + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
      (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
      (B > 255 ? 255 : B < 0 ? 0 : B))
      .toString(16).slice(1);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: color.hex }}>
      {/* Back Button */}
      <div className="pt-20 px-6 pb-8">
        <Link href="/colors">
          <motion.button
            whileHover={{ x: -5 }}
            className="glass-button px-6 py-3 rounded-full flex items-center space-x-3 text-white/90 border-white/20"
          >
            <ArrowLeft size={20} />
            <span>Back to Color Library</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Color Section */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl p-12 max-w-2xl text-center backdrop-blur-xl"
        >
          {/* Color Swatch */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white/30 shadow-2xl"
            style={{ backgroundColor: color.hex }}
          />

          {/* Color Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white mb-4"
          >
            {color.name}
          </motion.h1>

          {/* Inspiration */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-xl mb-8 flex items-center justify-center space-x-2"
          >
            <Lightbulb size={20} className="text-yellow-300" />
            <span>Inspired by {color.inspiration}</span>
          </motion.p>

          {/* Color Story */}
          <motion.blockquote
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/90 text-lg leading-relaxed italic mb-8"
          >
            &ldquo;{color.story}&rdquo;
          </motion.blockquote>

          {/* Color Code */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className="text-white/80 font-mono text-xl">{color.hex}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => copyToClipboard(color.hex)}
              className="glass-button p-3 rounded-full border-white/20"
            >
              <Copy size={20} className={copied ? 'text-green-300' : 'text-white/90'} />
            </motion.button>
          </motion.div>

          {/* Download Button */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-8 py-4 rounded-full text-white/90 border-white/20 flex items-center space-x-3 mx-auto"
          >
            <Download size={20} />
            <span>Download Color Asset</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Color Variations Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white mb-12"
          >
            Color Variations
          </motion.h2>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {colorVariations.map((variation, index) => (
                <motion.div
                  key={variation.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => copyToClipboard(variation.hex)}
                >
                  <div
                    className="aspect-square rounded-2xl mb-4 border-2 border-white/20 shadow-lg group-hover:border-white/40 transition-all duration-300"
                    style={{ backgroundColor: variation.hex }}
                  />
                  <h4 className="text-white/90 mb-2">{variation.name}</h4>
                  <p className="text-white/60 text-sm font-mono">{variation.hex}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                    <Copy size={16} className="text-white/60 mx-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="text-white mb-8 text-center">Technical Specifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="glass-button p-4 rounded-full w-fit mx-auto mb-4">
                  <Palette size={24} className="text-white/80" />
                </div>
                <h4 className="text-white/90 mb-2">Hex Code</h4>
                <p className="text-white/70 font-mono">{color.hex}</p>
              </div>
              
              <div className="text-center">
                <div className="glass-button p-4 rounded-full w-fit mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400"></div>
                </div>
                <h4 className="text-white/90 mb-2">Color Family</h4>
                <p className="text-white/70 capitalize">{color.hue}</p>
              </div>
              
              <div className="text-center">
                <div className="glass-button p-4 rounded-full w-fit mx-auto mb-4">
                  <Download size={24} className="text-white/80" />
                </div>
                <h4 className="text-white/90 mb-2">Available Formats</h4>
                <p className="text-white/70">Pantone, CMYK, RGB</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}