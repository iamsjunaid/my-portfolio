import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../assets/styles/Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import { MdClose } from 'react-icons/md';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamMenuOpen, setHamMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setHamMenuOpen(!hamMenuOpen);
  };

  return (
    <nav className="flex justify-between sticky top-0 shadow-md bg-white z-50">
      <div className="flex justify-between items-center w-full px-4">
        <a
          href="/"
          className="text-secondary transition duration-500 ease-in-out"
        >
          <img src={logo} alt="logo" className="w-16" />
        </a>
        {hamMenuOpen ? (
          <MdClose
            className="menu text-4xl text-white cursor-pointer transition duration-500 ease-in-out z-10"
            onClick={handleMenu}
          />
        ) : (
          <GiHamburgerMenu
            className="menu text-2xl text-secondary cursor-pointer transition duration-500 ease-in-out"
            onClick={handleMenu}
          />
        )}
      </div>
      <ul className={`${menuOpen ? 'open h-[100%] fixed bg-secondary opacity-90 transition-transform ease-in-out duration-500 translate-x-0 text-white flex flex-col justify-center items-center pl-4 gap-4' : ''}`}>
        <li>
          <a
            href="#home"
            className="flex items-center text-white hover:underline sm:text-quaternary sm:hover:text-secondary text-4xl sm:text-xl transition duration-500 ease-in-out"
          >
            <AiFillHome className="text-4xl sm:text-xl" />
            Home
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="flex items-center text-white hover:underline sm:text-quaternary sm:hover:text-secondary text-4xl sm:text-xl transition duration-500 ease-in-out"
          >
            <SiBookstack className="text-4xl sm:text-xl" />
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="flex items-center text-white hover:underline sm:text-quaternary sm:hover:text-secondary text-4xl sm:text-xl transition duration-500 ease-in-out"
          >
            <FaUser className="text-4xl sm:text-xl" />
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="flex items-center text-white hover:underline sm:text-quaternary sm:hover:text-secondary text-4xl sm:text-xl transition duration-500 ease-in-out"
          >
            <BsChatSquareTextFill className="text-4xl sm:text-xl" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
