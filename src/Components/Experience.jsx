import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
    const [refSection, inViewSection] = useInView({ threshold: 0.2, triggerOnce: false });
    return (
        <>
            <Parallax speed={10}>

                <section id="exp" ref={refSection} className="py-5 bg-gray-50 flex justify-center font-serif"
                    style={{
                        backgroundImage: `
                    repeating-linear-gradient(135deg, #cbd5e133 0 8px, transparent 8px 20px),
                    repeating-linear-gradient(-135deg, #d1fae533 0 8px, transparent 8px 20px)
      `,
                        backgroundSize: "40px 40px",
                    }}>
                    <div className="absolute  w-[600px] h-[100px] rounded-3xl  backdrop-blur-sm bg-gradient-to-tr
        from-[#f9f8eb]
        via-[#a7d7c5]
        to-[#57b18e]">
                        <p className='text-[55px] ml-10 mt-1 text-green-950  '>Education/Experience</p>
                    </div>



                    <div className="relative w-full max-w-2xl mt-35">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                        {/* ===== Timeline Item 1 ===== */}
                        <div className={`flex justify-start relative mb-1 hover:scale-108 transition-transform duration-300  ${inViewSection ? "slide-in-fwd-left-normal opacity-100" : ""
                            }`}>
                            <div className="w-1/2 p-4">
                                <div className="bg-yellow-200 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                                    <span className="block font-bold text-gray-700">2025</span>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Web Developer Intern — Nexus Fittings
                                    </h3>
                                    <p className="text-gray-700 text-sm mt-2">
                                        Managed and optimized the company website codebase, implemented
                                        new features, and improved performance through collaboration.
                                    </p>
                                </div>
                            </div>
                            {/* Circle */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-gray-400 rounded-full w-5 h-5 top-6"></div>
                        </div>

                        {/* ===== Timeline Item 2 ===== */}
                        <div className={`flex justify-end relative mb-12 hover:scale-108 transition-transform duration-300  ${inViewSection ? "slide-in-fwd-right-normal opacity-100" : ""
                            }`}>
                            <div className="w-1/2 p-4">
                                <div className="bg-pink-200 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                                    <span className="block font-bold text-gray-700">2022 – 2026</span>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        B.Tech — GLA University, Mathura
                                    </h3>
                                    <p className="text-gray-700 text-sm mt-2">
                                        Pursuing Bachelor of Technology in Computer Science.
                                        <br />
                                    </p>
                                </div>
                            </div>
                            {/* Circle */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-gray-400 rounded-full w-5 h-5 top-6"></div>
                        </div>
                    </div>
                </section>
            </Parallax>
        </>
    );
};

export default Timeline;
