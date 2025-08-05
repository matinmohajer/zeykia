'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'products', label: 'Collection', href: '/products' },
    { id: 'exclusive', label: 'Exclusive', href: '/exclusive' },
    { id: 'export', label: 'Export', href: '/export' },
    { id: 'statements', label: 'Statements', href: '/statements' },
    { id: 'colors', label: 'Colors', href: '/colors' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Link href="/">
              <h1 className="text-2xl tracking-[0.3em] text-slate-800">ZEYKIA</h1>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mt-1"></div>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm tracking-wider transition-all duration-300 ${
                    pathname === item.href 
                      ? 'text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 to-sapphire-500"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* VIP Access Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(80, 200, 120, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-6 py-2 rounded-full text-sm tracking-wider text-slate-700 font-medium"
          >
            <Link href="/exclusive">VIP ACCESS</Link>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}