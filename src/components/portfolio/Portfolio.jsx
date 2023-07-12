import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Portfolio</h1>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio2} alt="" />
          </div>
          <h3>Lyceum Online Completion</h3>
          <div className="a">
            <p>An online web app for processing late exam completion process</p>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="a"></div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="p"></div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={portfolio1} alt="" />
          </div>
          <h3>Project title</h3>
          <div className="p"></div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio