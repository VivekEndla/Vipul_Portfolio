import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { HashLink } from "react-router-hash-link";


function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <nav className="main-navbar">
        <Link to="/" className="nav-logo">
  VIPUL <span>DAVIS</span>
</Link>


        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </div>
      </nav>

      {/* FULLSCREEN MENU */}

      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        {/* CLOSE BUTTON */}

        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          CLOSE ✕
        </div>

        {/* MENU LINKS */}

        <div className="menu-links">
          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/portfolio">
            Portfolio
          </Link>

          <Link onClick={() => setMenuOpen(false)} to="/AboutMe">
            About Me
          </Link>
          <HashLink
  smooth
  to="/#footer"
  onClick={() => setMenuOpen(false)}
>
  Contact Me
</HashLink>
    
        </div>
      </div>
    </>
  );
}

export default NavBar;
