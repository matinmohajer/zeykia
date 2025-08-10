'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Collection', href: '/products' },
    { label: 'Exclusive', href: '/exclusive' },
    { label: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@zeykia.com', href: 'mailto:info@zeykia.com' },
    { icon: MapPin, text: 'Istanbul, Turkey', href: '#' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
          // @ts-ignore

      className="glass-panel mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl tracking-[0.3em] text-slate-800 mb-4">ZEYKIA</h3>
              <div className="h-px bg-gradient-to-r from-emerald-500 to-sapphire-500 w-20 mb-6"></div>
              <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
                Where ancient artistry meets contemporary luxury. Each carpet is a masterpiece, 
                hand-woven by master artisans using techniques passed down through generations.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                                      // @ts-ignore

                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-button p-3 rounded-full text-slate-600 hover:text-emerald-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg text-slate-800 mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg text-slate-800 mb-4 font-medium">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.text}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <contact.icon size={16} />
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
                            // @ts-ignore

          className="border-t border-slate-200/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © {currentYear} Zeykia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-emerald-600 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}