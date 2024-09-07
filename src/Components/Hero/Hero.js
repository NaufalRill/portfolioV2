import React from 'react'
import './Hero.css'
import './HeroResponsive.css'
import hero from '../Image/hero.jpeg'

const Hero = () => {
  return (
    <div>
        <section id="hero">
        <div className="hero-left">
          <h3 className="intro-title">Hello! My name is</h3>
          <h1 className="hero-name">Naufal Ghifari Ramadhana</h1>
          <p>I am a Front-End Web Developer with a solid background in HTML and CSS, skilled in JavaScript, and
            experienced with the React framework.
            I have worked in the UI/UX department and am eager to apply my abilities in crafting responsive,
            user-centric web applications
            within a dynamic development team.</p>
        </div>
        <div className="hero-right">
          <img src={hero} alt="" height="350px" />
        </div>
      </section>
    </div>
  )
}

export default Hero