import "../styles/Home.css";
import MarqueeSection from "../components/MarqueeSection";
import homeVideo from "../assets/video/home_page.mp4";
import homeImg from "../assets/images/home.png";
import ptImg from "../assets/images/pt_prof.jpeg";
import cwImg from "../assets/images/cw_prof.jpeg";
import peImg from "../assets/images/pe_prof.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* ================= HERO SECTION ================= */}

      <section className="home-hero">

        {/* BACKGROUND VIDEO */}
        <video
          src={homeVideo}
          autoPlay
          muted
          loop
          playsInline
          className="home-video"
        />

        {/* DARK OVERLAY */}
        <div className="home-overlay"></div>

        {/* MAIN CONTENT */}
        <div className="home-content">

          {/* LEFT TEXT */}
          <div className="home-text">

            <h1>
              MY <span>LIFE'S</span><br />
              RAW FOOTAGE...
            </h1>

            <p>
             Unfinished but beautifully colour graded.
            </p>

            <h2 className="home-name">
              ENDLA VIPUL
            </h2>

          </div>

          {/* RIGHT IMAGE + ARROW */}
          <div className="home-image-box">

            <img src={homeImg} alt="Vipul" />

            {/* <div className="arrow-line"></div> */}

          </div>

        </div>

      </section>

      {/* ================= PORTFOLIO CARDS ================= */}

      <section className="home-cards">

    

        <div className="work-section">

  <h2 className="work-title" ><b>MY WORKS</b></h2>

  <div className="work-grid">

    {/* CLIENT WORK */}

    <Link to="/portfolio#longshort" className="work-card">
      <img src={ptImg} alt="Client Work" />
      <div className="work-overlay">
        <h3>CLIENT WORK</h3>
      </div>
    </Link>

    {/* COLLEGE WORK */}

    <Link to="/portfolio#college" className="work-card">
      <img src={cwImg} alt="College Work" />
      <div className="work-overlay">
        <h3>COLLEGE WORK</h3>
      </div>
    </Link>

    {/* PERSONAL WORK */}

    <Link to="/portfolio#personal" className="work-card">
      <img src={peImg} alt="Personal Work" />
      <div className="work-overlay">
        <h3> PERSONAL WORK</h3>
      </div>
    </Link>

  </div>

</div>


      </section>
      <h2 className="work-title"><b>MY PHOTOGRAPHS</b></h2>
      <MarqueeSection />


    </>
  );
}

export default Home;
