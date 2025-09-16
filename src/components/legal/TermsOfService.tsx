import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Shield, FileText, AlertTriangle, Users, DollarSign, Clock, Mail, Phone } from 'lucide-react';
import './TermsOfService.css';

const TermsOfService: React.FC = () => {
  const { theme } = useTheme();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* Header Section */}
        <motion.div
          className="legal-header"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          style={{
            background: theme === 'dark' 
              ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            borderBottom: theme === 'dark' 
              ? '1px solid rgba(99, 102, 241, 0.2)'
              : '1px solid rgba(99, 102, 241, 0.1)'
          }}
        >
          <div className="legal-header-content">
            <motion.div
              className="legal-icon"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FileText className="legal-icon-svg" />
            </motion.div>
            <div className="legal-title-section">
              <h1 
                className="legal-title"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
              >
                Terms of Service
              </h1>
              <p 
                className="legal-subtitle"
                style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
              >
                Rao Trading Concept - Professional Forex Trading Services
              </p>
              <div className="legal-meta">
                <span 
                  className="legal-date"
                  style={{ color: theme === 'dark' ? '#6b7280' : '#9ca3af' }}
                >
                  Last Updated: January 15, 2025
                </span>
                <span 
                  className="legal-version"
                  style={{ color: theme === 'dark' ? '#6b7280' : '#9ca3af' }}
                >
                  Version 2.1
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="legal-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Introduction */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Shield className="legal-section-icon" />
              Introduction
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                Welcome to Rao Trading Concept (RTC), Pakistan's premier forex trading community. 
                These Terms of Service ("Terms") govern your use of our website, services, and 
                trading signals. By accessing or using our services, you agree to be bound by 
                these Terms.
              </p>
              <p>
                RTC provides professional forex trading education, signals, and mentorship services. 
                Our mission is to empower Pakistani traders with proven ICT (Inner Circle Trader) 
                strategies and smart money concepts.
              </p>
            </div>
          </motion.section>

          {/* Services Description */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <DollarSign className="legal-section-icon" />
              Our Services
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>RTC offers the following services:</p>
              <ul className="legal-list">
                <li><strong>Forex Trading Signals:</strong> Professional buy/sell signals with entry, stop-loss, and take-profit levels</li>
                <li><strong>ICT Mentorship:</strong> Comprehensive training on Inner Circle Trader methodologies</li>
                <li><strong>Smart Money Concepts:</strong> Education on institutional trading strategies</li>
                <li><strong>Volume Spread Analysis (VSA):</strong> Advanced market analysis techniques</li>
                <li><strong>Live Trading Sessions:</strong> Real-time market analysis and trade setups</li>
                <li><strong>Community Support:</strong> Access to our exclusive trading community</li>
                <li><strong>Market Analysis:</strong> Daily and weekly market outlook reports</li>
              </ul>
            </div>
          </motion.section>

          {/* User Responsibilities */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Users className="legal-section-icon" />
              User Responsibilities
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>As a user of RTC services, you agree to:</p>
              <ul className="legal-list">
                <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                <li>Provide accurate and complete information when registering for our services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not share, redistribute, or resell our trading signals or educational content</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Not use our services for any fraudulent or illegal activities</li>
                <li>Respect other community members and maintain professional conduct</li>
                <li>Report any suspicious or inappropriate behavior to our support team</li>
              </ul>
            </div>
          </motion.section>

          {/* Risk Disclaimer */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <AlertTriangle className="legal-section-icon" />
              Risk Disclaimer
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <div 
                className="legal-warning-box"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(239, 68, 68, 0.1)'
                    : 'rgba(239, 68, 68, 0.05)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(239, 68, 68, 0.3)'
                    : '1px solid rgba(239, 68, 68, 0.2)'
                }}
              >
                <h3 style={{ color: theme === 'dark' ? '#fca5a5' : '#dc2626' }}>
                  Important Risk Warning
                </h3>
                <p>
                  <strong>Forex trading involves substantial risk of loss and is not suitable for all investors.</strong> 
                  Past performance is not indicative of future results. You should carefully consider whether 
                  trading is appropriate for you in light of your circumstances, knowledge, and financial resources.
                </p>
                <p>
                  RTC provides educational content and trading signals for informational purposes only. 
                  We do not provide financial advice, and our signals are not guaranteed to be profitable. 
                  You are solely responsible for your trading decisions and their outcomes.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Payment Terms */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Clock className="legal-section-icon" />
              Payment Terms
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>Payment terms for RTC services:</p>
              <ul className="legal-list">
                <li>All payments must be made in advance before accessing premium services</li>
                <li>We accept payments through bank transfers, JazzCash, EasyPaisa, and other local payment methods</li>
                <li>Subscription fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with 30 days' notice to existing subscribers</li>
                <li>Failed payments may result in suspension of services</li>
                <li>All prices are in Pakistani Rupees (PKR) unless otherwise stated</li>
              </ul>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <FileText className="legal-section-icon" />
              Intellectual Property
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                All content, including but not limited to trading signals, educational materials, 
                videos, articles, and software, is the exclusive property of Rao Trading Concept 
                and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from our 
                content without explicit written permission. Unauthorized use may result in 
                legal action and termination of your account.
              </p>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Shield className="legal-section-icon" />
              Limitation of Liability
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                To the maximum extent permitted by law, Rao Trading Concept shall not be liable 
                for any direct, indirect, incidental, special, or consequential damages arising 
                from your use of our services or trading decisions based on our content.
              </p>
              <p>
                Our total liability to you for any claims arising from these Terms or our services 
                shall not exceed the amount you paid for the specific service giving rise to the claim.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Mail className="legal-section-icon" />
              Contact Information
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>For questions about these Terms of Service, please contact us:</p>
              <div 
                className="legal-contact-info"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(99, 102, 241, 0.1)'
                    : 'rgba(99, 102, 241, 0.05)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(99, 102, 241, 0.2)'
                    : '1px solid rgba(99, 102, 241, 0.1)'
                }}
              >
                <div className="legal-contact-item">
                  <Mail className="legal-contact-icon" />
                  <span>Email: legal@raotradingconcept.com</span>
                </div>
                <div className="legal-contact-item">
                  <Phone className="legal-contact-icon" />
                  <span>Phone: +92 300 1234567</span>
                </div>
                <div className="legal-contact-item">
                  <FileText className="legal-contact-icon" />
                  <span>Address: Karachi, Pakistan</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Changes to Terms */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Clock className="legal-section-icon" />
              Changes to Terms
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of 
                significant changes via email or through our website. Your continued use of our 
                services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
