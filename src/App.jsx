import React from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import { ParallaxProvider } from "react-scroll-parallax";


const App = () => {
  return (
    <div>
      <Navbar />
      <ParallaxProvider>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </ParallaxProvider>

    </div>
  )
}

export default App

