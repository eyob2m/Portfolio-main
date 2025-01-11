import gsap from "gsap";
import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const [menuStatus, setmenuStatus] = useState(true);

  useEffect(()=>{
    if (menuStatus) {
      gsap.to('.menu',{
       opacity:1
      }) }
      else {
        alert("ji")
       gsap.to('.menu',{
         opacity:0
    

        })
      }
  },menuStatus)
  //   gsap.to(".menu", {
  //     opacity: 1,
  //     x: 0,
  //     duration: .7
  //   });
  //   gsap.to("li", {
  //     x: 0,
  //     delay: .5,
  //     duration: .5,
  //     stagger: .2,
  //   });
  // } else {
  //   gsap.to(".menu", {
  //     opacity: .7,
      
  //     duration: 1,
  //     x: 500,
  //   });
  //   gsap.to("li", {
  //     x: 20,
  //     duration: .5,
  //     stagger: .2,
  //   });
  

  return (
    <header className="flex w-[100%] md:px-20  relative  font-Poppins text-[3rem]   p-8 justify-between items-center">
      <h1 className="  font-[700]">E</h1>
      <nav className="md:hidden">
        <IoMenuOutline
          onClick={() => setmenuStatus(!menuStatus)}
          className="text-black"
        />
        
          <ul className="menu z-10 flex w-[100%] items-center   absolute text-nowrap flex-col text-[2.3rem]  bg-black top-[100%] text-white right-0 p-10 gap-[10px]">
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Me</li>
          </ul>
        
      </nav>
      <nav className="max-md:hidden">
       
        
          <ul className="flex gap-10">
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact Me</li>
          </ul>
        
      </nav>
    </header>
  );
};

export default Header;
