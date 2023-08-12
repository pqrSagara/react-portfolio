import React from 'react'
import './about.css'
import { useInView } from 'react-intersection-observer'
import xSvg from '../../assets/x.svg'
import lineSvg from '../../assets/line.svg'
import portfolioPic from '../../assets/portfoliopic.jpg'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (

    <section id='about'>


      <div ref={ref}>
        <h1 className={`opacity ${inView ? 'h1Fade' : ''}`}>About <br /> <span>Me</span></h1>
        <div className="container about__container">
          <div className={`about__me ${inView ? 'h1Fade' : ''}`}>
            <div className={`about__me-image ${inView ? 'rotatePictest' : ''}`}>
              <img src={portfolioPic} alt='About' />
            </div>
          </div>

          <div ref={ref} className='test'>
            <img src={xSvg} className={`xSvg ${inView ? 'animateX' : ''}`}></img>
            <img src={lineSvg} className={`lineSvg ${inView ? 'animateLine' : ''}`}></img>
          </div>
          <div className={`about__content ${inView ? 'h1Fade' : ''}`}>
            <p>
              Hi, I'm Karlo O. Arayata. Nice to see you here!
            </p>

            <p className='midLine'>I am a software/web developer from Cavite, Philippines. I gained an intereset in
              programming back in 2012 when I was 15 years old while playing a game called Ragnarok Online, where I managed to create, develop
              and host my own private server.
            </p>

            <p>
              In my spare time I upskill, contribute and develop on my projects,
              quote and build PCs for friends, and play games.
              I play semi-competitively on multiple games and enjoy learning new trending techs!
            </p>

          </div>
        </div>
      </div>
    </section >
  )
}

export default About