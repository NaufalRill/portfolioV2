import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div class="nav">
        <div class="logo">
          <a href="/"><span>Naufal</span>{" "}<span class="highlight-span">Portfolio</span></a>
        </div>

        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolios">Portfolio</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1lj5mXUAnyGdVdbTcRHRnY3TD8c5LmaXO/view?usp=sharing" >
                <button class="btn">Resume</button>
              </a></li>
          </ul>
        </nav>

        <div class="burger">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar