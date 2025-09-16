import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Download } from 'lucide-react';
import InteractiveCard from '../common/InteractiveCard';
import { servicesList } from '../../utils/objects/constants';
import { useTheme } from '../../contexts/ThemeContext';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const services = servicesList;
  const { theme } = useTheme();
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handlePdfDownload = async () => {
    setDownloading(true);
    setDownloadProgress(0);
    const url = encodeURI("/RTC – (Rao Trading Concept).pdf");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 0;
      let loaded = 0;
      const reader = response.body?.getReader();
      const chunks: BlobPart[] = [];
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          loaded += value.length;
          if (total) setDownloadProgress(Math.round((loaded / total) * 100));
        }
      }
      const blob = new Blob(chunks, { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'RTC – (Rao Trading Concept).pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (e) {
      alert('Failed to download PDF');
    }
    setDownloading(false);
    setDownloadProgress(0);
  };

  return (
    <section id="services" ref={servicesRef} className="services-section-3d">
      
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
        >
          <div className="services-3d-grid">
            {services.map((service, index) => (
              <InteractiveCard
                key={service.id}
                className="service-card-3d"
                style={{ color: 'var(--icon-community)' }}
                delay={service.delay}
              >
                <div className="service-card-3d-glow" />
                
                {/* Service Header */}
                <div className="service-header-3d">
                  <div
                    className="service-icon-3d"
                    style={{ background: service.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}
                  >
                    <service.icon className="service-icon-3d-svg" style={{ color: 'var(--icon-community)' }} />
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
                </div>

                {/* Card Border */}
                <div className="service-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>

        {/* Bottom-centered Download PDF button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <motion.button
            onClick={handlePdfDownload}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: '0.75rem',
              border:
                theme === 'dark'
                  ? '1px solid rgba(255, 255, 255, 0.2)'
                  : '1px solid rgba(0, 0, 0, 0.2)',
              backgroundColor:
                theme === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.05)',
              cursor: downloading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              minWidth: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            aria-label="Download RTC PDF"
            type="button"
            disabled={downloading}
          >
            <Download
              className="w-5 h-5"
              style={{ color: theme === 'dark' ? '#a5b4fc' : '#6366f1' }}
            />
            <span
              style={{
                color: theme === 'dark' ? '#a5b4fc' : '#6366f1',
                fontSize: '0.95rem',
                fontWeight: 600
              }}
            >
              Get RTC Guide
            </span>
            {downloading && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: -6,
                  width: '100%',
                  height: 4,
                  background: '#e0e7ff',
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${downloadProgress}%`,
                    height: '100%',
                    background: '#6366f1',
                    transition: 'width 0.2s'
                  }}
                />
              </div>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;