import { motion } from "framer-motion";

interface ProductsLoadMoreProps {
  showMore: boolean;
  onToggle: () => void;
  showButton: boolean;
}

export function ProductsLoadMore({
  showMore,
  onToggle,
  showButton,
}: ProductsLoadMoreProps) {
  if (!showButton) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-center mt-12"
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="glass-button px-8 py-4 rounded-full text-slate-700 tracking-wider"
      >
        {showMore ? "SHOW LESS" : "LOAD MORE PIECES"}
      </motion.button>
    </motion.div>
  );
}
