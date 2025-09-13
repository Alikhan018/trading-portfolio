import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { Group } from 'three';
import ThreeDModel from '../ThreeDModel';

// Mobile Bitcoin Model Component
const MobileBitcoinModel: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF('/base_basic_shaded.glb');

  useFrame((state) => {
    if (groupRef.current) {
      // Center the model and add gentle floating animation
      groupRef.current.position.x = 0;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      groupRef.current.position.z = 0;
      
      // Continuous rotation
      groupRef.current.rotation.y += 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Mobile appropriate scale
      groupRef.current.scale.setScalar(2);
    }
  });

  if (!scene) return null;

  return (
    <group ref={groupRef}>
      <primitive object={scene.clone()} />
    </group>
  );
};

interface HeroProps {
  showContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showContent = true }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
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

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-700 overflow-hidden flex items-center justify-center py-4 md:py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-700" />

      {/* Main Content */}
      <motion.div 
        className="relative z-[2] w-full max-w-[1200px] mx-auto px-4 md:px-8"
        style={{ y: textY, opacity }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[80vh] overflow-visible">
          
          {/* Left Side Content */}
          <div className="flex flex-col gap-6 text-center xl:text-left items-center xl:items-start">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-[10px] w-fit text-[0.9rem] font-medium text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
            >
              <Star className="w-4 h-4 text-amber-400" />
              <span>Trusted by 1M+ users worldwide</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="text-[2rem] md:text-[3rem] xl:text-[3.5rem] font-extrabold leading-[1.1] text-white m-0"
              initial={{ opacity: 0, y: 30 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ width: '100%', maxWidth: '600px' }}
            >
              Master the Markets
              <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block"> with Rao Trading Concept</span>
              (RTC)
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="text-base md:text-[1.1rem] xl:text-xl text-zinc-400 leading-[1.6] m-0 max-w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Pakistan’s Leading Forex Trading Community – Join our Discord to get access to exclusive content
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex gap-4 flex-wrap justify-center xl:justify-start md:flex-col md:items-center xl:flex-row xl:items-start max-w-auto max-w-[300px] md:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="flex items-center gap-2 border-none rounded-full font-semibold text-base cursor-pointer transition-all duration-300 bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_4px_15px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 w-full md:max-w-[300px] xl:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.div>

              <motion.div
                className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-semibold text-base cursor-pointer transition-all duration-300 bg-white/10 text-white backdrop-blur-[10px] hover:bg-white/20 hover:-translate-y-0.5 w-full md:max-w-[300px] xl:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '1rem', paddingBottom: '1rem' }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-6 md:gap-8 flex-wrap justify-center xl:justify-start md:items-center xl:flex-row xl:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center xl:text-left">
                <div className="text-2xl font-extrabold text-white mb-1">1M+</div>
                <div className="text-[0.9rem] text-zinc-400 font-medium">Active Users</div>
              </div>
              <div className="text-center xl:text-left">
                <div className="text-2xl font-extrabold text-white mb-1">99.9%</div>
                <div className="text-[0.9rem] text-zinc-400 font-medium">Uptime</div>
              </div>
              <div className="text-center xl:text-left">
                <div className="text-2xl font-extrabold text-white mb-1">24/7</div>
                <div className="text-[0.9rem] text-zinc-400 font-medium">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 3D Model */}
          <motion.div
            className="hidden xl:flex relative items-center justify-center overflow-hidden min-h-[400px] xl:min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={contentVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* 3D Model - Contained within bounds */}
            <div className="w-full h-full overflow-hidden">
              <ThreeDModel />
            </div>
          </motion.div>
        </div>

        {/* Mobile 3D Model Background */}
        <motion.div
          className="xl:hidden absolute inset-0 z-[1] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={contentVisible ? { opacity: 0.4, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          style={{ pointerEvents: 'none' }}
        >
          {/* 3D Model - Larger size for mobile background with proper canvas sizing */}
          <div className="w-full h-full flex items-center justify-center relative">
            <div 
              className="relative"
              style={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Canvas
                camera={{ 
                  position: [0, 0, 8], 
                  fov: 75,
                  near: 0.1,
                  far: 1000
                }}
                shadows
                gl={{ 
                  antialias: true, 
                  alpha: true,
                  powerPreference: "high-performance"
                }}
                style={{ 
                  width: '100%',
                  height: '100%',
                  background: 'transparent',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
                dpr={[1, 2]}
              >
                <Environment preset="studio" />
                <ambientLight intensity={0.4} />
                <directionalLight 
                  position={[5, 5, 5]} 
                  intensity={1.0} 
                  castShadow
                />
                <pointLight position={[-3, 3, 3]} intensity={0.6} color="#fbbf24" />
                <pointLight position={[3, -3, -3]} intensity={0.5} color="#8b5cf6" />
                
                {/* Mobile Bitcoin Model */}
                <MobileBitcoinModel />
              </Canvas>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;