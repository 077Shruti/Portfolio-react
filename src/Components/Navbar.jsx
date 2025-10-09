import { GiHamburgerMenu } from "react-icons/gi";
import { VscOctoface } from "react-icons/vsc";
import { useState } from 'react';
// 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='bg-purple-400 fixed w-full z-10 top-0 left-0 shadow-md'>
        <div className='h-20 items-center px-4 flex justify-between font-serif text-lg  text-white'>
          {/* Logo Section */}
          <div className='text-7xl px-7'><VscOctoface /></div>


          {/* button laptop */}
          <div className='hidden sm:flex '>
            <a href="#home" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>Home</a>
            <a href="#about" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>About</a>
            <a href="#skills" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>Skills</a>
            <a href="#project" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>Project</a>
            <a href="#exp" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>Experience </a>
            <a href="#contact" className='text-2xl px-4 hover:scale-115 transition-transform duration-300 cursor-pointer'>Contact</a>
          </div>
          <button className='block sm:hidden' onClick={() => {
            setIsOpen(!isOpen)
          }}><GiHamburgerMenu /></button>
        </div>

        {/* Button mobile */}
        <div className={`${isOpen ? 'block' : 'hidden'}
    block sm:hidden bg-gray-100 space-y-1`}>
          <a href="#home" className='text-2xl px-4 block '>Home</a>
          <a href="#about" className='text-2xl px-4 block'>About</a>
          <a href="#skills" className='text-2xl px-4 block'>Skills</a>
          <a href="#project" className="text-2xl px-4 block">Projects</a>
          <a href="#exp" className='text-2xl px-4 block'>Experience </a>
          <a href="#contact" className='text-2xl px-4 block'>Contact</a>
        </div>
      </nav>

    </>
  )
}

export default Navbar
