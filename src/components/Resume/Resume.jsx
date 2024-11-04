import React from 'react'
import './Resume.css';
import aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  aos.init();
  return (
    <div className='container top-content' data-aos="fade-in" data-aos-duration="1000">
      <h1>Resume</h1>
      <p>"As a skilled developer, I specialize in Backend Development.
         I'm passionate about creating efficient and scalable solutions that solve real-world problems."</p>
      <div className='resume container'>
        <div className="rows">
          <div className="column" data-aos="fade-up" data-aos-duration="1000">
            <h2>Summary</h2>
            <div className="column-data">
              <h3 className="column-title">Devaraj</h3>
              <span>
              Experienced Backend Developer with 2+ years of experience in developing robust and scalable backend systems.
               Proficient in NodeJS and database management systems [e.g., MySQL, PostgreSQL].
               Skilled in API development, data modeling, and performance optimization.
              </span>
              <ul>
                <li>Karur</li>
                <li>+91 8248277370</li>
                <li>deva.arcee@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="column" data-aos="fade-up" data-aos-duration="1200">
            <h2>Education</h2>
            <div className="column-data">
              <h3 className="column-title">Master of Computer Applications</h3>
              <h4 className='column-sub'>2022 - 2024</h4>
              <span className='column-sub'>
              Alagappa University
              </span><br/><br />
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium, eaque labore consequatur minima necessitatibus? Minima, a libero modi deleniti, ipsa, consectetur esse voluptate corporis velit officiis fugit quos?</span>
            </div>
            <div className="column-data">
              <h3 className="column-title">Bachelor of Computer Applications</h3>
              <h4 className='column-sub'> 2019 - 2022</h4>
              <span className='column-sub'>
                Bharathidasan University
              </span><br/><br />
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, in earum, eos perferendis sint, beatae reprehenderit ullam alias inventore quibusdam recusandae sed? Facere necessitatibus repellendus vero doloremque, assumenda odio molestiae.</span>
            </div>
          </div>
        </div>

        <div className="rows">
          <div className="column" data-aos="fade-up" data-aos-duration="1100">
            <h2 >Professional Experience</h2>
            <div className="column-data">
              <h2 className="column-title">Backend Developer</h2>
              <span className='column-sub'>2022-present</span><br />
              <span className='column-sub'>karur</span>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, voluptatum culpa minus dignissimos minima quod</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores harum illum ad neque voluptatem</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum mollitia voluptatum minima iure labore laborum nihil quidem doloremque officiis minus iusto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume