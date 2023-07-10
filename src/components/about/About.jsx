import React from 'react'
import './about.css'
import { useInView } from 'react-intersection-observer'
import xSvg from '../../assets/x.svg'
import lineSvg from '../../assets/line.svg'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (

    <section id='about'>
      <div ref={ref} className='test'>
        <img src={xSvg} className={`xSvg ${inView ? 'animateX' : ''}`}></img>
        <img src={lineSvg} className={`lineSvg ${inView ? 'animateLine' : ''}`}></img>
      </div>

      <div ref={ref}>
        <h1 className={`opacity ${inView ? 'h1Fade' : ''}`}>About <br /> <span>Me</span></h1>
        <div className="container about__container">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sint vitae illo, similique, maiores dolore quis quidem magnam rem alias ad illum,
            aspernatur sit. Odio voluptates cumque soluta aut explicabo necessitatibus.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque saepe cupiditate at aliquam eveniet sed distinctio, a
            b magnam porro sit explicabo sunt nam, mollitia tempore voluptatibus,
            nemo vitae in rem!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nostrum amet asperiores eius sunt animi, iure voluptate voluptatum voluptatibus earum,
            voluptas ipsa tempore accusantium inventore nulla nemo molestiae alias. Modi, laudantium reprehenderit
            fuga optio maiores quia enim, perspiciatis placeat alias illo quis doloremque veritatis soluta iusto et iste eligendi assumenda totam?</p>
        </div>
      </div>
    </section >
  )
}

export default About