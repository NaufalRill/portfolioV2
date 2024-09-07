import React from 'react'
import './Portfolio.css'
import PortfolioImage from '../Image/portfolios-1.jpg'

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
          <img src={PortfolioImage} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>Website 1</h4>
              <a href="/" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 
                    .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>React</div>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure consectetur explicabo consequatur tenetur
              architecto est earum blanditiis quaerat ducimus enim!</p>

          </div>
        </div>

         {/*Portfolio 2*/}
        <div className="portfolio">
          <div className="portfolio-cover">
          <img src={PortfolioImage} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>Website 1</h4>
              <a href="/" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>React</div>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure consectetur explicabo consequatur tenetur
              architecto est earum blanditiis quaerat ducimus enim!</p>

          </div>
        </div>

         {/*Portfolio 3*/}
        <div className="portfolio">
          <div className="portfolio-cover">
          <img src={PortfolioImage} alt=''/>
          </div>
          <div className="portfolio-info">
            <div className="portfolio-title">
              <h4>Website 1</h4>
              <a href="/" className="portfolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            <div className="portfolio-tags">
              <div>React</div>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure consectetur explicabo consequatur tenetur
              architecto est earum blanditiis quaerat ducimus enim!</p>

          </div>
        </div>


      </div>

    </div>
  </section>
    </div>
  )
}

export default Portfolio