import React from 'react'
import './Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaSkype, } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Photographer', 'Editor', 'Travler'],
        loop: 0,
        delaySpeed: 1500,
        deleteSpeed: 50,
    })
    return (
        <div className='home container'>
            <div className='home-text'>
                <h1>Devaraj</h1>
                <p className='home-parah'>I'm <span class="typed">{text}</span><Cursor /><span></span></p>
                <div class="social-links">
                    <a className='skype' href="#"><FaSkype /></a>
                    <a className='email' href="#"><MdEmail /></a>
                    <a className='git' href="#"><FaGithub /></a>
                    <a className='linkedin' href="#"><FaLinkedin /></a>
                </div>
            </div>

        </div>
    )
}

export default Home