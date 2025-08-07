import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ImageWithFallback";

export interface Collection {
  name: string;
  image: string;
  description: string;
  price: string;
}

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-800 mb-6">Curated Collections</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three distinct collections, each representing a different facet of
            our artisanal mastery and creative vision.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl overflow-hidden group cursor-pointer glass-glint"
              whileHover={{ y: -10 }}
            >
              <Link href="/products">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-slate-800 mb-3">{collection.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">
                      {collection.price}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-emerald-600 text-sm"
                    >
                      <span>Explore</span>
                      <ArrowRight size={16} className="ml-2" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
