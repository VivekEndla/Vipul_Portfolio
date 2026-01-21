import "../styles/Footer.css";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { TbBrandVsco } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import brandi from "../assets/images/brand_logo.png";

function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* TOP ROW */}
      <div className="footer-top">
        {/* LOGO */}
        <div className="footer-brand">
          <img id="brand" src={brandi} alt="Brand Logo" />
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div className="footer-col">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/AboutMe">About Me</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="footer-bottom">
        {/* CONTACT */}
        <div className="footer-contact">
          <p>Connect with me:</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vipuldavis47@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span style={{ cursor: "pointer" }}>📧 vipuldavis47@gmail.com</span>
          </a>

          <a
            href="tel:+919676217173"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span style={{ cursor: "pointer" }}>📞 +91 9676217173</span>
          </a>
        </div>

        {/* SOCIALS */}
        <div className="footer-socials">
          <a href="https://www.youtube.com/@vipuldavis">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/vipul.mov">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/vipul.devis">
            <FaFacebookF />
          </a>
          <a href="https://x.com/vipul_devis">
            <FaXTwitter />
          </a>
          <a href="https://vsco.co/davisvipul/gallery">
            <TbBrandVsco />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
