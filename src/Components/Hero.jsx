import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [refHero, inViewHero] = useInView({ threshold: 0.2 });

  return (
    <Parallax speed={-10}>
      <div
        id="home"
        ref={refHero}
        className="relative flex lg:flex-row justify-between items-center font-serif px-6 sm:px-10 md:px-16 lg:px-24 mt-10 lg:mt-20 text-center lg:text-left"
      >
        {/* Left side text */}
        <div
          className={`space-y-3 max-w-lg opacity-0 ${inViewHero ? "scale-in-center-normal opacity-100" : ""
            }`}
        >
          <p className="text-xl sm:text-2xl">Hello, I’m Shruti Chauhan</p>

          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Full Stack
            <span className="bg-indigo-500 text-white rounded-lg px-2 sm:px-3 py-1 inline-block mt-1">
              Developer
            </span>
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I design and develop web applications that are <br className="hidden sm:block" /> efficient,
            responsive, and user-focused.
          </p>

          {/* Social media */}
          <div className="flex justify-center lg:justify-start space-x-4 text-4xl sm:text-5xl py-4">
            <a
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              href="https://www.linkedin.com/in/shruti007/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              href="https://github.com/077Shruti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub />
            </a>
          </div>
        </div>

        {/* Right side video/GIF */}
        <div
          className={`opacity-0 mb-8 lg:mb-0 ${inViewHero ? "scale-in-center-normal opacity-100" : ""
            }`}
        >
          <img
            className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto mx-auto"
            src="src/assets/giphyonline-video-cutter.com-ezgif.com-video-to-gif-converter.gif"
            alt="Animated GIF"
          />
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
