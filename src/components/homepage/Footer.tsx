import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  MessageCircle, 
  Youtube, 
  Facebook, 
  Instagram, 
  Music, 
  Mail, 
  MapPin,
  TrendingUp,
  Clock,
  Shield,
  Award,
  Star,
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Discord', href: '#', icon: MessageCircle, color: 'linear-gradient(135deg, #5865f2, #7289da)' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'linear-gradient(135deg, #ff0000, #cc0000)' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'linear-gradient(135deg, #1877f2, #0d47a1)' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'linear-gradient(135deg, #e4405f, #c13584)' },
    { name: 'TikTok', href: '#', icon: Music, color: 'linear-gradient(135deg, #000000, #ff0050)' }
  ];

  const features = [
    { icon: TrendingUp, text: 'Professional Signals', description: '80%+ Win Rate' },
    { icon: Clock, text: '24/7 Support', description: 'Always Available' },
    { icon: Shield, text: 'Verified Results', description: 'Transparent Trading' },
    { icon: Award, text: 'Expert Mentorship', description: '6+ Years Experience' }
  ];

  return (
    <footer ref={footerRef} className="footer-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="footer-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="footer-floating-shapes">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className={`footer-shape footer-shape-${i}`}
              animate={{
                y: [0, -30, 0],
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
        <div className="footer-grid-pattern">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="footer-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="footer-container-3d">
        <div className="footer-content-3d">
          {/* Brand Section */}
          <motion.div
            className="footer-brand-3d"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ y: floatingY }}
          >
            <div className="footer-logo-3d">
              <div className="footer-logo-icon-3d">
                <Code className="footer-logo-icon-svg-3d" />
                <motion.div
                  className="footer-logo-glow-3d"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <div className="footer-logo-text-3d">
                <h3 className="footer-brand-name-3d">RTC</h3>
                <p className="footer-brand-tagline-3d">Rao Trading Concept</p>
              </div>
            </div>
            
            <p className="footer-brand-description-3d">
              Pakistan's leading forex trading community. Master the markets with professional signals, 
              expert mentorship, and proven strategies.
            </p>

            {/* Features */}
            <div className="footer-features-3d">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="footer-feature-3d"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <motion.div
                    className="footer-feature-icon-3d"
                    style={{ background: feature.icon === TrendingUp ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 
                                        feature.icon === Clock ? 'linear-gradient(135deg, #10b981, #06d6a0)' :
                                        feature.icon === Shield ? 'linear-gradient(135deg, #f59e0b, #f97316)' :
                                        'linear-gradient(135deg, #ec4899, #be185d)' }}
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                  >
                    <feature.icon className="footer-feature-icon-svg-3d" />
                  </motion.div>
                  <div className="footer-feature-content-3d">
                    <span className="footer-feature-text-3d">{feature.text}</span>
                    <span className="footer-feature-description-3d">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-links-3d"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ y: floatingY }}
          >
            <h4 className="footer-section-title-3d">Quick Links</h4>
            <div className="footer-links-list-3d">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="footer-link-3d"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 10, scale: 1.05, rotateY: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="footer-link-icon-3d">
                    <Star className="footer-link-icon-svg-3d" />
                  </div>
                  <span className="footer-link-text-3d">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-contact-3d"
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ y: floatingY }}
          >
            <h4 className="footer-section-title-3d">Get In Touch</h4>
            <div className="footer-contact-list-3d">
              <motion.div 
                className="footer-contact-item-3d"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="footer-contact-icon-3d">
                  <MapPin className="footer-contact-icon-svg-3d" />
                </div>
                <span className="footer-contact-text-3d">Pakistan</span>
              </motion.div>
              <motion.div 
                className="footer-contact-item-3d"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="footer-contact-icon-3d">
                  <Mail className="footer-contact-icon-svg-3d" />
                </div>
                <span className="footer-contact-text-3d">support@rtctrading.com</span>
              </motion.div>
              <motion.div 
                className="footer-contact-item-3d"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="footer-contact-icon-3d">
                  <Clock className="footer-contact-icon-svg-3d" />
                </div>
                <span className="footer-contact-text-3d">24/7 Support</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-section-title-3d">Follow The Fire</h4>
            <div className="footer-social-links-3d">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link-3d"
                    whileHover={{ scale: 1.1, y: -5, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="footer-social-icon-3d"
                      style={{ background: social.color }}
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5
                      }}
                    >
                      <IconComponent className="footer-social-icon-svg-3d" />
                    </motion.div>
                    <span className="footer-social-text-3d">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Main CTA */}
            <motion.a
              href="#"
              className="footer-main-cta-3d"
              whileHover={{ scale: 1.05, y: -3, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="footer-cta-icon-3d" />
              <span>Join Discord</span>
              <Code className="footer-cta-icon-3d" />
            </motion.a>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom-3d"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content-3d">
            <div className="footer-copyright-3d">
              <p className="copyright-text-3d">
                © 2024 Rao Trading Concept. All rights reserved.
              </p>
              <p className="copyright-subtext-3d">
                Igniting trading success across Pakistan
              </p>
            </div>
            
            <div className="footer-legal-3d">
              <a href="#" className="footer-legal-link-3d">Privacy Policy</a>
              <a href="#" className="footer-legal-link-3d">Terms of Service</a>
              <a href="#" className="footer-legal-link-3d">Risk Disclosure</a>
            </div>
          </div>

          {/* Live Status */}
          <div className="footer-status-3d">
            <div className="footer-live-indicator-3d">
              <div className="footer-live-dot-3d"></div>
              <span className="footer-live-text-3d">LIVE TRADING SIGNALS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background 3D Particles */}
      <div className="footer-particles-3d">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="footer-particle-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
