import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/images/logo.png'
import { IoIosSquare } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
     
      <nav className="flex justify-between items-center h-14 px-4 md:px-6 text-black relative">
         <div className='flex items-center'> 
          <img src={logo} alt="" className='w-12 h-12' />
        <div className='flex items-center'><h1 className='font-bold text-3xl'>NKUNIM</h1><IoIosSquare size={6} className='mt-5 text-pink-300'/></div>
      </div>
        {/* Nav Links */}

        <div className="hidden md:flex h-full space-x-2">
          {[
            { path: '/', label: 'HOME' },
            { path: '/about', label: 'ABOUT' },
            { path: '/projects', label: 'PORTFOLIO' },
            { path: '/contact', label: 'CONTACT' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `h-full px-4 py-4 flex items-center font-semibold text-sm tracking-wide  ${
                  isActive ? 'text-[#c95270]' : 'hover:text-[#e2c386]' 
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <Link to='/contact' className="bg-gradient-to-r from-[#FDA5D5]/50 to-[#FFDF20]/50 text-white p-3 text-sm font-semibold rounded-sm hover:bg-[#ada262]">
            INQUIRE NOW
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {[
            { path: '/', label: 'HOME' },
            { path: '/about', label: 'ABOUT' },
            { path: '/projects', label: 'PROJECTS' },
            { path: '/contact', label: 'CONTACT' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded font-semibold text-sm tracking-wide ${
                  isActive ? 'bg-[#FFD59C] text-white' : 'hover:text-[#e2c386]' 
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <Link to='/contact' className="w-full bg-gradient-to-r from-[#FDA5D5]/50 to-[#FFDF20]/50 text-white px-4 py-2 text-sm font-semibold rounded-sm hover:bg-lime-600">
            INQUIRE NOW
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
