import React from 'react'
import './About.css'
import {BiChevronRight } from 'react-icons/bi'
import profile_img from '../../assets/profile-img.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className='top-content'>
        <h1>About</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, consequuntur eius dolorem dolores animi. Natus similique,
          fugit ullam quaerat at maiores id minima neque totam nam doloremque quia incidunt.</p>
      </div>
      <div className="about">
        <div className="bio-image">
          <img src={profile_img} alt="" />
        </div>
        <div className="content">
          <div className='bio-data-heading'>
            <h2>Backend & Web Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, consequuntur</p>
          </div>
          <div className="bio-data-rows">
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight/><b>BirthDay: </b> <span>1 April 2000</span></li>
                <li><BiChevronRight/><b>Website:</b><span> www.example.com</span></li>
                <li><BiChevronRight/><b>Phone:</b><span> 1234567890</span></li>
              </ul>
            </div>
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight/><b>Age: </b> <span>20</span></li>
                <li><BiChevronRight/><b>Degree:</b><span> Karur</span></li>
                <li><BiChevronRight/><b>Email:</b> <span>example@example.com</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About