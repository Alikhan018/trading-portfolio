import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, 
  Globe, 
  Sparkles, 
  Star, 
  Brain,
  Zap,
  CheckCircle,
  XCircle,
  Award,
  MessageCircle,
  TrendingUp,
  Users
} from 'lucide-react';

const WhyChooseRTC: React.FC = () => {
  const whyChooseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: Globe,
      title: 'Professional Forex Signals',
      description: 'Not Gambling - Get accurate signals based on institutional analysis',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      stats: '80%+ Win Rate'
    },
    {
      icon: Star,
      title: 'Mentorship Tailored',
      description: 'For Pakistani Traders - Learn from someone who understands your market',
      gradient: 'linear-gradient(135deg, #10b981, #06d6a0)',
      stats: '6+ Years Experience'
    },
    {
      icon: Brain,
      title: 'Proven Method',
      description: 'ICT + SMC + VSA Combined - Complete trading methodology',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      stats: 'Institutional Approach'
    },
    {
      icon: Globe,
      title: 'Active Community',
      description: 'Discord Community & 24/7 Support - Never trade alone',
      gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
      stats: '10K+ Members'
    }
  ];

  const comparisonFeatures = [
    {
      rtc: 'Custom solutions tailored to your needs',
      others: 'Generic templates and one-size-fits-all',
      icon: Brain
    },
    {
      rtc: 'Modern tech stack and best practices',
      others: 'Outdated technologies and poor practices',
      icon: Zap
    },
    {
      rtc: '100% client satisfaction guaranteed',
      others: 'Inconsistent quality and support',
      icon: Target
    },
    {
      rtc: 'Dedicated project management',
      others: 'Limited communication and updates',
      icon: Globe
    },
    {
      rtc: 'Personal attention and collaboration',
      others: 'Minimal interaction and feedback',
      icon: Star
    },
    {
      rtc: '24/7 support and maintenance',
      others: 'Basic support with delayed responses',
      icon: Sparkles
    }
  ];

  return (
    <section ref={whyChooseRef} className="why-choose-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="why-choose-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="why-choose-floating-shapes">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={i}
              className={`why-choose-shape why-choose-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 9 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="why-choose-grid-pattern">
          {Array.from({ length: 45 }).map((_, i) => (
            <motion.div
              key={i}
              className="why-choose-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="why-choose-container-3d">
        {/* Section Header */}
        <motion.div
          className="why-choose-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="why-choose-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Globe className="badge-3d-icon" />
            <span className="badge-3d-text">WHY CHOOSE US</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="why-choose-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="why-choose-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Why Choose
            </motion.span>
            <motion.span
              className="why-choose-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services?
            </motion.span>
          </motion.h2>

          <motion.p
            className="why-choose-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Discover what makes us the preferred choice for digital innovation and creative solutions
          </motion.p>
        </motion.div>

        {/* 3D Features Grid */}
        <motion.div
          className="why-choose-features-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ y: floatingY }}
        >
          <div className="why-choose-3d-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="why-choose-card-3d"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  y: -10,
                  z: 30
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${cardRotateX}deg)`,
                }}
              >
                <div className="why-choose-card-3d-glow" />
                
                {/* Icon */}
                <motion.div
                  className="why-choose-icon-3d"
                  style={{ background: feature.gradient }}
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5
                  }}
                >
                  <feature.icon className="why-choose-icon-3d-svg" />
                </motion.div>

                {/* Content */}
                <div className="why-choose-content-3d">
                  <h3 className="why-choose-feature-title-3d">{feature.title}</h3>
                  <p className="why-choose-feature-description-3d">{feature.description}</p>
                  
                  {/* Stats Badge */}
                  <div className="why-choose-stats-3d">
                    <Target className="stats-icon-3d" />
                    <span className="stats-text-3d">{feature.stats}</span>
                  </div>
                </div>

                {/* Card Border */}
                <div className="why-choose-card-3d-border" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Comparison Section */}
        <motion.div
          className="comparison-section-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="comparison-content-3d">
            {/* Our Services Side */}
            <motion.div
              className="comparison-side-3d comparison-our-services"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="comparison-title-3d comparison-title-our-services">
                With Our Services
              </h3>
              <div className="comparison-features-3d">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="comparison-feature-3d comparison-feature-our-services"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="comparison-check-3d comparison-check-success-3d">
                      <feature.icon className="comparison-check-icon-3d" />
                    </div>
                    <span className="comparison-text-3d">{feature.rtc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Others Side */}
            <motion.div
              className="comparison-side-3d comparison-others-3d"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="comparison-title-3d comparison-title-others-3d">
                Other Services
              </h3>
              <div className="comparison-features-3d">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="comparison-feature-3d comparison-feature-others-3d"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="comparison-check-3d comparison-check-fail-3d">
                      <span className="comparison-x-3d">✗</span>
                    </div>
                    <span className="comparison-text-3d comparison-text-muted-3d">{feature.others}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3D Bottom CTA */}
        <motion.div
          className="why-choose-cta-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="why-choose-cta-content-3d">
            <h3 className="why-choose-cta-title-3d">Ready to Get Started?</h3>
            <p className="why-choose-cta-text-3d">
              Let's create something amazing together
            </p>
            
            <div className="why-choose-buttons-3d">
              <motion.button
                className="why-choose-btn-primary-3d"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="btn-text-3d">Explore Services</span>
                <motion.div
                  className="btn-icon-3d"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.div>
                <div className="btn-glow-3d" />
              </motion.button>
              
              <motion.button
                className="why-choose-btn-secondary-3d"
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: -5,
                  boxShadow: '0 15px 30px rgba(16, 185, 129, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="btn-text-3d">Get Started Now</span>
                <motion.div
                  className="btn-icon-3d"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  →
                </motion.div>
                <div className="btn-glow-3d" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseRTC;