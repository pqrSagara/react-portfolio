import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirience from './components/experience/Experience'
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
      <Expirience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  )
}

export default App