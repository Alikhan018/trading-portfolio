import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faChartLine,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import InteractiveCard from '../common/InteractiveCard';
import './WhyChooseRTC.css';

const WhyChooseRTC: React.FC = () => {
  const whyChooseRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: faCheckCircle,
      title: "Proven Track Record",
      description: "80%+ verified win rate with consistent profits across all market conditions",
      color: "#10b981"
    },
    {
      icon: faGraduationCap,
      title: "Mentorship",
      description: "Learn from certified Inner Circle Trader methodologies and smart money concepts",
      color: "#f59e0b"
    },
    {
      icon: faDiscord,
      title: "Active Community",
      description: "Join 10,000+ active traders sharing insights and supporting each other",
      color: "#8b5cf6"
    },
    {
      icon: faChartLine,
      title: "Professional Signals",
      description: "High-quality forex signals with precise entry, stop-loss, and take-profit levels",
      color: "#6366f1"
    }
  ];

  return (
    <section id="why-rtc" ref={whyChooseRef} className="why-choose-section-3d">
      {/* 3D Background Elements */}
      <motion.div className="why-choose-3d-background" style={{ y: backgroundY }}>
        {/* Floating Geometric Shapes */}
        <div className="why-choose-floating-shapes">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className={`why-choose-shape why-choose-shape-${i}`}
              animate={{
                y: [0, -30, 0],
                rotateZ: [0, 180],
                rotateX: [0, 90, 0],
              }}
              transition={{
                duration: 6 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="why-choose-grid-pattern">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="why-choose-grid-dot"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="why-choose-container-3d flex flex-col">
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
            <div className="why-choose-badge-3d-glow" />
            <span className="why-choose-badge-3d-text">WHY CHOOSE RTC</span>
            <div className="why-choose-badge-3d-indicator" />
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
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
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
              RTC?
            </motion.span>
          </motion.h2>

          <motion.p
            className="why-choose-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Discover what makes RTC the premier choice for forex traders in Pakistan.
            Join thousands of successful traders who trust our proven strategies.
          </motion.p>
        </motion.div>

        {/* 4 Feature Cards Grid */}
        <motion.div
          className="why-choose-features-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="why-choose-features-grid-3d">
            {features.map((feature, index) => (
              <InteractiveCard
                key={index}
                className="why-choose-feature-card-3d"
                delay={index * 0.2}
              >
                <div className="why-choose-feature-card-3d-glow" />

                <div className="why-choose-feature-content-3d">
                  <div
                    className="why-choose-feature-icon-3d"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                      boxShadow: `0 8px 32px ${feature.color}40`
                    }}
                  >
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="why-choose-feature-icon-svg-3d"
                    />
                  </div>

                  <h3
                    className="why-choose-feature-title-3d"
                    style={{ color: feature.color }}
                  >
                    {feature.title}
                  </h3>

                  <p className="why-choose-feature-description-3d">
                    {feature.description}
                  </p>
                </div>

                <div className="why-choose-feature-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseRTC;
