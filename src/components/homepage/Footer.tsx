import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MessageCircle, 
  Youtube, 
  Facebook, 
  Instagram,
  TrendingUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const tradingLinks = [
    { name: 'Live Signals', href: '#signals' },
    { name: 'Trading Plans', href: '#plans' },
    { name: 'Market Analysis', href: '#analysis' },
    { name: 'Performance', href: '#performance' }
  ];

  const educationLinks = [
    { name: 'Trading Course', href: '#course' },
    { name: 'Video Tutorials', href: '#tutorials' },
    { name: 'Trading Blog', href: '#blog' },
    { name: 'Support Center', href: '#support' }
  ];

  const companyLinks = [
    { name: 'About RTC', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const socialLinks = [
    { name: 'Discord', href: '#', icon: MessageCircle },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook } 
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ padding: '2rem' }}>
      {/* Footer Container with rounded design */}
      <div className="relative bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0 z-[1]"
          style={{ y: backgroundY }}
        >
          {/* Trading-themed background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </motion.div>

        <div className="relative z-[2] w-full" style={{ padding: '3rem 2.5rem 2rem 2.5rem' }}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2" style={{ marginBottom: '1rem' }}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">RTC</span>
                <span className="text-xs text-gray-400">Rao Trading Concept</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 leading-relaxed max-w-md" style={{ marginBottom: '1.5rem' }}>
              Pakistan's premier forex trading community. Join thousands of successful traders mastering the markets with professional signals, expert mentorship, and proven ICT strategies.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Trading Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            <h4 className="text-sm font-semibold text-white" style={{ marginBottom: '1rem' }}>
              Trading Services
            </h4>
            <div className="space-y-3">
              {tradingLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Education & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            <h4 className="text-sm font-semibold text-white" style={{ marginBottom: '1rem' }}>
              Education & Resources
            </h4>
            <div className="space-y-3">
              {educationLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ marginBottom: '2rem' }}
          >
            <h4 className="text-sm font-semibold text-white" style={{ marginBottom: '1rem' }}>
              Company
            </h4>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center w-full"
          style={{ marginTop: '3rem', paddingTop: '2rem', marginLeft: '0', marginRight: '0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="flex flex-col gap-1 w-full md:w-auto" style={{ marginBottom: '1rem' }}>
            <div className="text-sm text-gray-400">
              © 2025 Rao Trading Concept. All rights reserved.
            </div>
            <div className="text-xs text-gray-500">
              Empowering Pakistani traders with professional forex education
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-start md:justify-end">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 underline">
              Risk Disclosure
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 underline">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 underline">
              Privacy Policy
            </a>
          </div>
        </motion.div>

        {/* Live Trading Status */}
        <motion.div
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20 w-full max-w-md mx-auto"
          style={{ marginTop: '2rem', padding: '1rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span className="text-sm font-medium text-green-400">
            LIVE TRADING SIGNALS ACTIVE
          </span>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
