import React, { useEffect } from 'react'
import './header.css'
import Resume from './Resume'
import iconPortfolio from '../../assets/iconportfolio.png'
import iconPortfolio2 from '../../assets/iconportfolio2.png'
import iconPortfolio3 from '../../assets/iconportfolio3.png'
import iconPortfolio4 from '../../assets/iconportfolio4.png'
import iconPortfolio5 from '../../assets/iconportfolio5.png'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Header = () => {

  useEffect(() => {
    let interval = null;
    const h1Element = document.querySelector("h1");

    const handleMouseOver = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    h1Element.addEventListener("mouseover", handleMouseOver);

    return () => {
      clearInterval(interval);
      h1Element.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <header>
      <div className='logo'>
        <a href='https://karlo-arayata.vercel.app/' className='logoA'>
          <img id='logoImg' src={iconPortfolio} alt='' />
          <img id='logoImg2' src={iconPortfolio2} alt='' />
          <img id='logoImg3' src={iconPortfolio3} alt='' />
          <img id='logoImg4' src={iconPortfolio4} alt='' />
          <img id='logoImg5' src={iconPortfolio5} alt='' />
        </a>
      </div>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1 data-value="KARLO ARAYATA" className='hacked'>KARLO ARAYATA</h1>
        <h5 className="text-light">Web Developer</h5>
        <Resume />


      </div>
    </header>
  )
}

export default Header