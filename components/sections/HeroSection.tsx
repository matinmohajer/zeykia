import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle?: ReactNode;
  backgroundImage: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="glass-panel p-12 rounded-3xl"
        >
          {title}
          {subtitle && <div className="mt-4">{subtitle}</div>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
