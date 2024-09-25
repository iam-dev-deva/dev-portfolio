import React, { useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../../public/logo.png'
import {Link} from 'react-router-dom';

const NavBar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container  ${sticky? `dark-nav` : ''}`} >
        <img className='logo' src={logo} alt="" />
        {/* <span className='logo'>Portfolio</span> */}
        <ul>
            <li className="nav-item"> <Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/about'>About</Link></li>
            <li className='nav-item'><Link to='/resume'>Resume</Link></li>
            <li className='nav-item'><Link to='/services'>Services</Link></li>
            <li className='nav-item'><Link to='/project'>Projects</Link></li>
            <li><button className='btn'><Link to='/contact'>Contact</Link></button></li>
        </ul>
    </nav>
  )
}

export default NavBar