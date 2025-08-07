import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface Achievement {
  icon: LucideIcon;
  number: string;
  label: string;
}

interface AchievementsProps {
  achievements: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-slate-800 mb-16"
        >
          Recognized Excellence
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="glass-button p-4 rounded-full w-fit mx-auto mb-4">
                <achievement.icon size={24} className="text-emerald-600" />
              </div>
              <div className="text-3xl text-slate-800 mb-2">
                {achievement.number}
              </div>
              <div className="text-slate-600 text-sm">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
