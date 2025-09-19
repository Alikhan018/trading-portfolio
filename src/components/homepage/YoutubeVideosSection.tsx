import React from "react";
import { Youtube } from "lucide-react";
import { youtubeVideos, YOUTUBE_LINK } from '../../utils/objects/constants';

const YoutubeVideosSection: React.FC = () => {
  return (
    <section
      id="learn"
      className="youtube-videos-section"
      style={{
        padding: "3rem 1rem",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        position: "relative",
        boxSizing: "border-box",
        background:
          "linear-gradient(135deg, #1a1a1a, #000000, #0f0f0f)",
        borderRadius: 0,
        maxWidth: "100vw",
      }}
    >
      <div
        className="youtube-header-3d"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.08em",
            color: "#dc2626",
            background: "rgba(99,102,241,0.08)",
            borderRadius: 12,
            padding: "0.3rem 1.2rem",
            marginBottom: 10,
          }}
        >
          Free Premium Content
        </span>
        <h2
          className="text-3xl font-bold text-center"
          style={{
            fontSize: "2rem",
            lineHeight: 1.2,
            margin: 0,
            fontWeight: "bold",
            // Responsive font sizes
            textShadow: "0 0 10px #dc2626",
          }}
        >
          Free
          <span
            style={{
              background: "linear-gradient(90deg, #dc2626 0%, #dc2626 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            &nbsp; Courses on our Youtube
          </span>
        </h2>
      </div>
      <div
        className="youtube-videos-flex"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          width: "100%",
          justifyContent: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {youtubeVideos.map((video, idx) => (
          <div
            key={idx}
            className="youtube-card"
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 2px 12px 0 rgba(80,80,180,0.10)",
              cursor: "pointer",
              transition: "transform 0.2s",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid #6366f1",
              margin: 0,
              padding: 0,
              maxWidth: 800,
              width: "100%",
              minHeight: 160,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => window.open(video.url, "_blank")}
            title={video.title}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.04)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              className="youtube-card-iframe-container"
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                background: "#18181b",
                minHeight: 80,
                maxHeight: 120,
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "rgba(0,0,0,0.6)",
                  borderRadius: "50%",
                  padding: "0.75rem",
                }}
              >
                <Youtube style={{ width: 32, height: 32, color: "#ef4444" }} />
              </div>
              {/* <iframe
                src={video.embed}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px 14px 0 0",
                  border: "none",
                  minHeight: 80,
                  maxHeight: 120,
                }}
                referrerPolicy="strict-origin-when-cross-origin"
              /> */}
              {/* <Youtube
                style={{ width: 48, height: 48, color: "#ef4444" }}
              /> */}
            </div>
            <div
              className="youtube-card-title-container"
              style={{
                width: "100%",
                height: 44,
                background: "rgba(255,255,255,0.08)",
                borderRadius: "0 0 14px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                padding: 0,
              }}
            >
              <h3
                className="youtube-card-title"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textAlign: "center",
                  color: "#a5b4fc",
                  margin: 0,
                }}
              >
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom-centered View Channel button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          width: "100%",
        }}
      >
        <a
          href={YOUTUBE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.25rem",
            borderRadius: 12,
            textDecoration: "none",
            border: "1px solid rgba(255, 0, 0, 0.35)",
            background: "rgba(255, 0, 0, 0.08)",
            color: "#ef4444",
            transition: "transform 0.2s ease, background 0.2s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="View YouTube Channel"
        >
          <Youtube className="w-5 h-5" />
          <span style={{ fontWeight: 600 }}>View Channel</span>
        </a>
      </div>
      {/* No grid media queries needed for flex-wrap */}
    </section>
  );
};

export default YoutubeVideosSection;
