import React from 'react'
import './footer.css'
import { SiGmail } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='contacts'>
        <a className='footerItem' href='mailto:karloarayata@gmail.com'><SiGmail className='contact' /></a>
        <a className='footerItem' href='https://github.com/pqrSagara'><AiOutlineGithub className='contact' /></a>
        <a className='footerItem' href='https://www.linkedin.com/in/karlo-arayata-6ba81b218/'><BsLinkedin className='contact' /></a>
      </div>
      <h5>Copyright © 2023 Karlo Arayata - All rights reserved</h5>
    </section>
  )
}

export default Footer