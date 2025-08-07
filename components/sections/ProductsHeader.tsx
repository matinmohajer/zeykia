import { motion } from "framer-motion";

interface ProductsHeaderProps {
  title: string;
  subtitle: string;
}

export function ProductsHeader({ title, subtitle }: ProductsHeaderProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
