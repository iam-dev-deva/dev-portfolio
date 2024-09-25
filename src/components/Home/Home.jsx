import React from 'react'
import './Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaSkype, } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import Footer from '../Footer/Footer';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Photographer', 'Editor', 'Travler'],
        loop: 0,
        delaySpeed: 1500,
        deleteSpeed: 50,
    })
    return (
        <div>
        <div className='home container'>
            <div className='home-text'>
                <h1>Devaraj</h1>
                <p className='home-parah'>I'm <span className="typed">{text}</span><Cursor /><span></span></p>
                <div className="social-links">
                    <a className='skype' target='blank' href="https://join.skype.com/invite/qlUM32TuforC"><FaSkype /></a>
                    <a className='email' target='blank' href="mailto:deva.arcee@gmail.com"><MdEmail /></a>
                    <a className='git' target='blank' href="https://github.com/iam-dev-deva"><FaGithub /></a>
                    <a className='linkedin' target='blank' href="https://www.linkedin.com/in/devaraj-selvam/"><FaLinkedin /></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home