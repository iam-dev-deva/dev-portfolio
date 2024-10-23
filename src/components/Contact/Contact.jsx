import React from "react";
import "./Contact.css";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import {  BiShareAlt } from "react-icons/bi";
import { FaLinkedin, FaGithub, FaSkype, } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
const Contact = () => {
  return (
    <div className="container top-content">
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
        omnis? Quos, ea facere error repellat obcaecati mollitia aliquid nisi ut
        sed aperiam, commodi nostrum facilis tenetur doloremque modi laboriosam
        cum?
      </p>
      <div className="contact-section">
        <div className="contact-item">
          <FaMapLocation />
          <h4>Address</h4>
          <span>A108 Adam Street, New York, NY 535022</span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <h4>Call Me</h4>
          <span>8248277370</span>
        </div>
        <div className="contact-item">
          <MdMail />
          <h4>Email Me</h4>
          <span>deva.arcee@gmail.com</span>
        </div>
        <div className="contact-item">
          <BiShareAlt />
          <h4>Social Profiles</h4>
          <div className="social">
          <a className='skype' target='blank' href="https://join.skype.com/invite/qlUM32TuforC"><FaSkype /></a>
          <a className='email' target='blank' href="mailto:deva.arcee@gmail.com"><MdEmail /></a>
          <a className='git' target='blank' href="https://github.com/iam-dev-deva"><FaGithub /></a>
          <a className='linkedin' target='blank' href="https://www.linkedin.com/in/devaraj-selvam/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
