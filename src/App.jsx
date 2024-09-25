import { useState } from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
import Services from './components/Services/Services'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './index.css'

function App() {

  return (
    <div>
      <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/contact" element={<Contact /> } />
                <Route path="/resume" element={<Resume /> } />
                <Route path="/project" element={<Projects /> } />
                <Route path='/services' element={<Services/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App
