import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between">
      <div className="flex justify-between items-center p-4 w-full">
        <Link to="/" className="font-bold">
          Logo
        </Link>
        <GiHamburgerMenu
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
