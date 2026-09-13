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
          <p>I am an Informatics undergraduate and Web Developer experienced in the complete digital product lifecycle. 
            Combining a strong foundation in UI/UX design with technical proficiency in the React and Laravel 
            ecosystems, I specialize in architecting scalable, responsive web applications and SaaS solutions 
            from initial requirement gathering to deployment.</p>
        </div>
        <div className="hero-right">
          <img src={hero} alt="" height="350px" />
        </div>
      </section>
    </div>
  )
}

export default Hero