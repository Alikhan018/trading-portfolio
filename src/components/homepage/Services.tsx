import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Sparkles, Star, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const services = [
    {
      id: 1,
      icon: Globe,
      title: 'Forex Signals Group',
      description: 'Get accurate and professional forex signals directly from Rao Umer\'s analysis. Our signals cover gold and major forex pairs, delivered live in Discord',
      features: [
        { icon: Globe, text: 'Live Discord Signals' },
        { icon: Globe, text: 'Gold & Major Pairs' },
        { icon: Target, text: 'Professional Analysis' }
      ],
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      delay: 0.2
    },
    {
      id: 2,
      icon: Star,
      title: 'RTC Mentorship Program',
      description: 'A 40-day structured training designed for Pakistani traders to master ICT, Smart Money Concepts (SMC) and Volume Spread Analysis (VSA)',
      features: [
        { icon: Sparkles, text: '40-Day Training' },
        { icon: Star, text: 'ICT + SMC + VSA' },
        { icon: Target, text: 'For Pakistani Traders' }
      ],
      gradient: 'linear-gradient(135deg, #10b981, #06d6a0)',
      delay: 0.4
    }
  ];

  return (
    <section ref={servicesRef} className="services-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="services-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="services-floating-shapes">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`services-shape services-shape-${i}`}
              animate={{
                y: [0, -50, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 10 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="services-grid-pattern">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="services-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.08,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="services-container-3d">
        {/* Section Header */}
        <motion.div
          className="services-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="services-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Globe className="badge-3d-icon" />
            <span className="badge-3d-text">SERVICES</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="services-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="services-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Creative
            </motion.span>
            <motion.span
              className="services-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Solutions
            </motion.span>
          </motion.h2>

          <motion.p
            className="services-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Transform your ideas into stunning digital experiences with our comprehensive services
          </motion.p>
        </motion.div>

        {/* 3D Services Grid */}
        <motion.div
          className="services-grid-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ y: floatingY }}
        >
          <div className="services-3d-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card-3d"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: service.delay,
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
                <div className="service-card-3d-glow" />
                
                {/* Service Header */}
                <div className="service-header-3d">
                  <div
                    className="service-icon-3d"
                    style={{ background: service.gradient }}
                  >
                    <service.icon className="service-icon-3d-svg" />
                  </div>
                  <div className="service-badge-3d">
                    <span className="service-number-3d">0{index + 1}</span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="service-content-3d">
                  <h3 className="service-title-3d">{service.title}</h3>
                  <p className="service-description-3d">{service.description}</p>

                  {/* Features List */}
                  <div className="service-features-3d">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="service-feature-3d"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-check-3d">
                          <feature.icon className="feature-check-icon-3d" />
                        </div>
                        <span className="feature-text-3d">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="service-cta-3d"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      boxShadow: '0 15px 30px rgba(99, 102, 241, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span className="cta-text-3d">Learn More</span>
                    <motion.div
                      className="cta-arrow-3d"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                    <div className="cta-glow-3d" />
                  </motion.button>
                </div>

                {/* Card Border */}
                <div className="service-card-3d-border" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Bottom CTA */}
        <motion.div
          className="services-cta-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="services-cta-content-3d">
            <h3 className="services-cta-title-3d">Ready to Get Started?</h3>
            <p className="services-cta-text-3d">
              Let's discuss your project and bring your vision to life
            </p>
            <motion.button
              className="services-cta-button-3d"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="cta-btn-text">Start Project</span>
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

export default Services;