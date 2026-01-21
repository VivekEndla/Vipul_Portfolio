import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './index.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

// INIT AOS
AOS.init({
  duration: 1900,
  once: true,
  easing: 'ease-in-out'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
