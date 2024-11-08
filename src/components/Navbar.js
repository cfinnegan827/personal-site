import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

function Navbar()  {
  return(
    <nav className="navbar">
      <div className="navbar__title">
        <h1>Surplus</h1>
        <p className="navbar__subtitle">The Modern Agriculture Revolution</p>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;