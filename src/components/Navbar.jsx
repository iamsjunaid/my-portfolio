import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between sticky top-0 shadow-md bg-white z-50">
      <div className="flex justify-between items-center p-4 w-full">
        <Link to="/" className="font-bold text-2xl text-secondary transition duration-500 ease-in-out">
          Logo
        </Link>
        <GiHamburgerMenu
          className="menu text-2xl text-secondary cursor-pointer transition duration-500 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" className="hover:text-secondary text-xl transition duration-500 ease-in-out">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="hover:text-secondary text-xl transition duration-500 ease-in-out">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-secondary text-xl transition duration-500 ease-in-out">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-secondary text-xl transition duration-500 ease-in-out">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
