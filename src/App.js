import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
// import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contactus from './Components/Contactus/Contactus'
import Skills from './Components/Skills/Skills'



const App = () => {
  return (
    <div>
    <Navbar id="projects"></Navbar>
    <Home></Home>
    <About ></About>
     <Skills></Skills> 
    <Projects></Projects>
    <Contactus></Contactus>

    

    </div>
  )
}

export default App
