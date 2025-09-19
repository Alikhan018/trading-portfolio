// import React, { useState } from 'react';
import { REELS_VIDEOS } from '../../utils/objects/constants';
import { INSTAGRAM_LINK } from '../../utils/objects/constants';
import '../../components/Reel.css';

const Reel: React.FC = () => {
  // const [playingId, setPlayingId] = useState<string | null>(null);

  // Helper to play video when play button is clicked
  // const handlePlay = (videoId: string) => {
  //   setPlayingId(videoId);
  //   setTimeout(() => {
  //     const videoEl = document.getElementById(`reel-video-${videoId}`) as HTMLVideoElement | null;
  //     if (videoEl) {
  //       videoEl.play();
  //     }
  //   }, 100);
  // };

  return (
    <div className="reel-marquee-wrapper">
      <div className="reel-marquee">
        {[...REELS_VIDEOS, ...REELS_VIDEOS].map((video) => {
          // const isPlaying = playingId === video.id;
          return (
            <div className="reel-item" style={{ position: 'relative' }}>
              {/* Thumbnail instead of video element */}
              <img
                src={video.thumbnail}
                alt={"Instagram Reel"}
                className="reel-video"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(1) brightness(0.7)",
                  borderRadius: "12px"
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'none'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(1) brightness(0.7)'; }}
                onClick={() => window.open(video.src, "_blank")}
              />

              {/* Play button overlay */}
              <button
                className="reel-play-btn"
                onClick={() => window.open(video.src, "_blank")}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.8,
                  fontSize: "2rem",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  borderRadius: "50%",
                  width: "3rem",
                  height: "3rem",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                ▶
              </button>
            </div>

          );
        })}
      </div>
      {/* Instagram Button Below Marquee */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#dc2626',
            color: '#fff',
            borderRadius: '30px',
            padding: '0.5rem 1.5rem',
            fontWeight: 600,
            fontSize: '1.1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            textDecoration: 'none',
            gap: '0.7rem',
            transition: 'background 0.2s',
          }}
        >
          <img
            src='/insta_logo.png'
            alt="Instagram"
            style={{ width: 36, height: 28, boxShadow: '0 2px 8px rgba(251, 251, 251, 0.1)' }}
          />
          Follow us on Instagram
        </a>
      </div>
    </div>
  );
};

export default Reel;
