'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Heart, Share2, ZoomIn } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
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

interface SingleProductPageProps {
  productId: string;
}

export function SingleProductPage({ productId }: SingleProductPageProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showZoom, setShowZoom] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const product: Product = {
    id: productId,
    name: 'Midnight Odyssey',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
    collection: 'public',
    material: 'Silk & Wool',
    size: '8\' × 10\'',
    limited: true
  };

  const images = [
    product.image,
    product.detailImage,
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
  ];

  const macroDetails = [
    {
      title: 'Weaving Detail',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop',
      description: 'Hand-knotted with 400 knots per square inch'
    },
    {
      title: 'Texture Close-up',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop',
      description: 'Luxurious silk pile with cotton foundation'
    },
    {
      title: 'Color Variation',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      description: 'Natural dyes create subtle color variations'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Back Button */}
      <div className="px-6 mb-8">
        <Link href="/products">
          <motion.button
            whileHover={{ x: -5 }}
            className="glass-button px-6 py-3 rounded-full flex items-center space-x-3 text-slate-700"
          >
            <ArrowLeft size={20} />
            <span>Back to Collection</span>
          </motion.button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-4 relative group"
            >
              <ImageWithFallback
                src={images[currentImage]}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-2xl"
                fill
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowZoom(true)}
                className="absolute top-8 right-8 glass-button p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn size={20} className="text-slate-700" />
              </motion.button>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentImage(index)}
                  className={`glass-card rounded-xl p-2 ${
                    currentImage === index ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full aspect-square object-cover rounded-lg"
                    fill
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-slate-800 mb-2">{product.name}</h1>
                  <p className="text-slate-500">{product.material}</p>
                </div>
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-button p-3 rounded-full"
                  >
                    <Heart size={20} className="text-slate-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-button p-3 rounded-full"
                  >
                    <Share2 size={20} className="text-slate-600" />
                  </motion.button>
                </div>
              </div>

              <div className="text-4xl text-slate-800 mb-8">
                ${product.price.toLocaleString()}
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="text-slate-500 text-sm tracking-wider">SIZE</label>
                  <p className="text-slate-800">{product.size}</p>
                </div>
                <div>
                  <label className="text-slate-500 text-sm tracking-wider">COLLECTION</label>
                  <p className="text-slate-800 capitalize">{product.collection}</p>
                </div>
                <div>
                  <label className="text-slate-500 text-sm tracking-wider">MATERIAL</label>
                  <p className="text-slate-800">{product.material}</p>
                </div>
                <div>
                  <label className="text-slate-500 text-sm tracking-wider">AVAILABILITY</label>
                  <p className="text-slate-800">{product.limited ? 'Limited Edition' : 'Available'}</p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(80, 200, 120, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-button py-4 rounded-2xl text-slate-700 tracking-wider border-2 border-emerald-500/30"
                >
                  ENQUIRE NOW
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full glass-button py-4 rounded-2xl text-slate-600 tracking-wider"
                >
                  SCHEDULE VIEWING
                </motion.button>
              </div>

              {product.limited && (
                <div className="mt-6 p-4 glass-panel rounded-xl">
                  <p className="text-sm text-slate-600 text-center italic">
                    This is a limited edition piece. Only 3 remaining worldwide.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Macro Detail Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-center text-slate-800 mb-12">Craftsmanship Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {macroDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={detail.image}
                    alt={detail.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-slate-800 mb-2">{detail.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}