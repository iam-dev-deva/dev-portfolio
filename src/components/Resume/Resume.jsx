import React from 'react'
import './Resume.css';

const Resume = () => {
  return (
    <div className='container top-content'>
      <h1>Resume</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis nam perferendis adipisci maiores non similique optio autem minus suscipit
        , ab rem ullam quaerat, nisi itaque vel ad sunt voluptate.</p>
      <div className='resume container'>
        <div className="rows">
          <div className="column">
            <h2>Summary</h2>
            <div className="column-data">
              <h3 className="column-title">Deva</h3>
              <span>
                Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and
                developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
              </span>
              <ul>
                <li>Karur</li>
                <li>123456789</li>
                <li>deva@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="column">
            <h2>Education</h2>
            <div className="column-data">
              <h3 className="column-title">MCA</h3>
              <h4 className='column-sub'>2022 - 2024</h4>
              <span className='column-sub'>
                arts and sciend collage
              </span><br />
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus aspernatur accusantium, eaque labore consequatur minima necessitatibus? Minima, a libero modi deleniti, ipsa, consectetur esse voluptate corporis velit officiis fugit quos?</span>
            </div>
            <div className="column-data">
              <h3 className="column-title">BCA</h3>
              <h4 className='column-sub'> 2019 - 2022</h4>
              <span className='column-sub'>
                arts and sciend collage
              </span><br />
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, in earum, eos perferendis sint, beatae reprehenderit ullam alias inventore quibusdam recusandae sed? Facere necessitatibus repellendus vero doloremque, assumenda odio molestiae.</span>
            </div>
          </div>
        </div>

        <div className="rows">
          <div className="column">
            <h2 >Professional Experience</h2>
            <div className="column-data">
              <h2 className="column-title">Backend Developer</h2>
              <span className='column-sub'>2022-present</span><br />
              <span className='column-sub'>karur</span>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume