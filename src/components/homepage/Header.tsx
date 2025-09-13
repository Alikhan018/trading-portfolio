import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[1000] bg-black/95 backdrop-blur-[20px] border-b border-white/10 p-4 transition-all duration-300"
      style={{
        background: isScrolled
          ? 'rgba(15, 15, 23, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(99, 102, 241, 0.3)' : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.5s ease'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto relative left-1/2 transform -translate-x-1/2"
      style={{ padding: isScrolled ? '0 1rem' : '0 2rem' }}
      >
        {/* Logo - Centered */}
        <div
          className="flex items-center gap-4 cursor-pointer"
        >
          <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent m-0">
            RTC
          </div>
        </div>

        {/* Desktop Navigation - Hidden, we'll use menu for all devices */}
        <nav className="hidden">
          {/* Navigation items will be in the full-screen menu */}
        </nav>

        {/* Right Side Controls */}
        <div className="absolute right-8 flex items-center gap-8">
          {/* Live Trading Status */}
          <div className="flex items-center gap-2 px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-[10px]"
          style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-emerald-500 tracking-wider">LIVE</span>
          </div>

          {/* Menu Toggle - Show on all devices */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </motion.button>
        </div>
      </div>

      {/* Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[9999]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="w-full h-screen flex items-center justify-center absolute right-0 top-0 bg-gradient-to-br from-gray-800 via-black to-gray-700"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-transparent border-none rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/10"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
                type="button"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.button>

              {/* Menu content responsive */}
              <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 xl:left-48 top-1/2 transform -translate-y-1/2 px-4">
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-7xl md:text-6xl">
                  {NAV_ITEMS.map((item: { label: string; href: string }, index: number) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="lowercase transition-all duration-300 opacity-30 block tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white cursor-pointer no-underline font-normal hover:opacity-100 hover:ml-2 sm:hover:ml-3 md:hover:ml-5"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0.3, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ opacity: 1, marginLeft: "0.75rem" }}
                    >
                      <small className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-normal text-purple-500 mr-1 sm:mr-2">0{index + 1}.</small>
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;