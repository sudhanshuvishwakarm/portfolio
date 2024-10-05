import React from 'react'
import {Link} from 'react-scroll'
export default function About() {
  return (

    <>
      <section id='about'  className=' flex flex-col items-center justify-center xs:mb-10 xs:mt-3 md:mt-0 md:h-[700px] text-black bg-white gap-y-5'>
        <div>
        <h1 className='xs:text-[22pt] leading-[32pt] text-center mt-12 mb-3'>ABOUT ME</h1>
        <p className="className=' px-6 font-normal lg:text-[14pt] lg:leading-[24xpt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p></div>
        <h2 className='xs:text-[15pt] leading-[32pt] text-center'>Get to know about me!</h2>
        <div className="flex items-center justify-center gap-10 md:w-[1100px] md:mx-[500px] md:container xs:flex-col md:flex md:flex-row">
          <img data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true" className='md:h-[350px] xs:h-[250px] md:px-0 xs:px-5 w-auto' src="./Images/IMG-20231219-WA0003.jpg" alt="#" />
        <p data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true" className=" px-6 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

          Moving forward for learning MERN Stack. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming

          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        </div>
        <Link to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000} >
        <button 
          className='px-8 py-2 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'>Resume</button></Link>
      </section>


    </>



  )
}
