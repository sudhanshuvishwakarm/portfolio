import React from 'react'

export default function Contactus() {
  return (
    <div >
       <section id="contact" className='flex flex-col items-center justify-center mt-10 text-white bg-black gap-y-3'>
        <div>
        <h1 className='xs:text-[22pt] leading-[32pt] text-center mt-8 mb-3'>CONTACT US</h1>
        {/* <p className="className=' px-6 font-normal lg:text-[14pt] lg:leading-[24xpt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>*/}
        </div> 
        <h2 className='xs:text-[15pt] leading-[32pt] text-center px-[2px]'>Let's build something beautiful together.</h2>
       


      <div className='gap-6 sm:flex sm:container xs:p-4 sm:px-10'>
        <div className='flex flex-col items-center justify-center mx-auto '>
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Location</p>
        {/* <p className=' font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>405/3 Malviya Nagar,  opposite telephone exchange</p> */}
        <p className=' font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>   Indore , Madhya Pradesh</p>
         <br />
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>E-mail</p>
        <p className='p-2 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>sudhanshuvishwakarma2005@gmail.com</p>
        

        </div  >
        <div className='flex flex-col items-center justify-center mx-auto mt-5' >
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt] '>Social</p>
       <div>
        {/* <a href="" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-facebook hover:text-black "></i></a>
       */}
        <a target='_blank' href="https://www.instagram.com/sudhanshu_vishwakarma_777/?hl=en" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-red-500 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-instagram hover:text-black "></i></a>
      <a target='_blank' href="https://Wa.me/+919630798512" className=''> <i className="w-[40px] text-center rounded-[10px] mx-2 text-3xl cursor-pointer hover:bg-emerald-500 border-green-600 hover:shadow-lg hover:shadow-cyan-500/50 fa-brands fa-whatsapp hover:text-black "></i></a>
      
       </div>
       
         <br />
        <p className='p-3 font-bold lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>Contact No.</p>
        <p className='p-2 font-normal lg:text-[14pt] lg:leading-[24pt]  md:text-[14pt] md:leading-[20pt] text-[12pt] leading-[16pt]'>9630798512</p>
        </div>
      </div>
      </section>
      
    </div>
  )
}
