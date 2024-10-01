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
                <p className='p-5 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>I contributed to the "Apna Capital Finance" project, a financial services website, by focusing on creating a responsive design, ensuring the site adapts seamlessly across various devices. Additionally, I played a key role in enhancing user experience through intuitive design, making the platform accessible and visually appealing on all screen sizes.</p>
                <button className='px-5 py-0 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'><a href="https://apnacapitalfinance.in/" target='_blank'> Visit Website <i className=" fa fa-thin fa-angle-right"></i> </a></button>
            </div>
        </div>
        <div data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true" className=' flex items-center   md:w-[1100px] justify-center  md:container xs:flex-col md:flex md:flex-row'> 
            <img className='md:h-[300px] xs:h-[200px]  w-auto bg-white' src="/Images/file.png" alt="#" />
            <div className='flex flex-col items-center justify-center '>
                <p className='p-5 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>I developed "Resume Craft," a beginner-level project that enables users to generate professional resumes efficiently, streamlining the process with easy-to-use functionality for creating customized resumes.</p>
                <button className='px-5 py-0 xs:py-1.5 text-black border-[2px] border-black hover:bg-black hover:text-white rounded-sm  text-bold'><a href="https://sudhanshuvishwakarm.github.io/resumecraft" target='_blank'> Visit Website <i className=" fa fa-thin fa-angle-right"></i> </a></button>
            </div>
        </div>
       
       
       
        
        </section>
  )
}
