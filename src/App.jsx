import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import PortfolioPage from './pages/PortfolioPage'
import About from './components/About'


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/AboutMe" element={<About />} />
        {/* <Route path="/Footer" element={<Footer />} /> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App


