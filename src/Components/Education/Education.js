import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div>
        <section id="skills">
    <div class="skills main-container">
      <h3 class="pre-title">My Learning Journey</h3>
      <h1 class="section-title">Skills & Education</h1>

      <div class="skills-grid">
        <div class="skills-left">

          {/*Education 1*/}
          <div class="education">
            <div class="line">
              <div></div>
            </div>

            <div class="education-info">
              <h4 class="education-title">Universitas Muhammadiyah Malang</h4>
              <p>Fifth Semester of Software Engineering Bachelor's Degree</p>
              <h4 class="education-year">2022-2026</h4>
            </div>
          </div>

          {/*Education 2*/}
          <div class="education">
            <div class="line">
              <div></div>
            </div>

            <div class="education-info">
              <h4 class="education-title">SMKN 1 Tanah Grogot</h4>
              <p>Major in Software Engineering</p>
              <h4 class="education-year">2019-2022</h4>
            </div>
          </div>


        </div>
        <div class="skills-right">
          <p>I graduated from a vocational high school (SMK) with a major in Software Engineering (Rekayasa Perangkat
            Lunak - RPL),
            which provided me with a strong technical foundation and practical experience in software development. My
            passion for technology
            and coding led me to further my education by pursuing a degree in Informatics at university, where I
            deepened my knowledge of computer
            science and honed my skills in various programming languages and tools.<br/>
            <br/>
            Over the years, I have become highly proficient in HTML and CSS, allowing me to create well-structured and
            visually appealing web pages.
            My expertise in JavaScript, combined with my experience using the React JS framework, enables me to build
            dynamic, responsive, and
            interactive user interfaces. I also have a strong grasp of UI/UX design principles, which I apply using
            Figma to create intuitive and user-friendly designs.
          </p>

          <div class="skills-list">
            <ul>
              <li>HTML 5</li>
              <li>CSS 3</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Education