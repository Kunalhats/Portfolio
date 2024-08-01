import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import SideNavbar from "./SideNavbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/background/image.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75"></div>
        <div className="relative container mx-auto flex justify-between items-center p-4 text-fuchsia-950">
          <NavLink to="/home" className="flex items-center space-x-2">
            <img className="w-10" src={logos.logogradient} alt="logo" />
            <span className="text-xl font-semibold">Portfolio</span>
          </NavLink>
          <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
            {["Home", "About", "Technologies", "Projects", "Contact"].map((text) => (
              <NavLink
                key={text}
                to={`/${text.toLowerCase()}`}
                className={({ isActive }) =>
                  `py-2 px-4 rounded transition text-sm md:text-base lg:text-lg ${isActive ? 'bg-white text-pink-500' : 'hover:bg-white hover:text-pink-500'}`
                }
              >
                {text}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleClass}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <SideNavbar isOpen={isOpen} toggle={toggleClass} />
    </>
  );
}

export default Header;
