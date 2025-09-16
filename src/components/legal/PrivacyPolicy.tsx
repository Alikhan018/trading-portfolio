import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="legal-icon-svg" />
            </motion.div>
            <div className="legal-title-section">
              <h1 
                className="legal-title"
                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
              >
                Privacy Policy
              </h1>
              <p 
                className="legal-subtitle"
                style={{ color: theme === 'dark' ? '#9ca3af' : '#6b7280' }}
              >
                Rao Trading Concept - Data Protection & Privacy
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
                  Version 1.3
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
              <Lock className="legal-section-icon" />
              Introduction
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                At Rao Trading Concept (RTC), we are committed to protecting your privacy and 
                personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our forex trading services, website, 
                and mobile applications.
              </p>
              <p>
                We understand the importance of privacy in the financial services industry and 
                have implemented comprehensive security measures to protect your data. This policy 
                complies with applicable data protection laws and regulations.
              </p>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Database className="legal-section-icon" />
              Information We Collect
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <h3 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Personal Information</h3>
              <ul className="legal-list">
                <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
                <li><strong>Profile Information:</strong> Trading experience, investment goals, and preferences</li>
                <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
                <li><strong>Communication Data:</strong> Messages, support tickets, and feedback you send us</li>
                <li><strong>Identity Verification:</strong> Government-issued ID for account verification (when required)</li>
              </ul>

              <h3 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Technical Information</h3>
              <ul className="legal-list">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, features used, and interaction patterns</li>
                <li><strong>Location Data:</strong> General geographic location (country/region level)</li>
                <li><strong>Cookies and Tracking:</strong> Session data, preferences, and analytics information</li>
                <li><strong>Log Files:</strong> Server logs, error reports, and system performance data</li>
              </ul>

              <h3 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Trading-Related Information</h3>
              <ul className="legal-list">
                <li><strong>Signal Usage:</strong> Which trading signals you access and how you use them</li>
                <li><strong>Educational Progress:</strong> Course completion, quiz results, and learning analytics</li>
                <li><strong>Community Activity:</strong> Forum posts, comments, and community interactions</li>
                <li><strong>Support History:</strong> Previous support requests and resolution details</li>
              </ul>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Eye className="legal-section-icon" />
              How We Use Your Information
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>We use your information for the following purposes:</p>
              
              <div 
                className="legal-purpose-grid"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(99, 102, 241, 0.05)'
                    : 'rgba(99, 102, 241, 0.02)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(99, 102, 241, 0.1)'
                    : '1px solid rgba(99, 102, 241, 0.05)'
                }}
              >
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Service Delivery</h4>
                    <p>Provide trading signals, educational content, and customer support</p>
                  </div>
                </div>
                
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Account Management</h4>
                    <p>Create and maintain your account, process payments, and manage subscriptions</p>
                  </div>
                </div>
                
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Communication</h4>
                    <p>Send important updates, newsletters, and respond to your inquiries</p>
                  </div>
                </div>
                
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Security</h4>
                    <p>Protect against fraud, unauthorized access, and ensure platform security</p>
                  </div>
                </div>
                
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Analytics</h4>
                    <p>Improve our services, analyze usage patterns, and develop new features</p>
                  </div>
                </div>
                
                <div className="legal-purpose-item">
                  <CheckCircle className="legal-purpose-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Legal Compliance</h4>
                    <p>Comply with applicable laws, regulations, and legal obligations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Shield className="legal-section-icon" />
              Data Security
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <div 
                className="legal-security-box"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(16, 185, 129, 0.1)'
                    : 'rgba(16, 185, 129, 0.05)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(16, 185, 129, 0.3)'
                    : '1px solid rgba(16, 185, 129, 0.2)'
                }}
              >
                <h3 style={{ color: theme === 'dark' ? '#6ee7b7' : '#059669' }}>
                  <Shield className="legal-security-icon" />
                  Security Measures
                </h3>
                <ul className="legal-list">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using industry-standard protocols</li>
                  <li><strong>Access Controls:</strong> Strict access controls and multi-factor authentication for staff</li>
                  <li><strong>Regular Audits:</strong> Regular security audits and penetration testing</li>
                  <li><strong>Secure Infrastructure:</strong> Cloud-based infrastructure with enterprise-grade security</li>
                  <li><strong>Data Backup:</strong> Regular encrypted backups with disaster recovery procedures</li>
                  <li><strong>Staff Training:</strong> Regular security training for all team members</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Information Sharing */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Users className="legal-section-icon" />
              Information Sharing
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              
              <div 
                className="legal-sharing-grid"
                style={{
                  background: theme === 'dark' 
                    ? 'rgba(99, 102, 241, 0.05)'
                    : 'rgba(99, 102, 241, 0.02)',
                  border: theme === 'dark' 
                    ? '1px solid rgba(99, 102, 241, 0.1)'
                    : '1px solid rgba(99, 102, 241, 0.05)'
                }}
              >
                <div className="legal-sharing-item">
                  <AlertCircle className="legal-sharing-icon" style={{ color: '#f59e0b' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Service Providers</h4>
                    <p>Trusted third-party service providers who assist in operating our platform (payment processors, email services, analytics)</p>
                  </div>
                </div>
                
                <div className="legal-sharing-item">
                  <AlertCircle className="legal-sharing-icon" style={{ color: '#f59e0b' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Legal Requirements</h4>
                    <p>When required by law, court order, or to protect our rights and the safety of our users</p>
                  </div>
                </div>
                
                <div className="legal-sharing-item">
                  <AlertCircle className="legal-sharing-icon" style={{ color: '#f59e0b' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Business Transfers</h4>
                    <p>In connection with a merger, acquisition, or sale of assets (with user notification)</p>
                  </div>
                </div>
                
                <div className="legal-sharing-item">
                  <AlertCircle className="legal-sharing-icon" style={{ color: '#f59e0b' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Consent</h4>
                    <p>When you explicitly consent to sharing your information for specific purposes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <FileText className="legal-section-icon" />
              Your Rights
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>You have the following rights regarding your personal information:</p>
              
              <div className="legal-rights-list">
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Access</h4>
                    <p>Request a copy of the personal information we hold about you</p>
                  </div>
                </div>
                
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Correction</h4>
                    <p>Request correction of inaccurate or incomplete information</p>
                  </div>
                </div>
                
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Deletion</h4>
                    <p>Request deletion of your personal information (subject to legal obligations)</p>
                  </div>
                </div>
                
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Portability</h4>
                    <p>Request transfer of your data to another service provider</p>
                  </div>
                </div>
                
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Objection</h4>
                    <p>Object to processing of your information for certain purposes</p>
                  </div>
                </div>
                
                <div className="legal-right-item">
                  <CheckCircle className="legal-right-icon" style={{ color: '#10b981' }} />
                  <div>
                    <h4 style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}>Withdrawal</h4>
                    <p>Withdraw consent for data processing where applicable</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cookies and Tracking */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Eye className="legal-section-icon" />
              Cookies and Tracking
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>We use cookies and similar technologies to enhance your experience:</p>
              <ul className="legal-list">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with your consent)</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences. Note that disabling 
                certain cookies may affect website functionality.
              </p>
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Database className="legal-section-icon" />
              Data Retention
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>We retain your personal information for as long as necessary to:</p>
              <ul className="legal-list">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Improve our services and develop new features</li>
              </ul>
              <p>
                Generally, we retain account information for 7 years after account closure, 
                and usage data for 2 years. Some data may be retained longer for legal compliance.
              </p>
            </div>
          </motion.section>

          {/* International Transfers */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <Users className="legal-section-icon" />
              International Data Transfers
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                Your information may be transferred to and processed in countries other than 
                Pakistan. We ensure appropriate safeguards are in place for such transfers, 
                including standard contractual clauses and adequacy decisions.
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
              <p>For privacy-related questions or to exercise your rights, please contact us:</p>
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
                  <span>Email: privacy@raotradingconcept.com</span>
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

          {/* Changes to Policy */}
          <motion.section className="legal-section" variants={itemVariants}>
            <h2 
              className="legal-section-title"
              style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
            >
              <FileText className="legal-section-icon" />
              Changes to This Policy
            </h2>
            <div 
              className="legal-text"
              style={{ color: theme === 'dark' ? '#d1d5db' : '#374151' }}
            >
              <p>
                We may update this Privacy Policy from time to time. We will notify you of 
                significant changes via email or through our website. We encourage you to 
                review this policy periodically to stay informed about how we protect your information.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
