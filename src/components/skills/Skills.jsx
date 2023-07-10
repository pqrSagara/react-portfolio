import React from 'react'
import './skills.css'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (

    <section id='skills'>
      <div ref={ref} className='container'>
        <span className={`header ${inView ? 'animate' : ''}`}><h1>Skills <br />&<br /> Technologies</h1></span>
        <div className='list'>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>PHP</span>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>Javascript</span>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>React</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Node</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Java</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Azure</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>HTML</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>Wordpress</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>MySQL</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>MSSQL</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>Kotlin</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>CSS</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>Laravel</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>Android Development</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>IIS</span>
        </div>
      </div>

    </section >

  )
}

export default Skills