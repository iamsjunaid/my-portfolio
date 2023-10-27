import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../assets/styles/Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between sticky top-0 shadow-md bg-white z-50 px-4">
      <div className="flex justify-between items-center w-full">
        <a href="#home" className="text-secondary transition duration-500 ease-in-out">
          <img src={logo} alt="logo" className="w-24" />
        </a>
        <GiHamburgerMenu
          className="menu text-2xl text-secondary cursor-pointer transition duration-500 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <a href="#home" className="flex items-center text-quaternary hover:text-secondary text-xl transition duration-500 ease-in-out">
            <AiFillHome className="text-xl" />
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="flex items-center text-quaternary hover:text-secondary text-xl transition duration-500 ease-in-out">
            <SiBookstack className="text-xl" />
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" className="flex items-center text-quaternary hover:text-secondary text-xl transition duration-500 ease-in-out">
            <FaUser className="text-xl" />
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="flex items-center text-quaternary hover:text-secondary text-xl transition duration-500 ease-in-out">
            <BsChatSquareTextFill className="text-xl" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
