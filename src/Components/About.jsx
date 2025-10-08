import React from 'react';
import { GrProjects } from "react-icons/gr";
import { PiNumberThree } from "react-icons/pi";
import { LuExternalLink } from "react-icons/lu";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [refSection, inViewSection] = useInView({ threshold: 0.2 });

  return (
    <Parallax speed={10}>
      <div
        id='about'
        ref={refSection}
        className='font-serif bg-purple-400 rounded-4xl mx-4 sm:mx-6 md:mx-10 pb-6'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      >
        {/* Heading */}
        <p
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[93px] flex justify-center items-center text-white mt-8 sm:mt-12 opacity-0 ${inViewSection ? 'slide-in-fwd-top-normal opacity-100' : ''
            }`}
        >
          About Me
        </p>

        {/* About Text */}
        <div
          className={`p-4 w-[90%] sm:w-[80%] mx-auto mt-6 mb-10 bg-white/30 backdrop-blur-md rounded-3xl flex justify-center items-center backdrop-saturate-200 opacity-0 ${inViewSection ? 'slide-in-fwd-left-normal opacity-100' : ''
            }`}
        >
          <p className='text-center text-base sm:text-lg md:text-xl leading-relaxed'>
            I’m Shruti Chauhan, a Full Stack Developer passionate about building modern, scalable web applications.
            Proficient in MongoDB, Express.js, React, and Node.js, I also create AI-powered websites that enhance functionality and user experience.
            Eager to contribute, learn, and grow by turning innovative ideas into seamless digital experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-9 flex-wrap mb-10 sm:mb-20 px-4">
          {/* Card 1 */}
          <div
            className={`p-4 w-full sm:w-80 md:w-96 rounded-3xl h-auto sm:h-40 flex flex-col bg-white/50 text-black hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSection ? 'slide-in-fwd-left-normal opacity-100' : ''
              }`}
          >
            <span className="flex text-4xl sm:text-5xl mt-2 ml-3">
              <GrProjects />
              <span className="ml-auto"><PiNumberThree /></span>
            </span>
            <span className="text-lg sm:text-xl ml-3 mt-2">Total Projects</span>
            <span className="flex ml-2 mt-2 items-center justify-between">
              <span>Innovative Websolution crafted</span>
              <a href="#project" className='ml-3 text-lg'><LuExternalLink /></a>
            </span>
          </div>

          {/* Card 2 */}
          <div
            className={`p-4 w-full sm:w-80 md:w-96 rounded-3xl h-auto sm:h-40 flex flex-col bg-white/50 text-black hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSection ? 'slide-in-fwd-right-normal opacity-100' : ''
              }`}
          >
            <span className="flex text-4xl sm:text-5xl mt-2 ml-3">
              <GrProjects />
              <span className="ml-auto"><PiNumberThree /></span>
            </span>
            <span className="text-lg sm:text-xl ml-3 mt-2">Certifications</span>
            <span className="flex ml-2 mt-2 items-center justify-between">
              <span>Skills Validated</span>
              <a href="https://github.com/077Shruti/Certificates" target="_blank" rel="noopener noreferrer" className='ml-3 text-lg'><LuExternalLink /></a>
            </span>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default About;
