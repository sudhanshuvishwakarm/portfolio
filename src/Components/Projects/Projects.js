import React from 'react'

export default function Projects() {
  return (
    <section id='projects' className='flex flex-col items-center justify-center h-auto text-black bg-[#ffffff] md:gap-y-20  xs:gap-y-12  '>
        <div>
        <h1 className='xs:text-[22pt] leading-[32pt] text-center mt-10'>PROJECTS</h1>
        <p className="font-normal p-5 lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p></div>
        <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true" className=' flex items-center   md:w-[1100px] justify-center  md:container xs:flex-col md:flex md:flex-row'> 
            <img className='md:h-[300px] xs:h-[200px]  w-auto bg-white' src="/Images/projectus.png" alt="#" />
            <div className='flex flex-col items-center justify-center '>
                <p className='p-5 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iure illum velit minus accusamus molestiae quas, provident sapiente quam! Dolor aliquam recusandae sequi molestiae illum dolore, eius labore nostrum obcaecati.</p>
                <button className='px-5 py-0 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'><a href="https://apnacapitalfinance.in/" target='_blank'> Visit Website <i className=" fa fa-thin fa-angle-right"></i> </a></button>
            </div>
        </div>
        <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true" className=' flex items-center  md:w-[1100px] justify-center  md:container xs:flex-col md:flex md:flex-row'> 
            <img className='md:h-[300px] xs:h-[200px]  w-auto bg-white' src="/Images/projectus.png" alt="#" />
            <div className='flex flex-col items-center justify-center '>
                <p className='p-5 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iure illum velit minus accusamus molestiae quas, provident sapiente quam! Dolor aliquam recusandae sequi molestiae illum dolore, eius labore nostrum obcaecati.</p>
                <button className='px-5 py-0 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'>Visit Website <i className=" fa fa-thin fa-angle-right"></i></button>
            </div>
        </div>
        <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true" className=' flex items-center  md:w-[1100px] justify-center  md:container xs:flex-col md:flex md:flex-row'> 
            <img className='md:h-[300px] xs:h-[200px]  w-auto bg-white' src="/Images/projectus.png" alt="#" />
            <div className='flex flex-col items-center justify-center '>
                <p className='p-5  font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione iure illum velit minus accusamus molestiae quas, provident sapiente quam! Dolor aliquam recusandae sequi molestiae illum dolore, eius labore nostrum obcaecati.</p>
                <button className='px-5 py-0 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'>Visit Website <i className=" fa fa-thin fa-angle-right"></i></button>
            </div>
        </div>
       
       
        
        </section>
  )
}
