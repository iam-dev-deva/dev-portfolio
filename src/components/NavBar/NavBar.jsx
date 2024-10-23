import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {NavLink } from 'react-router-dom';

const NavBar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container  ${sticky? `dark-nav` : ''}`} >
        <img className='logo' src={logo} alt="" />
        {/* <span className='logo'>Portfolio</span> */}
        <ul>
            <li className="nav-item"> <NavLink activeclassname="active" to='/'>Home</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/about' >About</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/resume'>Resume</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/project'>Projects</NavLink ></li>
            <li><button className='btn'><NavLink  to='/contact'>Contact</NavLink ></button></li>
        </ul>
    </nav>
  )
}

export default NavBar