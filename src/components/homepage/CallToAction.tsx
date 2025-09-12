import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageCircle, 
  Sparkles, 
  Code,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Globe
} from 'lucide-react';

const CallToAction: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const steps = [
    {
      icon: MessageCircle,
      title: 'Let\'s Discuss',
      description: 'Share your project ideas and requirements',
      action: 'Start Conversation'
    },
    {
      icon: Code,
      title: 'Build Together',
      description: 'Collaborate on creating amazing solutions',
      action: 'Begin Project'
    },
    {
      icon: Star,
      title: 'Launch Success',
      description: 'Deploy and maintain your digital presence',
      action: 'Go Live'
    }
  ];

  const benefits = [
    { icon: Globe, text: '50+ Countries Served', color: 'primary' },
    { icon: Code, text: '100+ Projects Completed', color: 'secondary' },
    { icon: Clock, text: '24/7 Support Available', color: 'accent' },
    { icon: Star, text: '5-Star Client Rating', color: 'highlight' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York',
      text: 'Amazing work! The team delivered exactly what we needed and more.',
      profit: '100% Satisfied'
    },
    {
      name: 'Michael Chen',
      location: 'San Francisco', 
      text: 'Professional, creative, and reliable. Highly recommend their services.',
      profit: '5-Star Rating'
    },
    {
      name: 'Emma Wilson',
      location: 'London',
      text: 'Outstanding quality and attention to detail. Will work with them again!',
      profit: 'Repeat Client'
    }
  ];

  return (
    <section ref={ctaRef} className="cta-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="cta-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="cta-floating-shapes">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className={`cta-shape cta-shape-${i}`}
              animate={{
                y: [0, -60, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 12 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="cta-grid-pattern">
          {Array.from({ length: 60 }).map((_, i) => (
            <motion.div
              key={i}
              className="cta-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="cta-container-3d">
        {/* Main CTA Header */}
        <motion.div
          className="cta-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="cta-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Sparkles className="badge-3d-icon" />
            <span className="badge-3d-text">LET'S WORK TOGETHER</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="cta-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="cta-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Your Trading Journey
            </motion.span>
            <motion.span
              className="cta-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Starts Here
            </motion.span>
          </motion.h2>

          <motion.p
            className="cta-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Learn how the banks trade, not the retail crowd.
          </motion.p>
        </motion.div>

        {/* 3D Interactive Steps */}
        <motion.div
          className="cta-steps-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ y: floatingY }}
        >
          <div className="steps-container-3d">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`step-item-3d ${activeStep === index ? 'step-active-3d' : ''}`}
                onHoverStart={() => setActiveStep(index)}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  z: 30
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{
                  transform: `perspective(1000px) rotateX(${cardRotateX}deg)`,
                }}
              >
                <div className="step-icon-container-3d">
                  <motion.div
                    className="step-icon-3d"
                    style={{ 
                      background: index === 0 ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' :
                                 index === 1 ? 'linear-gradient(135deg, #10b981, #06d6a0)' :
                                 'linear-gradient(135deg, #f59e0b, #f97316)'
                    }}
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
                    <step.icon className="step-icon-3d-svg" />
                  </motion.div>
                  <div className="step-number-3d">{index + 1}</div>
                </div>
                
                <div className="step-content-3d">
                  <h3 className="step-title-3d">{step.title}</h3>
                  <p className="step-description-3d">{step.description}</p>
                  <motion.button 
                    className="step-action-btn-3d"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,   
                      boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="btn-text-3d">{step.action}</span>
                    <motion.div
                      className="btn-icon-3d"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="step-arrow-3d" />
                    </motion.div>
                    <div className="btn-glow-3d" />
                  </motion.button>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="step-connector-3d"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Benefits Grid */}
        <motion.div
          className="cta-benefits-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="benefits-title-3d">What You Get</h3>
          <div className="benefits-grid-3d">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item-3d"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  z: 20
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${cardRotateX}deg)`,
                }}
              >
                <div className="benefit-icon-3d-container">
                  <benefit.icon className="benefit-icon-3d" />
                </div>
                <span className="benefit-text-3d">{benefit.text}</span>
                <CheckCircle className="benefit-check-3d" />
                <div className="benefit-glow-3d" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Testimonials */}
        <motion.div
          className="cta-testimonials-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="testimonials-title-3d">Client Success Stories</h3>
          <div className="testimonials-grid-3d">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card-3d"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 5,
                  z: 20
                }}
                style={{
                  transform: `perspective(1000px) rotateX(${cardRotateX}deg)`,
                }}
              >
                <div className="testimonial-content-3d">
                  <p className="testimonial-text-3d">"{testimonial.text}"</p>
                  <div className="testimonial-author-3d">
                    <div className="author-info-3d">
                      <h4 className="author-name-3d">{testimonial.name}</h4>
                      <p className="author-location-3d">{testimonial.location}</p>
                    </div>
                    <div className="testimonial-profit-3d">
                      <Star className="profit-icon-3d" />
                      <span className="profit-amount-3d">{testimonial.profit}</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-glow-3d" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Main CTA Button */}
        <motion.div
          className="cta-main-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-main-button-3d"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              rotateY: 5,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="cta-button-content-3d">
              <div className="cta-button-icon-3d">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className="cta-sparkles-icon-3d" />
                </motion.div>
              </div>
              <div className="cta-button-text-3d">
                <span className="cta-button-main-3d">JOIN DISCORD</span>
                <span className="cta-button-sub-3d">Start Your Trading Journey</span>
              </div>
              <div className="cta-button-arrow-3d">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="cta-arrow-icon-3d" />
                </motion.div>
              </div>
            </div>
            
            {/* Button Glow Effect */}
            <motion.div
              className="cta-button-glow-3d"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

          <p className="cta-guarantee-3d">
            <Shield className="guarantee-icon-3d" />
            Professional Trading Signals • 24/7 Community Support • Proven Methodology
          </p>
        </motion.div>

        {/* 3D Urgency Banner */}
        <motion.div
          className="cta-urgency-3d"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <div className="urgency-content-3d">
            <div className="urgency-icon-3d">
              <Clock className="urgency-clock-3d" />
            </div>
            <div className="urgency-text-3d">
              <span className="urgency-title-3d">Limited Spots Available</span>
              <span className="urgency-subtitle-3d">Join our exclusive trading community and get priority access</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3D Background Animation */}
      <div className="cta-particles-3d">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="cta-particle-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
              rotateZ: [0, 360],
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CallToAction;