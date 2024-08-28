import React, { useState } from 'react';

interface NavbarProps{
    isDarkMode:boolean;
    toggleDarkMode: () => void;
}

const Navbar = ({isDarkMode,toggleDarkMode}:NavbarProps) => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  

  return (
    <div className="relative w-full px-5 py-3 font-raleway flex justify-between bg-zinc-800 items-center text-white">
    <div className="flex items-center gap-3">
      {/* Mobile Menu Toggle Button */}
      <button id="menuToggle" className="lg:hidden focus:outline-none" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navbar Links */}
      <div className={`hidden lg:flex gap-5 items-center ${isMenuOpen ? 'hidden' : 'flex'}`}>
        <a className="scroll" href="#home">Home</a>
        <a className="scroll" href="#skills">Skills</a>
        <a className="scroll" href="#projects">Projects</a>
        <a className="scroll" href="#timeline">Timeline</a>
      </div>
    </div>

    {/* Dark Mode Toggle Button */}
    <div className="flex items-center gap-3 ml-4">
      <button onClick={toggleDarkMode} className="focus:outline-none">
        {isDarkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black dark:text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-grey-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z" />
          </svg>
        )}
      </button>
    </div>

    {/* Mobile Menu Dropdown */}
    <div className={`lg:hidden absolute top-16 right-5 bg-zinc-800 text-white w-48 ${isMenuOpen ? 'block' : 'hidden'} shadow-lg z-20`}>
      <a className="block px-4 py-2 hover:bg-zinc-700" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a className="block px-4 py-2 hover:bg-zinc-700" href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
      <a className="block px-4 py-2 hover:bg-zinc-700" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
      <a className="block px-4 py-2 hover:bg-zinc-700" href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
    </div>
  </div>
  );
};

export default Navbar;
