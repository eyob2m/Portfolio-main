import gsap from "gsap";
import { useEffect, useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import cv from "../assets/NewCv.pdf";
const Header = () => {
  const [menuStatus, setmenuStatus] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      ".icon",
      {
        opacity: 0,
        scale: 1,
        duration: 1,
      },
      {
        opacity: 0.9,

        scale: 1.3,
        duration: 1,
      }
    );
  }, []);
  useEffect(() => {
    if (menuStatus) {
      gsap.fromTo(
        ".menu",
        {
          opacity: 0,

          duration: 0.5,
        },
        {
          opacity: 0.9,

          duration: 0.5,
        }
      );

      gsap.fromTo(
        "ul a .m",
        {
          x: 400,

          duration: 1,
          stagger: 0.2,
        },
        {
          x: 0,

          duration: 1,
          stagger: 0.2,
        }
      );
    } else {
      gsap.fromTo(
        ".menu",
        {
          opacity: 0.7,

          duration: 1,
        },
        {
          opacity: 0,

          duration: 1,
        }
      );

      gsap.fromTo(
        "ul a .m",
        {
          x: 0,

          duration: 2,
          stagger: 0.3,
        },
        {
          x: 400,

          duration: 2,
          stagger: 0.3,
        }
      );
    }
  }, [menuStatus]);
  return (
    <>
      <header className="shadow-sm md:hidden  z-50 relative py-6 px-10 text-4xl">
        <div className="flex  justify-between">
          <h1 className="icon font-serif">E</h1>
          <RiMenu3Fill
            className="md:hidden"
            onClick={() => setmenuStatus(!menuStatus)}
          />
        </div>

        <div
          className={` flex justify-center menu bg-[rgba(0,0,0,1)] text-4xl py-10 text-white  w-[100%] absolute left-0 bottom-0 translate-y-[100%] z-10 `}
        >
          <ul className="flex justify-center flex-col gap-5">
            <a href="#about">
              {" "}
              <li className="m">About Me</li>
            </a>
            <a href="#skills">
              {" "}
              <li className="m">Skills</li>
            </a>
            <a href="#experiances">
              {" "}
              <li className="m">Experiance</li>
            </a>
            <a href="#projects">
              {" "}
              <li className="m">Project</li>
            </a>
            <a href="#contact">
              {" "}
              <li className="m">Contact Me</li>
            </a>
            <a href={cv} target="_blank">
            {" "}
            <li>Resume</li>
          </a>
          </ul>
        </div>
      </header>
      <header className="shadow-sm max-md:hidden flex justify-between text-black  z-50 w-[100vw]  py-6 px-10 text-4xl">
        <h1 className="font-Poppins">E</h1>

        <ul className="flex justify-center  gap-10">
          <a href="#about">
            {" "}
            <li>About Me</li>
          </a>
          <a href="#skills">
            {" "}
            <li>Skills</li>
          </a>
          <a href="#experiances">
            {" "}
            <li>Experiance</li>
          </a>
          <a href="#projects">
            {" "}
            <li>Project</li>
          </a>
          <a href="#contact">
            {" "}
            <li>Contact Me</li>
          </a>
          <a href={cv} target="_blank">
            {" "}
            <li>Resume</li>
          </a>
        </ul>
      </header>
    </>
  );
};

export default Header;
