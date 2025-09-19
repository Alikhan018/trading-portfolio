import React, { useState, useEffect, useRef } from "react";
import { DISCORD_LINK } from '../../utils/objects/constants';
import { motion, useScroll, useTransform } from "framer-motion";
import { Star } from "lucide-react";

// Animated Logo Component
const AnimatedLogo: React.FC = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
          duration: 1.2,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
    >
      {/* Main Logo */}
      <motion.img
        src="/logo-hero-white.png"
        alt="RTC Logo"
        className="w-full h-auto max-w-[350px] md:max-w-[450px] xl:max-w-[550px] relative z-10"
        style={{
          filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))",
        }}
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Extra Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1.25, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orbs (less, slower, softer) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${['#8b5cf6', '#ec4899', '#3b82f6'][i % 3]}, #ffffff)`,
            left: `${20 + (i * 12)}%`,
            top: `${30 + (i * 8)}%`,
            boxShadow: `0 0 12px ${['#8b5cf6', '#ec4899', '#3b82f6'][i % 3]}`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gentle Energy Rings */}
      {Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute inset-0 border rounded-full"
          style={{
            borderColor: `rgba(${i === 0 ? '139, 92, 246' : '236, 72, 153'}, 0.25)`,
            borderWidth: `${2 + i}px`,
          }}
          animate={{
            scale: [1, 1.25 + i * 0.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>

  );
};


interface HeroProps {
  showContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent = true }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  // const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (showContent) {
      setContentVisible(true);
    }
  }, [showContent]);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-4 md:py-8"
      style={{ background: "var(--gradient-bg)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-bg)" }}
      />

      {/* Animated Logo - Right Half - Desktop Only */}
      <div
        className="absolute z-[1] hidden xl:flex items-center justify-center"
        style={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          pointerEvents: 'none'
        }}
      >
        <AnimatedLogo />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-[2] w-full max-w-[1200px] mx-auto px-4 md:px-8"
        style={{ y: textY, opacity: opacity, paddingTop: isMobile ? '15vh' : '0' }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[80vh] overflow-visible">
          {/* Left Side Content */}
          <div className="flex flex-col gap-6 text-center xl:text-left items-center xl:items-start">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-[10px] w-fit text-[0.9rem] font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                background: "var(--bg-glass)",
                border: "1px solid var(--border-primary)",
                color: "var(--text-secondary)",
              }}
            >
              <Star className="w-4 h-4" style={{ color: "var(--icon-star)" }} />
              <span>Trusted by 10K+ users worldwide</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="text-[4rem] md:text-[3rem] xl:text-[3.5rem] font-extrabold leading-[1.1] m-0"
              initial={{ opacity: 0, y: 30 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                width: "90%",
                maxWidth: "600px",
                color: "var(--text-primary)",
              }}
            >
              Master the Markets
              <span
                style={{
                  background: "var(--gradient-hero-title)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                with RTC
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="text-base md:text-[1.1rem] xl:text-xl leading-[1.6] m-0 w-[90%] max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ color: "var(--text-secondary)" }}
            >
              Rao Umer, the founder of RTC (Rao Trading Concept), is a seasoned
              Forex trader with 6+ years of market experience.
            </motion.div>

            {/* Call to Action */}
            <motion.a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full font-semibold text-lg active:scale-95 flex items-center justify-center gap-2 hover:scale-105 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
              style={{
                padding: "0.75rem 1.5rem",
                background: "var(--gradient-primary)",
                border: "1px solid var(--border-primary)",
                boxShadow: "0 4px 15px rgba(236, 72, 153, 0.3)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "white",
              }}
            >
              <img
                src="/discord-logo.png"
                alt="Discord Icon"
                width="24"
                height="24"
                className="hover:rotate-360 transition-transform"
              />
              Join Discord
            </motion.a>

            {/* Stats */}
            <motion.div
              className="flex gap-6 md:gap-8 flex-wrap justify-center xl:justify-start md:items-center xl:flex-row xl:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={
                contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  10K+
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Active Users
                </div>
              </div>
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  99.9%
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Uptime
                </div>
              </div>
              <div className="text-center xl:text-left">
                <div
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  24/7
                </div>
                <div
                  className="text-[0.9rem] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Support
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Animated Logo Background - Positioned slightly from top - Hidden on Desktop */}
        {isMobile && (
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={contentVisible ? { opacity: 0.9 } : { opacity: 0 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            style={{
              pointerEvents: "none",
              paddingBottom: "63vh", // Move the logo down from the top
            }}
          >
            <div className="scale-75">
              <AnimatedLogo />
            </div>
          </motion.div>
        )}





      </motion.div>
    </section>
  );
};

export default Hero;
