import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface BrandStoryProps {
  image: string;
  title: string;
  paragraphs: string[];
  ctaText: string;
  ctaHref: string;
}

export function BrandStory({
  image,
  title,
  paragraphs,
  ctaText,
  ctaHref,
}: BrandStoryProps) {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-2 h-full"
          >
            <Image
              src={image}
              alt="Brand story image"
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
            <h2 className="text-slate-800 mb-6">{title}</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 glass-button px-6 py-3 rounded-full text-slate-700 flex items-center space-x-2"
            >
              <Link href={ctaHref} className="flex items-center space-x-2">
                <span>{ctaText}</span>
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
