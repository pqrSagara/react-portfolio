import React from 'react'
import './contacts.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'


const Contacts = () => {
  return (
    <section id='contacts'>
      <h1>Let's Connect</h1>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <BiLogoGmail className='contact__option-icon' />
            <a href='mailto:karloarayata@gmail.com'></a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon' />
            <a href='mailto:karloarayata@gmail.com'></a>
          </article>
          <article className='contact__option'>
            <AiOutlineGithub className='contact__option-icon' />
            <a href='mailto:karloarayata@gmail.com'></a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Contacts