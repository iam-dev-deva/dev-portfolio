import React from 'react'
import './About.css'
import { BiChevronRight, BiFile } from 'react-icons/bi'
import profile_img from '../../assets/profile-img.jpg'
import { GoProject } from 'react-icons/go'
import { GiSuitcase } from 'react-icons/gi'
import { CgCode } from 'react-icons/cg'
import CountUp from 'react-countup';
import aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  <CountUp start={0} end={100} delay={0} enableScrollSpy= {true}>
    {({ countUpRef }) => (
      <span ref={countUpRef} />
    )}
  </CountUp>
  aos.init()
  return (
    <div className='container'>
      <div className='top-content' data-aos='fade-in' data-aos-duration='1000'>
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, consequuntur eius dolorem dolores animi. Natus similique,
          fugit ullam quaerat at maiores id minima neque totam nam doloremque quia incidunt.</p>
      </div>
      <div className="about" data-aos='fade-up' data-aos-duration='1000'>
        <div className="bio-image">
          <img src={profile_img} alt="" />
        </div>
        <div className="content">
          <div className='bio-data-heading'>
            <h2>Backend & Web Developer</h2>
            <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bio-data-rows">
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight /><b>BirthDay: </b><span>1 April 2000</span></li>
                <li><BiChevronRight /><b>Website:</b><span> www.example.com</span></li>
                <li><BiChevronRight /><b>Phone:</b><span> 1234567890</span></li>
              </ul>
            </div>
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight /><b>Age: </b> <span>20</span></li>
                <li><BiChevronRight /><b>Degree:</b><span> Karur</span></li>
                <li><BiChevronRight /><b>Email:</b> <span>example@example.com</span></li>
              </ul>
            </div>
            <p className='py-3'>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut.
              Nulla accusantium dolor incidunt officia tempore.Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.
              Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
      <div className="stats" data-aos='fade-up' data-aos-duration='1200'>
        <div className="stat">
          <span className='stat-icon'><GoProject /></span>
          <div className="item">
            <h2><CountUp start={0} end={5} delay={0} enableScrollSpy= {true} /></h2>
            <span>Projects Done</span>
          </div>
        </div>
        <div className="stat">
          <span className='stat-icon'><BiFile /></span>
          <div className="item">
            <h2><CountUp start={0} end={220} delay={0} enableScrollSpy= {true} /></h2>
            <span>Files Committed</span>
          </div>
        </div>
        <div className="stat">
          <span className='stat-icon'><GiSuitcase /></span>
          <div className="item">
            <h2><CountUp start={0} end={2} delay={0} enableScrollSpy= {true} /></h2>
            <span>Years of Experience</span>
          </div>
        </div>
        <div className="stat">
          <span className='stat-icon'><CgCode /></span>
          <div className="item">
            <h2><CountUp start={0} end={10} delay={0} enableScrollSpy= {true} /></h2>
            <span>Language Worked</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About