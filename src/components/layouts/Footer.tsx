import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

import { socialLinks } from '../../utils/objects/constants';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const footerLinks = socialLinks.map(link => ({
    ...link,
    icon: link.icon
  }));

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="footer-traditional"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(135deg,  #3300005c 0%, #38010197 50%, #56000008 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        borderTop: theme === 'dark'
          ? '1px solid rgba(99, 102, 241, 0.2)'
          : '1px solid rgba(99, 102, 241, 0.1)'
      }}
    >
      {/* Background Pattern */}
      <motion.div
        className="footer-background-pattern"
        style={{ y: backgroundY }}
      >
        <div
          className="footer-pattern-dots"
          style={{
            backgroundImage: theme === 'dark'
              ? 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0)'
          }}
        ></div>
      </motion.div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main-content">
          <div className="footer-grid">
            {/* Company Info Section */}
            <motion.div
              className="footer-company-section footer-animate-in"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="footer-logo-container">
                <img
                  src="/header_logo.png"
                  alt="RTC Logo"
                  className="footer-logo"
                />
                <div className="footer-brand-info">
                  <h3 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>RTC</h3>
                  <p style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}>Rao Trading Concept</p>
                </div>
              </div>

              <p
                className="footer-description"
                style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
              >
                Pakistan's premier forex trading community. Empowering traders with professional signals, expert mentorship, and proven ICT strategies.
              </p>

              {/* Trust Indicators */}
              <div className="footer-trust-indicators">
                <div className="footer-trust-item">
                  <Shield className="footer-trust-icon" style={{ color: '#10b981' }} />
                  <span
                    className="footer-trust-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    Trusted by 10,000+ traders
                  </span>
                </div>
                <div className="footer-trust-item">
                  <Award className="footer-trust-icon" style={{ color: '#f59e0b' }} />
                  <span
                    className="footer-trust-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    80%+ verified win rate
                  </span>
                </div>
                <div className="footer-trust-item">
                  <Users className="footer-trust-icon" style={{ color: '#8b5cf6' }} />
                  <span
                    className="footer-trust-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    Active community support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              className="footer-animate-in footer-animate-delay-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                className="footer-section-title"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
              >
                Quick Links
              </h4>
              <ul className="footer-links-list">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Markets", href: "#markets" },
                  { label: "WhyUs?", href: "#why-rtc" },
                  { label: "Services", href: "#services" },
                  { label: "Community", href: "#community" },
                  { label: "Learn", href: "#learn" },
                  { label: "About", href: "#about" },
                ].map((link) => (
                  <li key={link.label} className="footer-link-item">
                    <motion.a
                      href={link.href}
                      className="footer-link"
                      style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                      whileHover={{
                        color: theme === 'dark' ? '#ffffff' : '#1f2937',
                        x: 5
                      }}
                    >
                      <ArrowRight className="footer-link-icon" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Section */}
            <motion.div
              className="footer-animate-in footer-animate-delay-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4
                className="footer-section-title"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
              >
                Our Services
              </h4>
              <ul className="footer-services-list">
                {[
                  'Forex Signals',
                  'ICT Mentorship',
                  'Smart Money Concepts',
                  'Volume Spread Analysis',
                  'Live Trading Sessions',
                  'Market Analysis'
                ].map((service) => (
                  <li key={service} className="footer-service-item">
                    <motion.div
                      className="footer-service"
                      style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                      whileHover={{
                        color: theme === 'dark' ? '#ffffff' : '#1f2937',
                        x: 5
                      }}
                    >
                      <TrendingUp className="footer-service-icon" />
                      {service}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social Section */}
            <motion.div
              className="footer-animate-in footer-animate-delay-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4
                className="footer-section-title"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
              >
                Get In Touch
              </h4>

              {/* Contact Info */}
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <span
                    className="footer-contact-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    contact@raoumer.com
                  </span>
                </div>
                {/* <div className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <span
                    className="footer-contact-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    +92 300 1234567
                  </span>
                </div> */}
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span
                    className="footer-contact-text"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    Pakistan
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="footer-social-section">
                <h5 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Follow Us</h5>
                <div className="footer-social-links">
                  {footerLinks.map((social) => {
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.target || undefined}
                        rel={social.rel || undefined}
                        className="footer-social-link footer-hover-lift"
                        style={{
                          background: theme === 'dark'
                            ? 'rgba(99, 102, 241, 0.1)'
                            : 'rgba(99, 102, 241, 0.05)',
                          color: theme === 'dark' ? '#9ca3af' : '#6b7280',
                          border: theme === 'dark'
                            ? '1px solid #dc262625'
                            : '1px solid rgba(99, 102, 241, 0.1)'
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                          background: '#d22f2f0c',
                          color: '#dc2626'
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FontAwesomeIcon icon={social.icon} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom footer-animate-in footer-animate-delay-4"
          style={{
            borderTop: theme === 'dark'
              ? '1px solid #374151'
              : '1px solid #e5e7eb'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            {/* Copyright */}
            <div className="footer-copyright">
              <p
                className="footer-copyright-text"
                style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
              >
                © 2025 Rao Trading Concept. All rights reserved.
              </p>
              <p
                className="footer-copyright-subtext"
                style={{ color: theme === 'dark' ? '#6b7280' : '#9ca3af' }}
              >
                Empowering Pakistani traders with professional forex education
              </p>
            </div>

            {/* Legal Links */}
            <div className="footer-legal-links">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' }
              ].map((link) => (
                <motion.div key={link.name}>
                  <Link
                    to={link.href}
                    className="footer-legal-link"
                    style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
