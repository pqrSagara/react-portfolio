import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}><BiBookBookmark /></a>
      <a href='#contacts' onClick={() => setActiveNav('#contacts')}
        className={activeNav === '#contacts' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav