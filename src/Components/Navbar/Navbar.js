import "./Navbar.css";
import { Link } from 'react-scroll'
export default function Navbar() {

  // document.getElementById('menu').addEventListener('click',()=>{
  //    if(document.getElementById('navElement').style.display=="none"){
  //     document.getElementById('navElement').style.display==="flex"
  //    }
  // })

  // document.getElementById('menu').onclick=menufun();

  // function menufun(){
  //   if(document.getElementById('navElement').style.display=='none'){
  //     document.getElementById('navElement').style.display==='flex'
  //   }
  //   else{
  //     document.getElementById('navElement').style.display==='flex'
  //   }
  // }


  return (
    <div className="sticky top-0">
      <nav className="flex items-center justify-between md:h-[75px] xs:h-[70px] xs:px-4 md:px-[64px]  2xl  bg-black">
        <div className="left ">
          <button id="menu"  className="sm:hidden w-[48px] h-[48px] flex justify-center items-center flex-col">
            <div className="bg-white bar"></div>
            <div className="bg-white bar"></div>
            <div className="bg-white bar"></div>
            {/* <input type="text" placeholder="search" className="px-3 sm:hidden md:hidden lg:block"/> */}
          </button>
          {/* <button><i className="p-3 fa fa-search  hover:bg-sky-50 hover:rounded-[50%]" aria-hidden="true"></i></button> */}
        </div>
        {/* <h1 className="my-auto text-2xl font-semibold text-white md:mx-2 ">Sudhanshu</h1> */}
         <img className="md:h-[50px] xs:h-[40px] my-auto text-2xl font-semibold text-white md:mx-2" src="/Images/sv-high-resolution-logo-transparent.png" alt="Error"/> 
        <ul className="ml-auto text-white sm:flex" id='navElement' >

          <li className="mx-2 cursor-pointer hover:underline"><Link to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000} >Home</Link></li>
          <li className="mx-2 cursor-pointer hover:underline"><Link to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000} >About</Link></li>
          <li className="mx-2 cursor-pointer hover:underline"><Link to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} >Projects</Link></li>
          <li className="mx-2 cursor-pointer hover:underline"><Link to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000} >Contact</Link></li>

        </ul>

        {/* <div className="right md:order-2">
                <button><i className="p-3 fa fa-shopping-cart hover:bg-sky-50 hover:rounded-[50%]" aria-hidden="true"></i></button>
                <button><i className="p-3  hover:bg-sky-50 hover:rounded-[50%] fa-solid fa-user "></i> </button>
            </div> */}
      </nav>
    </div>
  )
}
