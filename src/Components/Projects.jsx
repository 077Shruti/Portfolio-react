import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const Projects = () => {
    const [refSection, inViewSection] = useInView({ threshold: 0.2, triggerOnce: false });

    return (
        <Parallax speed={-15}>
            <div
                id="project"
                ref={refSection}
                className="h-min pb-8 flex flex-col lg:flex-row flex-wrap justify-center items-center rounded-4xl mt-20 mx-4 mb-10 font-serif"
                style={{
                    backgroundColor: "#1c1678",
                    backgroundImage: `
            radial-gradient(at 26% 39%, #ffe6e6 0%, transparent 60%),
            radial-gradient(at 57% 29%, #e1afd1 0%, transparent 50%),
            radial-gradient(at 68% 78%, #ad88c6 0%, transparent 40%),
            radial-gradient(at 82% 60%, #7469b6 0%, transparent 30%)
          `,
                }}
            >
                {/* Heading */}
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl lg:mr-10 font-semibold text-center text-white pt-10 mb-5">
                    Projects
                </p>

                {/* Project cards container */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8">
                    {/* Project 1 */}
                    <div
                        className={`relative bg-black/50 backdrop-blur-md 
  w-[90%] sm:w-[350px] h-[260px] sm:h-[300px] 
  mx-auto mt-8 rounded-3xl 
  hover:scale-105 transition-transform duration-300 
  cursor-pointer text-white shadow-lg shadow-black/40
  ${inViewSection ? "rotate-in-2-cw-normal opacity-100" : ""}`}
                    >
                        {/* Project Title */}
                        <p className="text-center text-lg sm:text-xl font-semibold mt-4">
                            Triveni Museum Website
                        </p>

                        {/* Image */}
                        <div className="flex justify-center mt-5 sm:mt-6">
                            <img
                                className="rounded-2xl w-[85%] sm:w-[300px] h-[140px] sm:h-[170px] object-cover hover:scale-105 transition-transform duration-300"
                                src="public\triveni.png"
                                alt="Triveni Museum Website"
                            />
                        </div>

                        {/* Icons */}
                        <div className="flex justify-center gap-10 mt-5 sm:mt-6 text-2xl sm:text-3xl">
                            <a
                                href="https://github.com/Surbhiiiiiii/SIH2024"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://sih-2024-sepia.vercel.app/"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="Live Link"
                            >
                                <LuExternalLink />
                            </a>
                        </div>
                    </div>


                    {/* Project 2 */}
                    <div
                        className={`relative bg-black/50 backdrop-blur-md 
  w-[90%] sm:w-[350px] h-[260px] sm:h-[300px] 
  mx-auto mt-8 rounded-3xl 
  hover:scale-105 transition-transform duration-300 
  cursor-pointer text-white shadow-lg shadow-black/40
  ${inViewSection ? "rotate-in-2-cw-normal opacity-100" : ""}`}
                    >
                        {/* Project Title */}
                        <p className="text-center text-lg sm:text-xl font-semibold mt-4">
                            URL Shortener
                        </p>

                        {/* Image */}
                        <div className="flex justify-center mt-5 sm:mt-6">
                            <img
                                className="rounded-2xl w-[85%] sm:w-[300px] h-[140px] sm:h-[170px] object-cover hover:scale-105 transition-transform duration-300"
                                src="public\URL.png"
                                alt="URL Shortener"
                            />
                        </div>

                        {/* Links */}
                        <div className="flex justify-center gap-10 mt-5 sm:mt-6 text-2xl sm:text-3xl">
                            <a
                                href="https://github.com/077Shruti/URL-Shortner"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://url-shortner-43jq.onrender.com/"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="Live Link"
                            >
                                <LuExternalLink />
                            </a>
                        </div>
                    </div>


                    {/* Project 3 */}
                    <div
                        className={`relative bg-black/50 backdrop-blur-md 
  w-[90%] sm:w-[350px] h-[260px] sm:h-[300px] 
  mx-auto mt-8 rounded-3xl 
  hover:scale-105 transition-transform duration-300 
  cursor-pointer text-white shadow-lg shadow-black/40
  ${inViewSection ? "rotate-in-2-cw-normal opacity-100" : ""}`}
                    >
                        {/* Project Title */}
                        <p className="text-center text-lg sm:text-xl font-semibold mt-4">
                            Syntrix
                        </p>

                        {/* Image */}
                        <div className="flex justify-center mt-5 sm:mt-6">
                            <img
                                className="rounded-2xl w-[85%] sm:w-[300px] h-[140px] sm:h-[170px] object-cover hover:scale-105 transition-transform duration-300"
                                src="public\Syntrix.png"
                                alt="Syntrix Project"
                            />
                        </div>

                        {/* Icons */}
                        <div className="flex justify-center gap-10 mt-5 sm:mt-6 text-2xl sm:text-3xl">
                            <a
                                href="https://github.com/077Shruti/Syntrix"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://github.com/077Shruti/Syntrix"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="Live Link"
                            >
                                <LuExternalLink />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </Parallax>
    );
};

export default Projects;
