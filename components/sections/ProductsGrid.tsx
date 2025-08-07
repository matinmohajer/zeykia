import { motion } from "framer-motion";
import Link from "next/link";
import { ImageWithFallback } from "../ImageWithFallback";
import { Eye, Heart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  detailImage: string;
  collection: "public" | "vip";
  material: string;
  size: string;
  limited: boolean;
}

interface ProductsGridProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
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
                  {product.collection === "vip" && (
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
                  <p className="text-slate-500 text-sm mb-3">
                    {product.material} • {product.size}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-slate-800">
                      ${product.price.toLocaleString()}
                    </span>
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
      </div>
    </section>
  );
}
