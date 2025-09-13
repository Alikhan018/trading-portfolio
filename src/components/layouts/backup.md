import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../common/Logo';
import { useTheme } from '../../contexts/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

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
      const headerHeight = 80;
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
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        background: isScrolled
          ? theme === 'dark' 
            ? 'rgba(15, 15, 23, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled 
          ? theme === 'dark'
            ? '1px solid rgba(99, 102, 241, 0.3)'
            : '1px solid rgba(0, 0, 0, 0.1)'
          : 'none',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-1/3">
            <Logo />
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="flex items-center gap-8 flex-1 justify-center">
            {NAV_ITEMS.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
                }}
                whileHover={{ 
                  color: theme === 'dark' ? '#ffffff' : '#000000',
                  scale: 1.05
                }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <div className="flex-shrink-0 w-1/3 flex justify-end">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg border transition-all duration-300 hover:scale-105"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              type="button"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo */}
          <Logo className="flex-shrink-0" />

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg border transition-all duration-300"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              type="button"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border transition-all duration-300"
              style={{
                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <Menu 
                className="w-5 h-5" 
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[9999]"
            style={{
              backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.3)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="w-full h-screen flex items-center justify-center absolute right-0 top-0"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(135deg, #1f2937 0%, #000000 50%, #374151 100%)'
                  : 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 50%, #e5e7eb 100%)'
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
                type="button"
              >
                <X 
                  className="w-5 h-5" 
                  style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                />
              </motion.button>

              {/* Menu content */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4">
                <div className="flex flex-col gap-6">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block transition-all duration-300 cursor-pointer no-underline font-normal hover:opacity-100"
                      style={{
                        color: theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                        fontSize: '2.5rem',
                        lineHeight: '1.2',
                        letterSpacing: '-0.02em'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 0.3, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        opacity: 1, 
                        marginLeft: "1rem",
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                      }}
                    >
                      <small 
                        className="mr-2"
                        style={{
                          fontSize: '0.875rem',
                          color: theme === 'dark' ? '#8b5cf6' : '#6366f1'
                        }}
                      >
                        0{index + 1}.
                      </small>
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