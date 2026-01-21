import '../styles/ProfileSection.css'
import profileImg from '../assets/images/profile.jpg'
import { FaTools, FaLaptopCode, FaBriefcase, FaLightbulb } from "react-icons/fa";


function ProfileSection() {
  return (

    <section className="profile-wrapper  profile-push">
      

      {/* TOP FLEX SECTION */}
      <div className="profile-top">

        <div className="profile-text">
          <h1>VIPUL DAVIS</h1>
          <h3 className="profile-subtitle">An enthusiastic visual creator.</h3>


          <div className="profile-tags">
            <span>Video Editor</span>
            <span>15 / 09 / 2005</span>
          </div>
        </div>

        <div className="profile-image">
          <img src={profileImg} alt="Vipul" />
        </div>

      </div>

      {/* CONTENT GRID */}
<div className="profile-cards">

  <div className="info-card">
    <h3><FaTools /> SKILLS</h3>
    <ul>
      <li>Video Editing</li>
      <li>Thumbnail Designing</li>
      <li>Poster Designing</li>
      <li>Videography & Photography</li>
      <li>Live Streaming (Basic)</li>
    </ul>
  </div>

  <div className="info-card">
    <h3><FaLaptopCode /> SOFTWARES</h3>
    <ul>
      <li>DaVinci Resolve — Video Editing</li>
      <li>Canva — Designing</li>
      <li>OBS Studio — Live Streaming</li>
    </ul>
  </div>

  <div className="info-card">
    <h3><FaBriefcase /> EXPERIENCE</h3>

    <p className="exp-title">
      Video Editor & Thumbnail Designer
    </p>

    <span className="exp-year">2020 — Present</span>

    <ul>
      <li>Edited YouTube focused content</li>
      <li>Collaborated with multiple creators</li>
      <li>Maintained strong visual consistency</li>
      <li>Handled live stream edits & highlights</li>
      <li>Applied cinematic storytelling principles</li>
    </ul>
  </div>

  <div className="info-card">
    <h3><FaLightbulb /> WORK PHILOSOPHY</h3>
    <ul>
      <li>Clean and purposeful edits</li>
      <li>Smooth pacing & viewer retention</li>
      <li>Click optimized thumbnails</li>
      <li>Clear communication & fast delivery</li>
    </ul>
  </div>

</div>



      {/* CONTACT STRIP */}

      <div className="profile-contact">
        <span>📞 +91 9676217173</span>
        <span>✉ vipuldavis47@gmail.com</span>
        <span>📸 vipul.mov</span>
        <span>🌐 vsco.co/davisvipul</span>
      </div>

    </section>
  )
}

export default ProfileSection
