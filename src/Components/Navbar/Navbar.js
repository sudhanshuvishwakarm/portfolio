import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll'
export default function Navbar() {

  const [state,setState]=useState(window.innerWidth>640?true:false)

  
  return (
    <div className="sticky top-0 bg-black" >
      <nav className="flex items-center justify-between md:h-[75px] xs:h-[70px] xs:px-4 md:px-[64px]  2xl  bg-black">
        <div onClick={()=>setState(!state)} className="left ">
          {!state?<button id="menu"  className="sm:hidden w-[48px] h-[48px] flex justify-center items-center flex-col">
            <div className="bg-white bar"></div>
            <div className="bg-white bar"></div>
            <div className="bg-white bar"></div>
           
          </button>:window.innerWidth<640 && <i className="px-2 text-4xl text-white fa-solid fa-xmark"></i>}
        </div>
         <img className="md:h-[50px] xs:h-[40px] my-auto text-2xl font-semibold text-white md:mx-2" src="/Images/sv-high-resolution-logo-transparent.png" alt="Error"/> 
       {state &&  <ul className="ml-auto text-white sm:flex" id='navElement' data-aos="fade-left">

<li   className="mx-2 cursor-pointer hover:underline"><Link to="home"
  spy={true}
  smooth={true}
  offset={-100}
  duration={1000} >Home</Link></li>
<li   className="mx-2 cursor-pointer hover:underline"><Link to="about"
  spy={true}
  smooth={true}
  offset={-50}
  duration={1000} >About</Link></li>
<li   className="mx-2 cursor-pointer hover:underline"><Link to="skill"
  spy={true}
  smooth={true}
  offset={-65}
  duration={1000} >Skills</Link></li>
<li   className="mx-2 cursor-pointer hover:underline"><Link to="projects"
  spy={true}
  smooth={true}
  offset={-70}
  duration={1000} >Projects</Link></li>
<li  className="mx-2 cursor-pointer hover:underline"><Link to="contact"
  spy={true}
  smooth={true}
  offset={-50}
  duration={1000} >Contact</Link></li>

</ul>
}
       
      </nav>
    </div>
  )
}
