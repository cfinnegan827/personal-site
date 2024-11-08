import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar()  {
  return(
    <nav className="navbar">
      <div className="navbar__title">
        <h1>Connor Finnegan</h1>
        <p className="navbar__subtitle"> Third Year Computer Science Student at Umass Boston</p>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/"> <h3> Home </h3> </Link>
        </li>
        <li>
          <Link to="/Education"><h3> Education </h3></Link>
        </li>
        <li>
          <Link to="/Projects"><h3> Projects </h3></Link>
        </li>
        <li>
          <Link to="/Aeroponics"><h3> Aeroponics </h3></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;