import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import ThreeDModel from '../ThreeDModel';

interface HeroProps {
  showContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent = true }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (showContent) {
      setContentVisible(true);
    }
  }, [showContent]);

  return (
    <section ref={heroRef} className="hero-section">
      {/* Background */}
      <div className="hero-background" />

      {/* Main Content */}
      <motion.div 
        className="hero-content"
        style={{ y: textY, opacity }}
      >
        <div className="hero-container">
          
          {/* Left Side Content */}
          <div className="hero-left">
            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="badge-icon" />
              <span>Trusted by 1M+ users worldwide</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Master the Markets
              <span className="title-highlight"> with Rao Trading Concept</span>
              (RTC)
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pakistan’s Leading Forex Trading Community – Join our Discord to get access to exclusive content
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="btn-icon" />
              </motion.button>

              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="btn-icon" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="stat-item">
                <div className="stat-value">1M+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Model */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* 3D Model - Free floating, no container constraints */}
            <ThreeDModel />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;