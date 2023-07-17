import React from 'react'
import resume from '../../assets/resumelatest.pdf'
import { FaFileDownload } from 'react-icons/fa'

function Resume() {
  return (
    <div className='Resume'>
      <a href={resume} download className='btn margin-right'> <FaFileDownload /> Resume</a>
      <a href='#footer' className='btn btn-primary'>Get in touch</a>
    </div>
  )
}

export default Resume