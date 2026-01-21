import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import heroVideo from "../assets/video/WHO_AM_I.mp4";

function About() {
  return (
    <>

      <Hero
  videoSrc={heroVideo}
  showAudio={true}
  fixed={true}
/>


      <section className="about-scroll-title">
        <h1>ABOUT ME</h1>

        <p className="about-subtext">
          Video Editor with 6 years of personal and client experience.
          I specialize in clean edits, strong storytelling and click-worthy
          visuals optimized for YouTube and social media.
        </p>
      </section>

      <ProfileSection />

    </>
  );
}

export default About;
