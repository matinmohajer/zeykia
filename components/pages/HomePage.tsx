"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play, ArrowRight, Star, Award, Globe, Users } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "../sections/HeroSection";
import {
  FeaturedCollections,
  Collection,
} from "../sections/FeaturedCollections";
import { BrandStory } from "../sections/BrandStory";
import {
  Achievements as AchievementsSection,
  Achievement,
} from "../sections/Achievements";
import { CallToAction } from "../sections/CallToAction";

const featuredCollections: Collection[] = [
  {
    name: "Heritage Collection",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description: "Timeless designs rooted in centuries of tradition",
    price: "From $18,000",
  },
  {
    name: "Contemporary Masters",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop",
    description: "Modern interpretations of classical artistry",
    price: "From $25,000",
  },
  {
    name: "Exclusive Signatures",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop",
    description: "One-of-a-kind masterpieces for discerning collectors",
    price: "From $45,000",
  },
];

const achievements: Achievement[] = [
  { icon: Award, number: "50+", label: "International Awards" },
  { icon: Globe, number: "25+", label: "Countries Served" },
  { icon: Users, number: "500+", label: "Master Artisans" },
  { icon: Star, number: "10", label: "Years of Excellence" },
];

export function HomePage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="pt-20">
      <HeroSection
        backgroundImage="/videos/export-hero.mp4"
        title={
          <>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl text-white tracking-[0.3em] mb-4">
                ZEYKIA
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </motion.div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/90 mb-6 font-light"
            >
              Where Ancient Artistry Meets Contemporary Luxury
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Each carpet is a masterpiece, hand-woven by master artisans using
              techniques passed down through generations. Discover the
              extraordinary.
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(80, 200, 120, 0.3)",
                }}
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
          </>
        }
      />
      <FeaturedCollections collections={featuredCollections} />
      <BrandStory
        image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
        title="The Zeykia Legacy"
        paragraphs={[
          "Founded in the ancient weaving city of Istanbul, Zeykia represents the pinnacle of carpet artistry. Our master weavers combine centuries-old techniques with contemporary design sensibilities.",
          "Every carpet tells a story—of the hands that crafted it, the traditions that inspired it, and the home it will grace. We don't just create carpets; we weave dreams into reality.",
        ]}
        ctaText="Our Story"
        ctaHref="/about"
      />
      <AchievementsSection achievements={achievements} />
      <CallToAction
        title="Begin Your Journey"
        description="Discover the perfect carpet for your space. Schedule a private consultation with our design experts or explore our exclusive collections."
        actions={
          <>
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
          </>
        }
      />
    </div>
  );
}
