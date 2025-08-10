'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fa'>('en');

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('zeykia-lang')) as 'en' | 'fa' | null;
    const lang = saved || 'en';
    setLanguage(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    }
  }, []);

  const toggleLanguage = () => {
    const next = language === 'en' ? 'fa' : 'en';
    setLanguage(next);
    if (typeof window !== 'undefined') localStorage.setItem('zeykia-lang', next);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
      document.documentElement.dir = next === 'fa' ? 'rtl' : 'ltr';
    }
  };

  const navItems = [
    { id: 'home', label: language === 'fa' ? 'خانه' : 'Home', href: '/' },
    { id: 'about', label: language === 'fa' ? 'درباره' : 'About', href: '/about' },
    { id: 'products', label: language === 'fa' ? 'کلکسیون' : 'Collection', href: '/products' },
    { id: 'exclusive', label: language === 'fa' ? 'اختصاصی' : 'Exclusive', href: '/exclusive' },
    { id: 'export', label: language === 'fa' ? 'صادرات' : 'Export', href: '/export' },
    { id: 'statements', label: language === 'fa' ? 'بیانیه ها' : 'Statements', href: '/statements' },
    { id: 'colors', label: language === 'fa' ? 'رنگ ها' : 'Colors', href: '/colors' },
  ];

  const mobileVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
    open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/40"
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Link href="/">
              <h1 className="text-xl sm:text-2xl tracking-[0.3em] text-slate-800">ZEYKIA</h1>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mt-1"></div>
            </Link>
          </motion.div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-sm tracking-wider transition-all duration-300 ${
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
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Language Switch */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="glass-button px-3 py-2 rounded-full text-xs tracking-wider text-slate-700"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'EN' : 'FA'}
            </button>

            {/* VIP Access Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(80, 200, 120, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-button px-4 py-2 rounded-full text-sm tracking-wider text-slate-700 font-medium"
            >
              <Link href="/exclusive">{language === 'fa' ? 'دسترسی VIP' : 'VIP ACCESS'}</Link>
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="glass-button px-3 py-2 rounded-full text-xs tracking-wider text-slate-700"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'EN' : 'FA'}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="glass-button p-2 rounded-lg text-slate-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileVariants}
              className="lg:hidden overflow-hidden bg-black/70  rounded-2xl"
            >
              <div className="mt-3 glass-panel rounded-2xl p-3 divide-y divide-slate-200/60">
                <div className="grid">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-3 py-3 text-sm tracking-wider ${
                        pathname === item.href ? 'text-white-900' : 'etxt-white-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}