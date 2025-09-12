import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, TrendingUp, Target, Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

interface VideoBackgroundProps {
  onIntroComplete?: () => void;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onIntroComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 3D transforms based on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const videoRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 20]);
  const videoRotateY = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.8, 0.5, 0.2]);
  const videoBlur = useTransform(scrollYProgress, [0, 1], [0, 10]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => setVideoLoaded(false);
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const duration = video.duration;
        if (duration > 0) {
          setLoadingProgress((bufferedEnd / duration) * 100);
        }
      }
    };
    const handleCanPlay = () => {
      setVideoLoaded(true);
      setIsPlaying(true);
      video.play().catch(console.error);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Complete intro after video loads
  useEffect(() => {
    if (videoLoaded && onIntroComplete) {
      const timer = setTimeout(() => {
        setShowIntro(false);
        onIntroComplete();
      }, 4000); // Show video for 4 seconds

      return () => clearTimeout(timer);
    }
  }, [videoLoaded, onIntroComplete]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(console.error);
  };

  const skipIntro = () => {
    setShowIntro(false);
    onIntroComplete?.();
  };

  return (
    <>
      {/* Fullscreen Video Intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="video-intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <div className="intro-container">
              <video
                className="intro-video"
                autoPlay
                muted
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                onError={(e) => console.error('Video error:', e)}
              >
                <source src="/02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <motion.button
                onClick={skipIntro}
                className="skip-intro-btn"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SKIP INTRO
              </motion.button>

              <motion.div
                className="intro-loading-screen"
                initial={{ opacity: 1 }}
                animate={{ opacity: videoLoaded ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="loading-container-3d">
                  <motion.div
                    className="loading-logo-3d"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="loading-icon-3d" />
                  </motion.div>
                  
                  <h3 className="loading-title-3d">RTC Trading Platform</h3>
                  <p className="loading-subtitle-3d">Loading your trading experience...</p>
                  
                  <div className="loading-progress-3d">
                    <div className="progress-bar-3d">
                      <motion.div
                        className="progress-fill-3d"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="progress-text-3d">{Math.round(loadingProgress)}%</span>
                  </div>

                  <div className="loading-features-3d">
                    <div className="loading-feature-3d">
                      <TrendingUp className="feature-icon-3d" />
                      <span>Live Trading Signals</span>
                    </div>
                    <div className="loading-feature-3d">
                      <Target className="feature-icon-3d" />
                      <span>Advanced Analytics</span>
                    </div>
                    <div className="loading-feature-3d">
                      <Sparkles className="feature-icon-3d" />
                      <span>3D Platform</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="intro-fade-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: showIntro ? 0 : 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Background Video */}
      <motion.div 
        ref={containerRef}
        className="video-background-3d"
        style={{
          scale: videoScale,
          rotateX: videoRotateX,
          rotateY: videoRotateY,
          opacity: videoOpacity,
        }}
      >
        <motion.div
          className="video-container-3d"
          style={{
            filter: `blur(${videoBlur}px)`,
          }}
        >
          <video
            ref={videoRef}
            className="video-element-3d"
            autoPlay
            muted
            loop
            playsInline
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <source src="/02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* 3D Video Overlay Effects */}
          <motion.div 
            className="video-overlay-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Floating Elements on Video */}
          <div className="video-floating-elements">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className={`floating-element floating-element-${i}`}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotateZ: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>

          {/* 3D Grid Overlay */}
          <div className="video-grid-overlay">
            <div className="grid-lines">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="grid-line"
                  style={{
                    left: `${(i * 5)}%`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scaleY: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Depth Layers */}
          <div className="video-depth-layers">
            <motion.div 
              className="depth-layer depth-layer-1"
              animate={{
                rotateX: [0, 5, 0],
                rotateY: [0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="depth-layer depth-layer-2"
              animate={{
                rotateX: [0, -3, 0],
                rotateY: [0, 3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>

        {/* 3D Video Controls */}
        <motion.div
          className="video-controls-3d"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="control-btn-3d"
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? <Pause className="control-icon-3d" /> : <Play className="control-icon-3d" />}
          </motion.button>

          <motion.button
            className="control-btn-3d"
            onClick={toggleMute}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMuted ? <VolumeX className="control-icon-3d" /> : <Volume2 className="control-icon-3d" />}
          </motion.button>

          <motion.button
            className="control-btn-3d"
            onClick={toggleFullscreen}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Maximize className="control-icon-3d" />
          </motion.button>

          <motion.button
            className="control-btn-3d"
            onClick={restartVideo}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <RotateCcw className="control-icon-3d" />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
