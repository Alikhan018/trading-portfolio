import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { User, Target, Brain, Shield, Sparkles, Globe, Star, Award } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: Brain,
      title: 'ICT Methodology',
      description: 'Institutional Trading Concepts',
      color: 'primary',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      icon: Sparkles,
      title: 'Smart Money Concepts',
      description: 'Think Like Institutions',
      color: 'secondary',
      gradient: 'linear-gradient(135deg, #10b981, #06d6a0)'
    },
    {
      icon: Globe,
      title: 'Volume Spread Analysis',
      description: 'Professional Market Analysis',
      color: 'accent',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: '80%+ Win Rate on Signals',
      color: 'highlight',
      gradient: 'linear-gradient(135deg, #ec4899, #be185d)'
    }
  ];

  const stats = [
    { icon: Target, value: '80%+', label: 'Win Rate' },
    { icon: User, value: '10K+', label: 'Members' },
    { icon: Award, value: '6+', label: 'Years Exp.' },
    { icon: Shield, value: '24/7', label: 'Support' }
  ];

  return (
    <section ref={aboutRef} className="about-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="about-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="about-floating-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`about-shape about-shape-${i}`}
              animate={{
                y: [0, -30, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="about-grid-pattern">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="about-container-3d">
        {/* Section Header */}
        <motion.div
          className="about-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Sparkles className="badge-3d-icon" />
            <span className="badge-3d-text">ABOUT US</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="about-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="about-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              About
            </motion.span>
            <motion.span
              className="about-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Rao Umer
            </motion.span>
          </motion.h2>

          <motion.p
            className="about-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned Forex trader with 6+ years of market experience. 
            He developed RTC by combining ICT, Smart Money Concepts (SMC), and Volume Spread Analysis (VSA) into one complete 
            trading methodology. RTC trains traders to think like institutions, not retail gamblers.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="about-main-content-3d">
          {/* Features Grid */}
          <motion.div
            className="about-features-3d"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="features-3d-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-3d"
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    y: -10
                  }}
                  style={{
                    transform: `perspective(1000px) rotateX(${cardRotateX}deg)`,
                  }}
                >
                  <div className="feature-card-3d-glow" />
                  <div 
                    className="feature-icon-3d"
                    style={{ background: feature.gradient }}
                  >
                    <feature.icon className="feature-icon-3d-svg" />
                  </div>
                  <div className="feature-content-3d">
                    <h3 className="feature-title-3d">{feature.title}</h3>
                    <p className="feature-description-3d">{feature.description}</p>
                  </div>
                  <div className="feature-card-3d-border" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Stats Section */}
          <motion.div
            className="about-stats-3d"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ y: floatingY }}
          >
            <motion.div
              className="stats-container-3d"
              whileHover={{ rotateY: 5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="stats-3d-background" />
              
              {/* Stats Grid */}
              <div className="stats-grid-3d">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-item-3d"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1,
                      type: 'spring',
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 10,
                      z: 30
                    }}
                  >
                    <div className="stat-icon-3d-container">
                      <stat.icon className="stat-icon-3d" />
                    </div>
                    <div className="stat-value-3d">{stat.value}</div>
                    <div className="stat-label-3d">{stat.label}</div>
                    <div className="stat-item-3d-glow" />
                  </motion.div>
                ))}
              </div>

              {/* 3D Decorative Elements */}
              <motion.div
                className="stats-decoration-1"
                animate={{ 
                  rotateZ: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className="decoration-ring" />
              </motion.div>
              
              <motion.div
                className="stats-decoration-2"
                animate={{ 
                  rotateY: [0, 360],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Globe className="decoration-globe" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Call to Action */}
        <motion.div
          className="about-cta-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="about-cta-content-3d">
            <h3 className="about-cta-title-3d">Ready to Start?</h3>
            <p className="about-cta-text-3d">
              Join thousands of users building the future of finance
            </p>
            <motion.button
              className="about-cta-button-3d"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cta-btn-text">Get Started</span>
              <motion.div
                className="cta-btn-icon"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
              <div className="cta-btn-3d-glow" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;