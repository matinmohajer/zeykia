'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Palette, Ruler, Package } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

interface Product {
  id: string;
  name: string;
  conceptImage: string;
  expectedDelivery: string;
  startingPrice: number;
  description: string;
}

export function ExclusiveProductsPage() {
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const exclusiveProducts = [
    {
      id: 'ex1',
      name: 'Aurora Borealis',
      conceptImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=800&fit=crop',
      expectedDelivery: '8-12 months',
      startingPrice: 45000,
      description: 'Inspired by the northern lights, featuring iridescent silk threads that shift color with lighting.'
    },
    {
      id: 'ex2',
      name: 'Desert Mirage',
      conceptImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=800&fit=crop',
      expectedDelivery: '10-14 months',
      startingPrice: 38000,
      description: 'Captures the ethereal beauty of desert landscapes with gradient techniques and metallic accents.'
    },
    {
      id: 'ex3',
      name: 'Ocean Depths',
      conceptImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop',
      expectedDelivery: '12-16 months',
      startingPrice: 52000,
      description: 'Deep blue masterpiece with three-dimensional weaving creating wave-like textures.'
    },
    {
      id: 'ex4',
      name: 'Golden Constellation',
      conceptImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop',
      expectedDelivery: '6-10 months',
      startingPrice: 42000,
      description: 'Celestial-inspired design with 24k gold thread constellation patterns on midnight silk.'
    }
  ];

  const customizationOptions = {
    sizes: [
      { label: '6\' × 9\'', priceMultiplier: 1 },
      { label: '8\' × 10\'', priceMultiplier: 1.3 },
      { label: '9\' × 12\'', priceMultiplier: 1.6 },
      { label: '10\' × 14\'', priceMultiplier: 2 },
      { label: 'Custom Size', priceMultiplier: 'quote' }
    ],
    colors: [
      { name: 'Original', value: '#000000' },
      { name: 'Midnight Blue', value: '#1e3a8a' },
      { name: 'Deep Emerald', value: '#047857' },
      { name: 'Royal Purple', value: '#7c3aed' },
      { name: 'Warm Gold', value: '#d97706' }
    ]
  };

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden mb-6">
        <div className="absolute inset-0 pointer-events-none">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            poster="/images/exclusive-hero.jpg"
          >
            <source src="/videos/exclusive-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 to-slate-800/60" />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
                            // @ts-ignore

          className="relative z-10 glass-panel p-12 rounded-3xl max-w-3xl mx-6 text-center"
        >
          <h1 className="text-white mb-6">Pre-Order Your Bespoke Masterpiece</h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Commission an exclusive piece crafted specifically for your space. Each bespoke carpet is a unique creation, never to be replicated.
          </p>
        </motion.div>
      </section>

      {/* Product Spotlight Grid */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exclusiveProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                                  // @ts-ignore

                className="glass-card rounded-3xl overflow-hidden group"
              >
                {/* Concept Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={product.conceptImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute top-6 left-6">
                    <span className="glass-button px-4 py-2 rounded-full text-xs tracking-wider text-emerald-800 bg-emerald-500/20">
                      CONCEPT DESIGN
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <h3 className="text-slate-800 mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar size={16} className="text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500 tracking-wider">DELIVERY</p>
                        <p className="text-slate-700 text-sm">{product.expectedDelivery}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Package size={16} className="text-slate-500" />
                      <div>
                        <p className="text-xs text-slate-500 tracking-wider">STARTING AT</p>
                        <p className="text-slate-700 text-sm">${product.startingPrice.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                                        // @ts-ignore

                      onClick={() => {
                        setSelectedProduct(product);
                        setShowCustomizer(true);
                      }}
                      className="w-full glass-button py-4 rounded-2xl text-slate-700 tracking-wider border-2 border-emerald-500/30 bg-emerald-500/10"
                    >
                      CUSTOMIZE & PRE-ORDER
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                                        // @ts-ignore

                      className="w-full glass-button py-3 rounded-2xl text-slate-600 tracking-wider text-sm"
                    >
                      REQUEST CONSULTATION
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Sidebar */}
      {showCustomizer && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
                            // @ts-ignore

          className="fixed top-0 right-0 w-full md:w-96 h-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-slate-800">Customize Your Piece</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                                  // @ts-ignore

                onClick={() => setShowCustomizer(false)}
                className="glass-button p-2 rounded-full"
              >
                ✕
              </motion.button>
            </div>

            {selectedProduct && (
              <div className="space-y-8">
                {/* Product Preview */}
                <div className="glass-card rounded-2xl p-4">
                  <ImageWithFallback
                    src={selectedProduct.conceptImage}
                    alt={selectedProduct.name}
                    className="w-full aspect-square object-cover rounded-xl mb-4"
                    fill
                  />
                  <h4 className="text-slate-800">{selectedProduct.name}</h4>
                  <p className="text-slate-600 text-sm">{selectedProduct.description}</p>
                </div>

                {/* Size Options */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Ruler size={16} className="text-slate-500" />
                    <label className="text-slate-700 tracking-wider">SIZE</label>
                  </div>
                  <div className="space-y-2">
                    {customizationOptions.sizes.map((size, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                                          // @ts-ignore

                        className="w-full glass-button p-3 rounded-xl text-left text-slate-600 text-sm"
                      >
                        <div className="flex justify-between">
                          <span>{size.label}</span>
                          <span>
                            {typeof size.priceMultiplier === 'number'
                              ? `$${(selectedProduct.startingPrice * size.priceMultiplier).toLocaleString()}`
                              : 'Quote'}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Palette size={16} className="text-slate-500" />
                    <label className="text-slate-700 tracking-wider">COLOR PALETTE</label>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {customizationOptions.colors.map((color, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                                          // @ts-ignore

                        className="aspect-square rounded-xl border-2 border-white/20 shadow-lg"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Final CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                                    // @ts-ignore

                  className="w-full glass-button py-4 rounded-2xl text-slate-700 tracking-wider border-2 border-emerald-500/30 bg-emerald-500/20"
                >
                  SUBMIT CUSTOM REQUEST
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}