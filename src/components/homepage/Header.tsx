import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Palette, Globe, BookOpen, MessageCircle, Star } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', icon: Code },
  { label: 'About', href: '#about', icon: Palette },
  { label: 'Services', href: '#services', icon: Globe },
  { label: 'Community', href: '#community', icon: BookOpen },
  { label: 'Contact', href: '#contact', icon: MessageCircle }
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
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

  const getNavIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'home': return <Code className="w-4 h-4" />;
      case 'about': return <Globe className="w-4 h-4" />;
      case 'services': return <Palette className="w-4 h-4" />;
      case 'community': return <Star className="w-4 h-4" />;
      case 'contact': return <MessageCircle className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <motion.header
      className="header-3d"
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
      <div className="header-container-3d">
        {/* Logo */}
        <motion.div
          className="logo-section-3d"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <div className="logo-icon-container-3d">
            <div className="logo-icon-3d">
              <Code className="logo-icon-svg-3d" />
            </div>
            <motion.div
              className="logo-glow-3d"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
          <div className="logo-text-3d">
            <h1 className="logo-title-3d">
              RTC
            </h1>
            <p className="logo-subtitle-3d">
              TRADING FIRE
            </p>
          </div>
        </motion.div>

        {/* Desktop Navigation - Hidden, we'll use menu for all devices */}
        <nav className="hidden">
          {/* Navigation items will be in the full-screen menu */}
        </nav>

        {/* Right Side Controls */}
        <div className="header-right-3d">
          {/* Live Trading Status */}
          <div className="live-status-3d">
            <div className="live-dot-3d"></div>
            <span className="live-text-3d">LIVE</span>
          </div>

          {/* Menu Toggle - Show on all devices */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle-3d"
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotateY: 5 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
            <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
                >
                  <X className="menu-icon" />
                </motion.div>
              ) : (
            <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
                >
                  <Menu className="menu-icon" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fullscreen-menu-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Menu Header */}
            <div className="menu-header-3d">
              <div className="menu-logo-section-3d">
                <div className="menu-logo-icon-3d">
                  <Code className="logo-icon-svg-3d" />
                </div>
                <div className="menu-logo-text-3d">
                  <h1 className="menu-logo-title-3d">RTC</h1>
                  <p className="menu-logo-subtitle-3d">TRADING FIRE</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="menu-close-btn-3d"
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotateY: 5 }}
                aria-label="Close menu"
                type="button"
              >
                <X className="menu-icon-3d" />
              </motion.button>
            </div>

            {/* Menu Content */}
            <div className="menu-content-3d">
              {/* Navigation Items */}
              <nav className="menu-nav-3d">
                {NAV_ITEMS.map((item: { label: string; href: string; icon: any }, index: number) => {

                  return (
                    <motion.div
                      key={item.label}
                      className="menu-item-3d"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(item.href)}
                        className="menu-link-3d"
                        whileHover={{ x: 20, rotateY: 5 }}
                        aria-label={`Navigate to ${item.label} section`}
                        type="button"
                      >
                        <div className="menu-link-content-3d">
                          <div className="menu-link-left-3d">
                            <div className="menu-link-icon-3d">
                              {getNavIcon(item.label)}
                            </div>
                            <div className="menu-link-text-3d">
                              <h2 className="menu-link-title-3d">
                                {item.label.toUpperCase()}
                              </h2>
                            </div>
                          </div>
                          <div className="menu-link-number-3d">
                            <span className="menu-number-3d">0{index + 1}</span>
                          </div>
                        </div>
                      </motion.button>
                      
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom Section */}
              <motion.div
                className="menu-bottom-3d"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="menu-bottom-content-3d">
                  <div className="menu-cta-section-3d">
                    <p className="menu-cta-label-3d">READY TO IGNITE?</p>
                    <a
                      href="#contact"
                      className="menu-cta-btn-3d"
                    >
                      <MessageCircle className="cta-icon-3d" />
                      <span>Join Discord</span>
                      <Code className="cta-icon-3d" />
                    </a>
                  </div>
                  <div className="menu-info-3d">
                    <p className="menu-location-3d">PAKISTAN</p>
                    <p className="menu-status-3d">LIVE TRADING SIGNALS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;