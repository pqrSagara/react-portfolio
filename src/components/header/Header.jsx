import React from 'react'
import './header.css'
import Resume from './Resume'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! I am</h5>
        <h1>Karlo Arayata</h1>
        <h5 className="text-light">I'm a fullstack developer</h5>
        <Resume/>


      </div>
    </header>
  )
}

export default Header