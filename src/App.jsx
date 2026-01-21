import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import About from "./components/About";

function App() {
  return (
    <>
      {/* Auto scroll to top on route change */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/AboutMe" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
