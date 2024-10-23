import { useState } from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Resume from './components/Resume/Resume'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './index.css'
import ScrollToTop from './ScrollToTop'

function App() {

  return (
    <div>
      <Router>
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about"  element={<About />} />
                <Route path="/contact" element={<Contact /> } />
                <Route path="/resume" element={<Resume /> } />
                <Route path="/project" element={<Projects /> } />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default App
