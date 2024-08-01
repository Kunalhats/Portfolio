import React from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

const SideNavbar = ({ isOpen, toggle }) => {
  const { linkedin, github } = socialMediaUrl;

  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      style={{ zIndex: 1000 }}
    >
      <div className="relative w-full h-full">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-90"></div>

        {/* Sidebar Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-center p-4">
            <NavLink to="/home" className="flex items-center space-x-2">
              <img className="w-10" src={logos.logogradient} alt="logo" />
              <span className="text-xl font-semibold text-purple-950">Portfolio</span>
            </NavLink>
            <button onClick={toggle} className="text-2xl">
              &times;
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-4 text-xl font-semibold text-purple-950">
            {["Home", "About", "Technologies", "Projects", "Contact"].map((text) => (
              <NavLink
                key={text}
                to={`/${text.toLowerCase()}`}
                onClick={toggle}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded transition ${isActive ? 'bg-gray-200 text-pink-500' : 'hover:bg-gray-100 text-gray-700'}`
                }
              >
                {text}
              </NavLink>
            ))}
          </nav>
          <div className="flex justify-around p-4 border-t border-gray-200">
            {[
              { href: linkedin, icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zm-6 2H6v12h4V10zM8 2a2 2 0 110 4 2 2 0 010-4z" },
              { href: github, icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.603-3.369-1.342-3.369-1.342-.454-1.156-1.109-1.465-1.109-1.465-.907-.62.069-.607.069-.607 1.003.07 1.531 1.032 1.531 1.032.892 1.528 2.341 1.086 2.91.831.091-.647.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.941 0-1.091.39-1.982 1.029-2.681-.103-.253-.446-1.27.098-2.648 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.845a9.563 9.563 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.545 1.378.202 2.395.099 2.648.64.699 1.029 1.59 1.029 2.681 0 3.841-2.337 4.687-4.565 4.935.36.309.678.918.678 1.852 0 1.336-.012 2.418-.012 2.748 0 .268.18.578.688.48A10.014 10.014 0 0022 12c0-5.523-4.477-10-10-10z" },
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current text-purple-950 hover:text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d={social.icon}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
