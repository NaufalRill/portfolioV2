import React from 'react'
import './Portfolio.css'
import PortfolioImage1 from '../Image/portfolio1.png'
import PortfolioImage2 from '../Image/portfolio2.png'
import PortfolioImage3 from '../Image/portfolio3.jpg'

const Portfolio = () => {
  return (
    <div>
        <section id="portfolios">
    <div className="portfolios main-container">
      <h3 className="pre-title">Portfolio</h3>
      <h2 className="section-title">Featured Portfolio</h2>

      <div className="grid-3">

         {/*Portfolio 1*/}
        <div className="portfolio">
          <div className="portfolio-cover">
          <img src={PortfolioImage1} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>CMS Website for PT Pemuda Handal</h4>
              <a href="https://pemudahandal.com/" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 
                    .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>Typescript</div>
              <div>Laravel</div>
              <div>Tailwind CSS</div>
            </div>

            <p>Developed a comprehensive, web-based Content Management System (CMS) for PT Pemuda Handal Teknologi, 
              a company that sells and rents websites. </p>

          </div>
        </div>

         {/*Portfolio 2*/}
        <div className="portfolio">
          <div className="portfolio-cover">
          <img src={PortfolioImage2} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>Personal Knowledge Management Prototype</h4>
              <a href="https://www.figma.com/proto/A8nDJszWSBwW9NKKdKAhk4/Prototype-PKM?node-id=34-1346&p=f&t=3GKW3mYAJShuMCNL-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>Figma</div>
            </div>

            <p>Design an interactive prototype of a web-based Personal Knowledge Management for students</p>

          </div>
        </div>

         {/*Portfolio 3*/}
        <div className="portfolio">
          <div className="portfolio-cover">
          <img src={PortfolioImage3} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>UMKM Business Profile </h4>
              <a href="https://tahuaan.github.io/" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
            </div>

            <p>Developed a simple local UMKM business profile websites for Pabrik Tahu dan Tempe Aan</p>

          </div>
        </div>


      </div>

    </div>
  </section>
    </div>
  )
}

export default Portfolio