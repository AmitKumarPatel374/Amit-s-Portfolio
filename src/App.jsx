import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Achievements from './components/achievements/Achievements'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Certifications from './components/Certifications/Certifications'

const App = () => {
  return (
    <div className="min-h-screen bg-background text-on-background">
       <Navbar />
       <Hero />
       <About />
       <Experience />
       <Projects />
       <Skills />
       <Achievements />
       <Certifications />
       <Contact />
       <Footer />
    </div>
  )
}

export default App
