import { useRef, useEffect, useState } from "react";
import "../styles/Hero.css";

function Hero({ videoSrc, showAudio = false, title, subtitle, fixed = false }) {

  const videoRef = useRef(null);
  const heroRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    const video = videoRef.current;

    if (!video) return;

    if (isMuted) {
      video.muted = false;
      video.volume = 0.7;
    } else {
      video.muted = true;
    }

    setIsMuted(!isMuted);
  };

  // SCROLL EFFECT

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scale = 1 + scrollTop / 3000;
      const blur = scrollTop / 220;
      const opacity = 1 - scrollTop / 900;

      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${scale})`;
        videoRef.current.style.filter = `blur(${blur}px)`;
        videoRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero">

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`hero-video ${fixed ? "hero-fixed" : "hero-normal"}`}

      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* OPTIONAL CENTER TEXT */}

      {(title || subtitle) && (
        <div className="hero-overlay-text">
          {title && <h1>{title}</h1>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}

      {/* OPTIONAL AUDIO BUTTON */}

      {showAudio && (
        <button onClick={toggleAudio} className="audio-btn">
          {isMuted ? "🔇" : "🔊"}
        </button>
      )}

    </section>
  );
}

export default Hero;
