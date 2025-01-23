import Header from "./components/header.jsx";
import img from "./assets/img.png";
import ith from "./assets/ith.jpg";
import mss from "./assets/mss.jpg";

import {
  DiGithub,
  DiJqueryLogo,
  DiLaravel,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import {
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTelegramLine,
} from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "./assets/projects";
gsap.registerPlugin(ScrollTrigger);
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

function App() {
  const [first, setfirst] = useState(false);
  return (
    <div className="w-screen overflow-hidden flex flex-col">
      <Header />
      {/* <section className=" text-white  flex flex-col gap-7">
        <div className="h-[70vh] bg-green-600 bg-[rgba(45,23,55,1)]   relative bg-no-repeat bg-contain">
          <div className="opacity-30   w-full  h-full ">
            <img src={img} alt="" />
          </div>
          <div className="font-Poppins  max-md:px-6 max-md:items-center max-md:justify-center max-md:w-[100%] flex flex-col justify-center w-full items-center h-full text-[2.4rem] md:text-[2.6rem]">
            <h1>
              Hello I'm
              <span className="font-[800] max-md:mx-2 text-[3rem] md:text-[7rem]">Eyob Betemariam</span>
            </h1>
            <h2>
              <span className="font-[800]">MERN Stack</span> developer
            </h2>
            <p className="text-[1.8rem] text-center mt-5 w-[50%]">
              I am a dedicated and innovative junior Full-Stack Developer with a
              specialization in the MERN stack (MongoDB, Express.js, React, and
              Node.js) and good experience in Laravel. With a strong foundation
              in building dynamic, user-friendly, and scalable web applications,
              I possess a deep understanding of both front-end and back-end
              development, allowing me to create seamless and robust digital
              solutions.
            </p>
          </div>
        </div>
      </section> */}
      <section className="h-[50vh] md:h-[70vh] font-Poppins relative flex justify-center flex-col items-center  bg-[#22112b] w-full">
        <div className="h-full absolute opacity-20 w-full">
          <img className="object-cover h-full md:object-contain  w-full" src={img} alt="" />
         
        </div>
             <h1 className="z-20  mt-48 md:text-[4rem]  text-white text-[2rem]">
              Hello I'm
             
            </h1>
            <span className="text-[3.5rem] md:text-[6rem] z-20 font-bold text-white">Eyob Betemariam</span>
            <h2 className="font-[800] text-[2rem] z-20 text-white">
              <span className="font-[800] text-[3rem] z-20 text-blue-300 md:text-[5rem]">junior Full-Stack</span> developer
            </h2>
          
          
      </section>
      <section id="about" className="font-Poppins md:px-80  px-16">
      <p className="text-[1.8rem] md:text-[2.3rem] md:mt-32 mt-16">
              I am a dedicated and innovative junior Full-Stack Developer with a
              specialization in the MERN stack (MongoDB, Express.js, React, and
              Node.js) and good experience in Laravel. With a strong foundation
              in building dynamic, user-friendly, and scalable web applications,
              I possess a deep understanding of both front-end and back-end
              development, allowing me to create seamless and robust digital
              solutions.
            </p>
      </section>
      <section id="skills" className=" text-[2.6rem] flex flex-col gap-2">
        <h1 className=" text-center pt-20 text-[3rem] font-[800]">Skills</h1>
        <div className="text-center flex flex-col  text-[12rem]">
      <div className="flex md:hidden flex-col">
      <Slider
            slidesToShow={3}
            slidesToScroll={1}
            infinite
            autoplaySpeed={0}
            autoplay
            cssEase="linear"
       
            speed={3000}
          >
            <div className=" flex flex-col  items-center justify-center w-full h-full gap-10">
              <h1 className=" text-center  text-3xl">React</h1>
              <DiReact className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">MongoDB</h1>
              <DiMongodb className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">JavaScript</h1>
              <FaJs className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">Git</h1>
              <DiGithub className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">NodeJS</h1>
              <DiNodejs className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">TypeScript</h1>
              <SiTypescript className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">Redux</h1>
              <SiRedux className="border  border-black p-3" />
            </div>
          </Slider>
          <Slider
            slidesToShow={3}
            slidesToScroll={1}
            infinite
            rtl

            autoplaySpeed={0}
            autoplay
            cssEase="linear"
         
            speed={3000}
          >
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">JQuery</h1>
              <DiJqueryLogo className="border  border-black p-3" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">TailwindCSS</h1>
              <SiTailwindcss className="border  border-black p-3" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Figma</h1>
              <CgFigma className="border  border-black p-3" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Laravel</h1>
              <DiLaravel className="border  border-black p-3" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Vite</h1>
              <SiVite className="border  border-black p-3" />
            </div>
          </Slider>
      </div>
      <div className="flex max-md:hidden flex-col">
      <Slider
            slidesToShow={6}
            slidesToScroll={1}
            infinite
            autoplaySpeed={0}
            autoplay
            cssEase="linear"
       
            speed={3000}
          >
            <div className=" flex flex-col  items-center justify-center w-full h-full gap-10">
              <h1 className=" text-center  text-3xl">React</h1>
              <DiReact className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">MongoDB</h1>
              <DiMongodb className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">JavaScript</h1>
              <FaJs className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">Git</h1>
              <DiGithub className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">NodeJS</h1>
              <DiNodejs className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">TypeScript</h1>
              <SiTypescript className="border  border-black p-3" />
            </div>
            <div className="flex flex-col h-fit gap-5">
              <h1 className=" text-center text-3xl">Redux</h1>
              <SiRedux className="border  border-black p-3" />
            </div>
          </Slider>
          <Slider
            slidesToShow={6}
            slidesToScroll={1}
            infinite
            rtl

            autoplaySpeed={0}
            autoplay
            cssEase="linear"
         
            speed={3000}
          >
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">JQuery</h1>
              <DiJqueryLogo className="border  border-black p-3" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">TailwindCSS</h1>
              <SiTailwindcss className="border  border-black p-3" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Figma</h1>
              <CgFigma className="border  border-black p-3" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Laravel</h1>
              <DiLaravel className="border  border-black p-3" />
            </div>

            <div className="flex flex-col gap-5">
              <h1 className=" text-center text-3xl">Vite</h1>
              <SiVite className="border  border-black p-3" />
            </div>
          </Slider>
      </div>
        </div>
      </section>
      <section id="experiances" className="px-10 font-Poppins text-[2.6rem] flex flex-col gap-7">
      <h1 className=" text-center pt-20 text-[3rem] font-[800]">My Experiace</h1>
        <div className="flex px-10 md:px-80 py-5 shadow-md  gap-5 justify-center text-[8rem] flex-wrap">
          <div>
            <div className="flex  items-baseline gap-3 text-[2.4rem]">
              <img src={mss} className="w-[15%]" alt="" />
              <h1 className="font-bold">Micro sun and solution </h1>
            </div>
            <h1 className="text-[1.8rem]">July 2024 - Sep 2024</h1>
            <p className="text-[1.6rem]  md:pr-80">
            During my time at Micro Sun and Solution PLC, I collaborated on a job-portal mobile application project. My primary responsibility was building the API using Laravel. This experience was invaluable, as it allowed me to enhance my technical skills and gain a deeper understanding of time management and project flow.      </p>
          </div>
        </div>
        <div className="flex px-10 md:px-80 py-5 shadow-md  gap-5 justify-center text-[8rem] flex-wrap">
          <div>
            <div className="flex items-baseline gap-3 text-[2.4rem]">
              <img src={ith} className="w-[15%]" alt="" />
              <h1 className="font-bold">InterTechHub</h1>
            </div>
            <h1 className="text-[1.8rem]">Nov 2024 - Dec 2024</h1>
            <p className="text-[1.6rem]  md:pr-80">
            I have completed four solid stages and accomplished four tasks, two of which involved building e-commerce websites. I developed these websites using React and Redux, gaining valuable experience in best practices for building React applications. Additionally, I learned how to work effectively from Figma designs and leverage project management platforms like Slack and GitHub.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="px-10 bg-[url()] text-[2.6rem] flex flex-col gap-7">
      <h1 className=" text-center pt-20 text-[3rem] font-[800]">My Projects</h1>
   
        <div className="flex  py-8 font-Poppins  gap-5 justify-center text-[8rem] flex-wrap">
          {projects.map((project, index) => {
            return (
              <div
                className="px-7  flex flex-col  md:px-96 gap-6 p-10 shadow-md"
                key={project.link}
              >
                <div className="flex flex-col   text-[2.4rem] gap-3">
                  <div className="flex flex-wrap  items-baseline gap-3">
                    {project.images.map((img) => {
                      return (
                        <div
                          onClick={() => setfirst(img)}
                          className="p-2 max-md:w-[47%]  bg-gray-300"
                          key={img}
                        >
                          {" "}
                          <div className="px-1 bg-white">
                            <img
                              src={img}
                              className="object-contain h-[100px] "
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <h1>
                    {index + 1} <a href=""></a>{" "}
                  <a href={project.link}>  <span className="font-[700]">{project.title}</span>{" "}
                  </a>   </h1>
                  <p className="text-[1.6rem] md:pr-52">{project.desc} </p>
                </div>

                <div className="text-[1.2rem] flex-wrap flex gap-2">
                  {project.techstacks.map((tech) => {
                    return (
                      <h1
                        key={tech}
                        className="px-2 text-nowrap border border-black rounded-lg"
                      >
                        {tech}
                      </h1>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="contact" className="px-10 text-[2.6rem] flex flex-col gap-5">
      <h1 className=" text-center pt-20 text-[3rem] font-[800]">Contact</h1>
   
        <div className="px-10 md:w-full md:flex md:justify-center">
          <form
            className="flex md:w-[50%] flex-col gap-5 text-[1.7rem]"
            action=""
          >
            <input
              placeholder="Name"
              className="border px-4 py-3 border-black rounded-md "
              type="text"
            />
            <input
              placeholder="Email"
              className="border px-4 py-3 border-black rounded-md "
              type="text"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="border px-4 py-3 border-black rounded-md "
              name=""
              id=""
            ></textarea>
            <button className="bg-black text-white self-start px-5 py-2 text-[2rem]">
              Get In Touch
            </button>
          </form>
        </div>
      </section>
      <section className="px-10 my-8  text-[2.6rem] flex flex-col gap-7">
        <h1 className="font-[800]"></h1>
        <div className="px-10 flex flex-col gap-10">
          <div className="flex gap-4">
           <a href="https://www.linkedin.com/in/eyob2m"> <div className="border  border-black p-4 rounded-xl">
              <RiLinkedinLine />
            </div></a>
           <a href="https://www.github.com/eyob2m"> <div className="border  border-black p-4 rounded-xl">
              <RiGithubLine />
            </div></a>
          <a href="https://www.facebook.com/eyob2m">  <div className="border  border-black p-4 rounded-xl">
              <RiFacebookLine />
            </div></a>
           <a href="https://www.t.me/eyob2m">
           <div className="border  border-black p-4 rounded-xl">
              <RiTelegramLine />
            </div>
           </a>
          </div>
        </div>
      </section>
      <section className="flex px-10 py-5 flex-col gap-3 bg-black text-white">
        <h1 className="text-[3rem] font-[600]">
          Let's talk for something special
        </h1>
        <h2 className="text-[1.3rem] md:text-[1.6rem] w-[90%]">
          Passionate about collaborating with others, leveraging modern
          technologies, and continuously improving my skills to stay ahead in
          the rapidly evolving tech landscape.
        </h2>
        <div className="text-[2rem] ">
          <h1 className="font-[600]">eyob2etemariam@gmail.com</h1>
          <h1 className="font-[600]">0985238243</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
