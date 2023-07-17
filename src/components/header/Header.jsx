import React, { useEffect } from 'react'
import './header.css'
import Resume from './Resume'

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