import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container  ${sticky? `dark-nav` : ''}`} >
        <img className='logo' src={logo} alt="" />
        {/* <span className='logo'>Portfolio</span> */}
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li className="nav-item"> <NavLink activeclassname="active" to='/'>Home</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/about' >About</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/resume'>Resume</NavLink ></li>
            <li className='nav-item'><NavLink activeclassname="active" to='/project'>Projects</NavLink ></li>
            <li className='nav-item'><NavLink  to='/contact'>Contact</NavLink ></li>
        </ul>
      <GiHamburgerMenu  className='menu-icon' onClick={toggleMenu} />

    </nav>
  )
}

export default NavBar