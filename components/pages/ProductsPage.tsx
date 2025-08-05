'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ImageWithFallback } from '../ImageWithFallback';
import { Eye, Heart } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  detailImage: string;
  collection: 'public' | 'vip';
  material: string;
  size: string;
  limited: boolean;
}

export function ProductsPage() {
  const [filter, setFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      name: 'Midnight Odyssey',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
      collection: 'public',
      material: 'Silk & Wool',
      size: '8\' × 10\'',
      limited: true
    },
    {
      id: '2',
      name: 'Sapphire Reverie',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=800&fit=crop',
      collection: 'vip',
      material: 'Pure Silk',
      size: '10\' × 14\'',
      limited: true
    },
    {
      id: '3',
      name: 'Emerald Whisper',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&h=800&fit=crop',
      collection: 'public',
      material: 'Wool & Cotton',
      size: '6\' × 9\'',
      limited: false
    },
    {
      id: '4',
      name: 'Ruby Eclipse',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
      collection: 'vip',
      material: 'Silk & Gold Thread',
      size: '12\' × 16\'',
      limited: true
    },
    {
      id: '5',
      name: 'Ivory Dreams',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
      collection: 'public',
      material: 'Wool',
      size: '8\' × 12\'',
      limited: false
    },
    {
      id: '6',
      name: 'Platinum Symphony',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&h=600&fit=crop',
      detailImage: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1200&h=800&fit=crop',
      collection: 'vip',
      material: 'Silk & Platinum Thread',
      size: '14\' × 20\'',
      limited: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    return product.collection === filter;
  });

  const displayedProducts = showMore ? filteredProducts : filteredProducts.slice(0, 6);

  const filterOptions = [
    { id: 'all', label: 'All Collections' },
    { id: 'public', label: 'Public Collection' },
    { id: 'vip', label: 'VIP Collection' }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-slate-800 mb-6"
          >
            Artisanal Collection
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Each piece in our collection represents months of meticulous craftsmanship, 
            combining traditional techniques with contemporary artistic vision.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            {filterOptions.map((option) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(option.id)}
                className={`glass-button px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                  filter === option.id 
                    ? 'bg-emerald-500/20 text-emerald-800' 
                    : 'text-slate-600'
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer glass-glint relative"
              >
                <Link href={`/products/${product.id}`}>
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      fill
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="glass-button p-3 rounded-full"
                        >
                          <Eye size={20} className="text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="glass-button p-3 rounded-full"
                        >
                          <Heart size={20} className="text-white" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Collection Badge */}
                    {product.collection === 'vip' && (
                      <div className="absolute top-4 right-4">
                        <span className="glass-button px-3 py-1 rounded-full text-xs tracking-wider text-emerald-800 bg-emerald-500/20">
                          VIP
                        </span>
                      </div>
                    )}

                    {/* Limited Badge */}
                    {product.limited && (
                      <div className="absolute top-4 left-4">
                        <span className="glass-button px-3 py-1 rounded-full text-xs tracking-wider text-ruby-800 bg-red-500/20">
                          LIMITED
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-slate-800 mb-2">{product.name}</h3>
                    <p className="text-slate-500 text-sm mb-3">{product.material} • {product.size}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-slate-800">${product.price.toLocaleString()}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button px-4 py-2 rounded-full text-xs tracking-wider"
                      >
                        VIEW DETAILS
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {filteredProducts.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMore(!showMore)}
                className="glass-button px-8 py-4 rounded-full text-slate-700 tracking-wider"
              >
                {showMore ? 'SHOW LESS' : 'LOAD MORE PIECES'}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}