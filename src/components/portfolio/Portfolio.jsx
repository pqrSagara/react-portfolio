import React from 'react'
import './portfolio.css'
import { projectData } from './projects.js'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1>Projects</h1>
      <div className='container portfolio__container'>
        {projectData.map((element) => {
          return (
            <article key={element.id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={element.image} alt={element.title} />
              </div>
              <div class="titleContainer">
                <h3>{element.title}</h3>
                <div class="links">
                  <a className='projectLinks' href={element.github}><BsGithub /></a>
                  <a className='projectLinks' href={element.demo}><AiOutlineEye />
                  </a>
                </div>

              </div>
              <p>{element.desc}</p>
            </article>
          )
        }
        )}


      </div>
    </section>
  )
}

export default Portfolio