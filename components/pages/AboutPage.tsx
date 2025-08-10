'use client';

import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../ImageWithFallback';

export function AboutPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [docVideoPlaying, setDocVideoPlaying] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="Artisan weaving carpet"
            className="w-full h-full object-cover opacity-60"
            fill
          />
        </div>
        
        {/* Glass Title Panel */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
                            // @ts-ignore

          className="relative z-10 glass-panel p-12 rounded-3xl max-w-2xl mx-6 text-center"
        >
          <h1 className="text-white mb-6">The Story of Zeykia</h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Where ancient artistry meets contemporary luxury. Each carpet is a masterpiece, 
            woven with threads of tradition and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
                              // @ts-ignore

            onClick={() => setVideoPlaying(!videoPlaying)}
            className="glass-button px-8 py-4 rounded-full text-white flex items-center space-x-3 mx-auto"
          >
            {videoPlaying ? <Pause size={20} /> : <Play size={20} />}
            <span>Watch Our Story</span>
          </motion.button>
        </motion.div>
      </section>

      {/* Documentary Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                              // @ts-ignore

            className="glass-card rounded-3xl p-8 mb-12"
          >
            <h2 className="text-center text-slate-800 mb-8">The Artisan&apos;s Journey</h2>
            
            {/* Video Player */}
            <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=675&fit=crop"
                alt="Documentary still"
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                                    // @ts-ignore

                  onClick={() => setDocVideoPlaying(!docVideoPlaying)}
                  className="glass-button p-6 rounded-full"
                >
                  <Play size={32} className="text-white ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Transcript Panel */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
                                // @ts-ignore

              className="glass-panel rounded-2xl p-6 max-h-64 overflow-y-auto"
            >
              <h4 className="text-slate-800 mb-4">Documentary Transcript</h4>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  &ldquo;In the heart of Istanbul, where the Bosphorus meets ancient tradition, 
                  master weaver Ahmet Zeynep begins each day before dawn...&rdquo;
                </p>
                <p>
                  &ldquo;Each knot is tied with intention. Each thread carries the weight of 
                  generations of knowledge passed down through centuries...&rdquo;
                </p>
                <p>
                  &ldquo;We don&apos;t just create carpets. We weave dreams, memories, and stories 
                  that will outlive us all.&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
                              // @ts-ignore

            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Portrait */}
            <div className="glass-card rounded-3xl p-2 h-fit">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                alt="Founder portrait"
                className="w-full h-[500px] object-cover rounded-2xl"
                fill
              />
            </div>

            {/* Bio Content */}
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-slate-800 mb-6">Master Artisan</h2>
              <blockquote className="text-2xl text-slate-600 italic leading-relaxed mb-8">
                &ldquo;Each carpet is born from a conversation between the past and the future. 
                I am merely the translator.&rdquo;
              </blockquote>
              <div className="space-y-4 text-slate-600">
                <p>
                  Born into a family of master weavers in Hereke, Turkey, our founder 
                  learned the ancient art of carpet making from his grandmother at age seven.
                </p>
                <p>
                  After studying textile arts in London and working with luxury houses 
                  across Europe, he returned to his roots to establish Zeykia in 2015.
                </p>
                <p>
                  Today, Zeykia represents the pinnacle of carpet artistry, where 
                  traditional techniques meet contemporary design vision.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-slate-500 tracking-wider text-[12px]">— Zeynab Ariankia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}