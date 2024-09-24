import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container  ${sticky? `dark-nav` : ''}`} >
        {/* <img className='logo' src={logo} alt="" /> */}
        <span className='logo'>Portfolio</span>
        <ul>
            <li class="active">Home</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Resume</li>
            <li className='nav-item'>Services</li>
            <li className='nav-item'>Projects</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default NavBar