import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  DollarSign,
  Target,
  Zap,
  BookOpen,
  Headphones,
  Globe,
  CheckCircle
} from 'lucide-react';
import './WhyChooseRTC.css';

const WhyChooseRTC: React.FC = () => {
  const { theme } = useTheme();
  const whyChooseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "80%+ verified win rate with consistent profits across all market conditions",
      stats: "80% Win Rate",
      color: "#10b981"
    },
    {
      icon: TrendingUp,
      title: "Professional Signals",
      description: "High-quality forex signals with precise entry, stop-loss, and take-profit levels",
      stats: "500+ Signals/Month",
      color: "#6366f1"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Join 10,000+ active traders sharing insights and supporting each other",
      stats: "10,000+ Members",
      color: "#8b5cf6"
    },
    {
      icon: Award,
      title: "ICT Mentorship",
      description: "Learn from certified Inner Circle Trader methodologies and smart money concepts",
      stats: "Certified Mentors",
      color: "#f59e0b"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance and market analysis to help you succeed",
      stats: "24/7 Available",
      color: "#ef4444"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, clear pricing in PKR with flexible payment options",
      stats: "PKR Pricing",
      color: "#06d6a0"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Precision Trading",
      description: "Our signals are based on institutional trading strategies and market structure analysis"
    },
    {
      icon: Zap,
      title: "Real-time Alerts",
      description: "Get instant notifications on your phone for every trading opportunity"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Access comprehensive trading courses, webinars, and educational materials"
    },
    {
      icon: Headphones,
      title: "Personal Mentorship",
      description: "One-on-one guidance from experienced traders to accelerate your learning"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Trade major forex pairs with institutional-grade analysis and insights"
    },
    {
      icon: CheckCircle,
      title: "Risk Management",
      description: "Learn proper position sizing and risk management techniques"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="why-choose"
      ref={whyChooseRef}
      className="why-choose-section"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)'
      }}
    >
      {/* Background Pattern */}
      <motion.div 
        className="why-choose-background"
        style={{ y: backgroundY }}
      >
        <div 
          className="why-choose-pattern"
          style={{
            backgroundImage: theme === 'dark'
              ? 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)'
          }}
        />
      </motion.div>

      <div className="why-choose-container">
        {/* Header Section */}
        <motion.div
          className="why-choose-header"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="why-choose-badge"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span 
              className="why-choose-badge-text"
              style={{ color: theme === 'dark' ? '#a5b4fc' : '#6366f1' }}
            >
              WHY CHOOSE RTC
            </span>
          </motion.div>

          <h2 
            className="why-choose-title"
            style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
          >
            <motion.span
              className="why-choose-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Why Choose
            </motion.span>
            <motion.span
              className="why-choose-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Rao Trading Concept?
            </motion.span>
          </h2>

          <p 
            className="why-choose-description"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
          >
            Discover what makes RTC the premier choice for forex traders in Pakistan. 
            Join thousands of successful traders who trust our proven strategies and expert guidance.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          className="why-choose-features"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="why-choose-feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: theme === 'dark' 
                  ? 'rgba(26, 26, 46, 0.8)'
                  : 'rgba(255, 255, 255, 0.9)',
                border: theme === 'dark' 
                  ? '1px solid rgba(99, 102, 241, 0.2)'
                  : '1px solid rgba(99, 102, 241, 0.1)'
              }}
            >
              <div className="why-choose-feature-icon-container">
                <div 
                  className="why-choose-feature-icon"
                  style={{ 
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                    boxShadow: `0 8px 32px ${feature.color}40`
                  }}
                >
                  <feature.icon className="why-choose-feature-icon-svg" />
                </div>
                <div 
                  className="why-choose-feature-glow"
                  style={{ background: feature.color }}
                />
              </div>

              <div className="why-choose-feature-content">
                <h3 
                  className="why-choose-feature-title"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="why-choose-feature-description"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  {feature.description}
                </p>
                <div 
                  className="why-choose-feature-stats"
                  style={{ color: feature.color }}
                >
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="why-choose-benefits"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="why-choose-benefits-header"
            variants={itemVariants}
          >
            <h3 
              className="why-choose-benefits-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              What You Get with RTC
            </h3>
            <p 
              className="why-choose-benefits-subtitle"
              style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
            >
              Comprehensive trading solutions designed for your success
            </p>
          </motion.div>

          <div className="why-choose-benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="why-choose-benefit-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(15, 15, 35, 0.6)'
                    : 'rgba(248, 250, 252, 0.8)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(99, 102, 241, 0.1)'
                    : '1px solid rgba(99, 102, 241, 0.05)'
                }}
              >
                <div 
                  className="why-choose-benefit-icon"
                  style={{ color: theme === 'dark' ? '#6366f1' : '#6366f1' }}
                >
                  <benefit.icon className="why-choose-benefit-icon-svg" />
                </div>
                <div className="why-choose-benefit-content">
                  <h4 
                    className="why-choose-benefit-title"
                    style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                  >
                    {benefit.title}
                  </h4>
                  <p 
                    className="why-choose-benefit-description"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="why-choose-trust"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="why-choose-trust-content"
            variants={itemVariants}
            style={{
              background: theme === 'dark' 
                ? 'rgba(99, 102, 241, 0.1)'
                : 'rgba(99, 102, 241, 0.05)',
              border: theme === 'dark' 
                ? '1px solid rgba(99, 102, 241, 0.2)'
                : '1px solid rgba(99, 102, 241, 0.1)'
            }}
          >
            <div className="why-choose-trust-stats">
              <div className="why-choose-trust-stat">
                <div 
                  className="why-choose-trust-number"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  10,000+
                </div>
                <div 
                  className="why-choose-trust-label"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  Active Traders
                </div>
              </div>
              <div className="why-choose-trust-stat">
                <div 
                  className="why-choose-trust-number"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  80%+
                </div>
                <div 
                  className="why-choose-trust-label"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  Win Rate
                </div>
              </div>
              <div className="why-choose-trust-stat">
                <div 
                  className="why-choose-trust-number"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  500+
                </div>
                <div 
                  className="why-choose-trust-label"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  Signals Monthly
                </div>
              </div>
              <div className="why-choose-trust-stat">
                <div 
                  className="why-choose-trust-number"
                  style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                >
                  24/7
                </div>
                <div 
                  className="why-choose-trust-label"
                  style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                >
                  Support
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="why-choose-cta"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="why-choose-cta-content"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 
              className="why-choose-cta-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              Ready to Start Your Trading Journey?
            </h3>
            <p 
              className="why-choose-cta-text"
              style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
            >
              Join thousands of successful traders and experience the RTC difference today
            </p>
            <motion.button
              className="why-choose-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)'
              }}
            >
              <a
                href="https://discord.gg/njAcNGpZ5g"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Join RTC Community
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseRTC;
