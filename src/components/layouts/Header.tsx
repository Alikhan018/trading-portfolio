import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Markets', href: '#markets' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Services', href: '#services' }
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      const headerHeight = 80; // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
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
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden left-[25%] w-full gap-160 relative lg:flex lg:items-center lg:justify-between ">
          <Logo className="mr-8" />
          <nav className="flex items-center gap-8 ml-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className='w-full flex items-center justify-between gap-4'
        style={{paddingLeft: isScrolled ? '0' : '2rem', paddingRight: isScrolled ? '0' : '2rem'}}
        >
          {/* Logo */}
          <Logo className="lg:hidden" />

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden focus:outline-none z-20 p-2 rounded-lg border border-white/20 bg-white/5"
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <Menu className="w-6 h-6 text-white" />
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