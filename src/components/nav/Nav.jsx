import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { BiMessageDetail } from 'react-icons/bi'
import { useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { MdWorkOutline } from 'react-icons/md'
import { MdOutlineLibraryAddCheck } from 'react-icons/md'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#top' onClick={() => setActiveNav('')}><MdKeyboardArrowUp /></a>
      <a href='#' onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}><BiBookBookmark /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineLibraryAddCheck /></a>
      <a href='#footer' onClick={() => setActiveNav('')}><MdKeyboardArrowDown /></a>
    </nav>
  )
}

export default Nav