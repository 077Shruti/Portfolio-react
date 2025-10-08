import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [refSkill, inViewSkill] = useInView({ threshold: 0.2 });

  return (
    <Parallax speed={-10}>
      <div
        id="skills"
        ref={refSkill}
        className="h-min pb-8 mb-3 rounded-3xl font-serif"
        style={{
          background: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <p
          className={`text-5xl sm:text-5xl md:text-7xl p-4 sm:p-6 flex justify-center items-center mt-6 sm:mt-9 opacity-0 transition-all duration-700 ease-in-out ${inViewSkill ? "slide-in-fwd-normal opacity-100" : ""
            }`}
        >
          Tech Stack/Skills
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {/* Java */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-tl-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/java (1).png" alt="Java" />
          </div>

          {/* JavaScript */}
          <div
            className={`p-3 w-[80px] sm:w-25 h-[80px] sm:h-25 flex items-center justify-center rounded-3xl bg-yellow-300 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-top-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/js (1).png" alt="JavaScript" />
          </div>

          {/* React */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-top-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/react.png" alt="React" />
          </div>

          {/* HTML */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-top-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/html.png" alt="HTML" />
          </div>

          {/* CSS */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-top-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/css-3.png" alt="CSS" />
          </div>

          {/* SQL Server */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-tr-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/sql-server.png" alt="SQL Server" />
          </div>
        </div>


        {/* 2nd tech stack */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-9 ">
          {/* Node.js */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-bl-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/nodejs.png" alt="Node.js" />
          </div>

          {/* MongoDB */}
          <div
            className={`p-3 w-[80px] sm:w-35 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-bottom-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/mongo-removebg-preview.png" alt="MongoDB" />
          </div>

          {/* GitHub */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-bottom-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/github.png" alt="GitHub" />
          </div>

          {/* Logo */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-bottom-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/logo.png" alt="Logo" />
          </div>

          {/* Jupyter */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-bottom-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/Jupyter_logo.svg.png" alt="Jupyter" />
          </div>

          {/* Python */}
          <div
            className={`p-3 w-[80px] sm:w-30 h-[80px] sm:h-30 flex items-center justify-center rounded-3xl bg-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer opacity-0 ${inViewSkill ? "slide-in-fwd-br-normal opacity-100" : ""
              }`}
          >
            <img className="w-12 h-12 sm:w-16 sm:h-16 object-contain" src="src/assets/python.png" alt="Python" />
          </div>
        </div>

      </div>
    </Parallax>
  );
};

export default Skills;
