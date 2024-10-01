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
      <div className="bio-sector">
        <div className="bio-image">
          <img src={profile_img} alt="" />
        </div>
        <div className="bio-data">
          <div className='bio-data-heading'>
            <h2>Backend & Web Developer</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa qui, consequuntur</p>
          </div>
          <div className="bio-data-rows">
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight/><b>BirthDay: </b> 1 April 2000</li>
                <li><BiChevronRight/><b>Website:</b> www.example.com</li>
                <li><BiChevronRight/><b>Phone:</b> 1234567890</li>
              </ul>
            </div>
            <div className="row">
              <ul className="row-data">
                <li><BiChevronRight/><b>Age: </b> 20</li>
                <li><BiChevronRight/><b>Degree:</b> Karur</li>
                <li><BiChevronRight/><b>Email:</b> example@example.com</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About