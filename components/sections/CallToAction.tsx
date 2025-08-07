import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CallToActionProps {
  title: string;
  description: string;
  actions: ReactNode;
}

export function CallToAction({
  title,
  description,
  actions,
}: CallToActionProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-3xl"
        >
          <h2 className="text-slate-800 mb-6">{title}</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
