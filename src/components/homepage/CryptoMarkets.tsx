import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Activity, BarChart3, DollarSign, Target, Globe, Star } from 'lucide-react';

const CryptoMarkets: React.FC = () => {
  const marketsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: marketsRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const cardRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const tradingPairs = [
    {
      pair: 'EUR/USD',
      price: '1.0845',
      change: '+0.0023',
      changePercent: '+0.21%',
      volume: '2.4B',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      icon: DollarSign
    },
    {
      pair: 'GBP/USD',
      price: '1.2650',
      change: '-0.0015',
      changePercent: '-0.12%',
      volume: '1.8B',
      gradient: 'linear-gradient(135deg, #10b981, #06d6a0)',
      icon: Target
    },
    {
      pair: 'USD/JPY',
      price: '149.85',
      change: '+0.45',
      changePercent: '+0.30%',
      volume: '3.2B',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      icon: Globe
    },
    {
      pair: 'AUD/USD',
      price: '0.6520',
      change: '+0.0012',
      changePercent: '+0.18%',
      volume: '1.1B',
      gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
      icon: Star
    }
  ];

  return (
    <section ref={marketsRef} className="markets-section-3d">
      {/* 3D Background Elements */}
      <motion.div 
        className="markets-3d-background"
        style={{ y: backgroundY }}
      >
        {/* Floating Geometric Shapes */}
        <div className="markets-floating-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`markets-shape markets-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="markets-grid-pattern">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="markets-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="markets-container-3d">
        {/* Section Header */}
        <motion.div
          className="markets-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="markets-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Activity className="badge-3d-icon" />
            <span className="badge-3d-text">LIVE TRADING</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="markets-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="markets-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              Forex Trading
            </motion.span>
            <motion.span
              className="markets-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Signals
            </motion.span>
          </motion.h2>

          <motion.p
            className="markets-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Get professional forex signals directly from Rao Umer's analysis. Track live market data and make informed trading decisions.
          </motion.p>
        </motion.div>

        {/* 3D Trading Pairs Grid */}
        <motion.div
          className="markets-pairs-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ y: floatingY }}
        >
          <div className="markets-pairs-grid-3d">
            {tradingPairs.map((pair, index) => (
              <motion.div
                key={index}
                className="pair-card-3d"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
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
                <div className="pair-card-3d-glow" />
                
                {/* Pair Header */}
                <div className="pair-header-3d">
                  <motion.div
                    className="pair-icon-3d"
                    style={{ background: pair.gradient }}
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
                    <pair.icon className="pair-icon-3d-svg" />
                  </motion.div>
                  
                  <div className="pair-info-3d">
                    <h3 className="pair-name-3d">{pair.pair}</h3>
                    <p className="pair-volume-3d">Vol: {pair.volume}</p>
                  </div>
                </div>

                {/* Price Data */}
                <div className="pair-price-3d">
                  <div className="pair-price-main-3d">{pair.price}</div>
                  <div className={`pair-change-3d ${pair.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    <span className="pair-change-value-3d">{pair.change}</span>
                    <span className="pair-change-percent-3d">{pair.changePercent}</span>
                  </div>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="pair-chart-3d">
                  <div className="chart-line-3d" />
                  <div className="chart-dots-3d">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="chart-dot-3d"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Border */}
                <div className="pair-card-3d-border" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3D Market Stats */}
        <motion.div
          className="markets-stats-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="markets-stats-grid-3d">
            {[
              { icon: TrendingUp, label: 'Win Rate', value: '80%+', color: 'linear-gradient(135deg, #10b981, #06d6a0)' },
              { icon: Activity, label: 'Live Signals', value: '24/7', color: 'linear-gradient(135deg, #f59e0b, #f97316)' },
              { icon: BarChart3, label: 'Pairs Covered', value: '20+', color: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
              { icon: Target, label: 'Success Rate', value: '95%', color: 'linear-gradient(135deg, #ec4899, #be185d)' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card-3d"
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  y: -5
                }}
              >
                <div className="stat-card-3d-glow" />
                
                <motion.div
                  className="stat-icon-3d"
                  style={{ background: stat.color }}
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
                  <stat.icon className="stat-icon-3d-svg" />
                </motion.div>
                
                <div className="stat-content-3d">
                  <div className="stat-value-3d">{stat.value}</div>
                  <div className="stat-label-3d">{stat.label}</div>
                </div>
                
                <div className="stat-card-3d-border" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoMarkets;
