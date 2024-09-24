import React from 'react'
import './Home.css'
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ['Developer', 'Photographer', 'Editor', 'Travler'],
        loop: 0,
        delaySpeed:1500,
        deleteSpeed:50,
      })
    return (
        <div className='home container'>
            <div className='home-text'>
                <h1>Devaraj</h1>
                <p className='home-parah'>I'm <span class="typed">{text}</span><Cursor/><span></span></p>
                <div class="social-links">
                    <a href="#"><i class="bi bi-twitter-x"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
            </div>

        </div>
    )
}

export default Home