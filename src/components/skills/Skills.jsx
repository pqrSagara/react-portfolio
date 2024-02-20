import React from 'react'
import './skills.css'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (

    <section id='skills'>
      <div ref={ref} className='container'>
        <span className={`header ${inView ? 'animate' : ''}`}><h1>Skills <br />&<br /> Technologies</h1></span>
        <div className='list'>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>PHP</span>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>Javascript</span>
          <span className={`skillBlocks ${inView ? 'top1' : ''}`}>React.js</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Node.js</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Java</span>
          <span className={`skillBlocks ${inView ? 'top2' : ''}`}>Azure</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>HTML</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>Wordpress</span>
          <span className={`skillBlocks ${inView ? 'top3' : ''}`}>MySQL</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>MSSQL</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>Kotlin</span>
          <span className={`skillBlocks ${inView ? 'top4' : ''}`}>CSS</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>Laravel</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>Android Studio</span>
          <span className={`skillBlocks ${inView ? 'top5' : ''}`}>IIS</span>
          <span className={`skillBlocks ${inView ? 'top6' : ''}`}>jQuery</span>
          <span className={`skillBlocks ${inView ? 'top6' : ''}`}>Git</span>
          <span className={`skillBlocks ${inView ? 'top6' : ''}`}>SASS</span>
          <span className={`skillBlocks ${inView ? 'top7' : ''}`}>Firebase</span>
          <span className={`skillBlocks ${inView ? 'top7' : ''}`}>Drupal</span>
          <span className={`skillBlocks ${inView ? 'top7' : ''}`}>Visual Basic</span>
        </div>
      </div>

    </section >

  )
}

export default Skills