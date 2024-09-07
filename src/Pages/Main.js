import React, { useEffect } from 'react';
import './Main.css';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Services from '../Components/Services/Services';
import Portfolio from '../Components/Portfolio/Portfolio';
import Education from '../Components/Education/Education';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Main = () => {

  // useEffect to handle burger toggle and responsive navigation
  useEffect(() => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    const handleNavSlide = () => {
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    };

    // Add event listener to burger menu
    if (burger) {
      burger.addEventListener("click", handleNavSlide);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (burger) {
        burger.removeEventListener("click", handleNavSlide);
      }
    };
  }, []);

  // useEffect to reset forms before unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };

    // Add beforeunload event listener
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <header>
        <div className='main-container'>
          <Navbar />
          <Hero />
        </div>
      </header>
      <Services />
      <Portfolio />
      <Education />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
