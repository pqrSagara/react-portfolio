import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import ParticlesBackground from './components/particles/ParticlesBackground'

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />

    </>
  )
}

export default App