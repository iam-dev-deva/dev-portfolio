import { useState } from 'react'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <div>
      <NavBar/> 
      <Home/>
      <div className="container">
      </div>
    </div>
  )
}

export default App
