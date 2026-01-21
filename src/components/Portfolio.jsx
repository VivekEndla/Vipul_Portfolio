import { useEffect, useRef } from "react";
import "../styles/Portfolio.css";
import { useLocation } from "react-router-dom";


// VIDEOS
import lsVideo from "../assets/video/l&s_form.mp4";
import ptVideo from "../assets/video/p&t_form.mp4";
import liveVideo from "../assets/video/live_form.mp4";
import clgVideo from "../assets/video/clg_wrk.mp4";
import prslVideo from "../assets/video/prsl_wrk.mp4";

// IMAGES
import lsImg from "../assets/images/ls_prof.jpeg";
import ptImg from "../assets/images/pt_prof.jpeg";
import cwImg from "../assets/images/cw_prof.jpeg";
import peImg from "../assets/images/pe_prof.jpeg";
import lsvImg from "../assets/images/lsv_prof.jpeg";

function Section({ id, video, title, subtitle, heading, desc, image }) {

  const videoRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {

      if (!videoRef.current) return;

      const rect = videoRef.current.getBoundingClientRect();
      const offset = Math.abs(rect.top);

      const scale = 1 + offset / 1800;
      const blur = offset / 180;
      const opacity = 1 - offset / 800;

      videoRef.current.style.transform = `scale(${scale})`;
      videoRef.current.style.filter = `blur(${blur}px)`;
      videoRef.current.style.opacity = opacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>

      {/* HERO VIDEO SECTION */}

      <section id={id} className="portfolio-hero">

        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="portfolio-hero-video"
        />

        {/* OVERLAY TEXT */}

        <div className="portfolio-hero-overlay">

          <div className="portfolio-overlay-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

        </div>

      </section>

      {/* SPLIT CONTENT */}

      <section className="portfolio-split">

        {/* LEFT TEXT */}
        <div className="portfolio-text">
          <h2>{heading}</h2>
          <p>{desc}</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="portfolio-image">
          <img src={image} alt={title} />
        </div>

      </section>

    </>
  );
}

function Portfolio() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {

    const target = document.querySelector(location.hash);

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }

  }
}, [location]);

  return (
    <>

      {/* SECTION 1 */}

      <Section
        id="longshort"
        video={lsVideo}
        title="LONG & SHORT FORM VIDEOS"
        subtitle="Professional cinematic edits for YouTube, Reels and Shorts."
        heading="Story Driven Edits"
        desc="I have experience creating both long-form and short-form video edits for YouTube and other social media platforms. My work includes lyrical videos, musical edits, and preaching video shorts, crafted to be visually engaging while maintaining strong pacing and audience retention."
        image={lsvImg}
      />

      {/* SECTION 2 */}

      <Section
        id="posters"
        video={ptVideo}
        title="POSTERS & THUMBNAILS"
        subtitle="High CTR designs optimized for clicks and branding."
        heading="Design That Converts"
        desc="I have designed multiple YouTube thumbnails on a consistent weekly basis for various clients, ensuring visual consistency and strong click appeal. Along with thumbnails, I have also created posters tailored for different content and promotional needs."
        image={ptImg}
      />

      {/* SECTION 3 */}

      <Section
        id="live"
        video={liveVideo}
        title="LIVE STREAMING"
        subtitle="Professional broadcast production and OBS setups."
        heading="Live Production Workflow"
        desc="I also have experience handling YouTube live streaming, having managed two to three professional live sessions. These streams were executed smoothly, with a focus on stable flow, clear visuals, and a professional presentation."
        image={lsImg}
      />

      {/* SECTION 4 */}

      <Section
        id="college"
        video={clgVideo}
        title="COLLEGE WORK"
        subtitle="Academic projects, documentaries and presentations."
        heading="Creative Academic Projects"
        desc="I served as the Digital Head for a college club for one year, where I handled video coverage and editing for various events. After completing my term, I continued working with the various college clubs by capturing videos, editing event content, and designing promotional posters."
        image={cwImg}
      />

      {/* SECTION 5 */}

      <Section
        id="personal"
        video={prslVideo}
        title="PERSONAL WORKS"
        subtitle="Creative experiments and passion projects."
        heading="Creative Freedom"
        desc="I often create and edit my own personal videos, handling both self-shooting and post-production. I’ve explored vlogging and frequently experiment with editing styles to refine my skills and improve storytelling."
        image={peImg}
      />

    </>
  );
}

export default Portfolio;
