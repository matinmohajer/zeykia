import { motion } from "framer-motion";

interface FilterOption {
  id: string;
  label: string;
}

interface ProductsFilterBarProps {
  filterOptions: FilterOption[];
  currentFilter: string;
  onFilterChange: (id: string) => void;
}

export function ProductsFilterBar({
  filterOptions,
  currentFilter,
  onFilterChange,
}: ProductsFilterBarProps) {
  return (
    <section className="px-6 mb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center space-x-4"
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onFilterChange(option.id)}
              className={`glass-button px-8 py-3 rounded-full text-sm tracking-wider transition-all duration-300 ${
                currentFilter === option.id
                  ? "bg-emerald-500/20 text-emerald-800"
                  : "text-slate-600"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
