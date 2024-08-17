import React from 'react'
import { Link } from 'react-scroll'
import "./Home.css";
export default function Home() {
  return (
    <div id='home' className='home flex flex-col items-center justify-center xs:h-[600px]  text-white bg-black gap-y-6'>
      <h1 data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-once="true" className='xs:text-[24pt] leading-[32pt] text-center md:text-5xl '>HEY, I'M <span className='font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text'>SUDHANSHU VISHWAKARMA</span></h1>
      <p className='text-center p-4 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:w-[900px] md:leading-[20pt] text-[12pt] leading-[16pt]' data-aos="fade-left"
        data-aos-duration="3000"
        data-aos-once="true" >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      <Link to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000} >
        <button 
          className='px-8 py-2 font-semibold text-black rounded-sm shadow-lg bg-cyan-500 text-bold hover:relative hover:bottom-2 hover:bg-cyan-500 hover:shadow-cyan-500/80'>WORK</button></Link>


      <Link to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000} ><i className="arow cursor-pointer relative fa fa-chevron-down xs:top-[60px] md:top-[100px] md:text-5xl text-3xl" ></i></Link>




    </div>
  )
}
