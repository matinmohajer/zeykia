'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Quote } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';
import Link from 'next/link';

interface Statement {
  id: string;
  theme: string;
  text: string;
  author: string;
  videoThumbnail: string;
}

interface SingleStatementPageProps {
  statementId: string;
}

export function SingleStatementPage({ statementId }: SingleStatementPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Mock statement data - in a real app, this would come from an API
  const statement: Statement = {
    id: statementId,
    theme: 'Craftsmanship',
    text: 'Every knot we tie is a prayer, every thread a story passed down through generations. In our hands, wool becomes poetry.',
    author: 'Master Weaver Ahmet',
    videoThumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
  };

  const fullTranscript = [
    {
      time: '00:00',
      speaker: statement.author,
      text: statement.text
    },
    {
      time: '00:15',
      speaker: statement.author,
      text: 'When I first learned to weave, I was just seven years old. My grandmother would sit beside me, her weathered hands guiding mine as we worked the loom together.'
    },
    {
      time: '00:35',
      speaker: statement.author,
      text: 'She taught me that each thread has a purpose, a destiny. We are not just making carpets; we are weaving stories that will outlive us all.'
    },
    {
      time: '00:55',
      speaker: statement.author,
      text: 'The rhythm of the loom becomes a meditation. In that space between breaths, between the pull of each thread, magic happens.'
    },
    {
      time: '01:20',
      speaker: statement.author,
      text: 'This is what I want people to understand about Zeykia. We are not just preserving tradition—we are honoring the future by keeping the past alive.'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Back Button */}
      <div className="px-6 mb-8">
        <Link href="/statements">
          <motion.button
            whileHover={{ x: -5 }}
            className="glass-button px-6 py-3 rounded-full flex items-center space-x-3 text-slate-700"
          >
            <ArrowLeft size={20} />
            <span>Back to Statements</span>
          </motion.button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Video Player Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl overflow-hidden mb-12"
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-slate-900">
            <ImageWithFallback
              src={statement.videoThumbnail}
              alt={`${statement.author} statement`}
              className="w-full h-full object-cover"
              fill
            />
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="glass-panel p-6 rounded-full mr-4"
              >
                {isPlaying ? (
                  <Pause size={32} className="text-white ml-1" />
                ) : (
                  <Play size={32} className="text-white ml-1" />
                )}
              </motion.button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMuted(!isMuted)}
                className="glass-button p-3 rounded-full"
              >
                {isMuted ? (
                  <VolumeX size={20} className="text-white" />
                ) : (
                  <Volume2 size={20} className="text-white" />
                )}
              </motion.button>
            </div>

            {/* Video Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: isPlaying ? '100%' : '0%' }}
                transition={{ duration: 90, ease: 'linear' }}
                className="h-full bg-emerald-500"
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-slate-800 mb-2">Statement on {statement.theme}</h2>
                <p className="text-slate-500">by {statement.author}</p>
              </div>
              <span className="glass-button px-4 py-2 rounded-full text-xs tracking-wider text-emerald-800 bg-emerald-500/20">
                {statement.theme}
              </span>
            </div>

            {/* Featured Quote */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel rounded-2xl p-8 relative"
            >
              <Quote size={32} className="text-emerald-500 opacity-60 mb-4" />
              <blockquote className="text-2xl text-slate-700 leading-relaxed italic">
                {statement.text}
              </blockquote>
              <p className="text-slate-500 mt-6">— {statement.author}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Full Transcript */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-3xl p-8"
        >
          <h3 className="text-slate-800 mb-8">Full Transcript</h3>
          
          <div className="space-y-6">
            {fullTranscript.map((segment, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex space-x-6 pb-6 border-b border-white/10 last:border-0"
              >
                <div className="glass-button px-3 py-1 rounded-full text-xs text-slate-500 tracking-wider h-fit">
                  {segment.time}
                </div>
                <div className="flex-1">
                  <p className="text-slate-600 text-sm mb-1 font-medium">{segment.speaker}</p>
                  <p className="text-slate-700 leading-relaxed">{segment.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="inline-flex items-center space-x-4 text-slate-400"
            >
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
              <Quote size={16} className="opacity-60" />
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}