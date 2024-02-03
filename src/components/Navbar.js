// Navbar.js

import React from 'react';
import '../styling/Navbar.css'; // Import a separate CSS file for styling

const baseUrl = "/i_am_Kote/"
function Navbar() {
  return (
    <nav className="navbar flex justify-center bg-neutral-900/50 p-4 backdrop-blur gap-x-8">
      <ul className="nav-list text-white">
        <li className="nav-item">
          <a href='/i_am_Kote/#home'>Home</a>
        </li>
        <li className="nav-item">
          <a href='/i_am_Kote/#about'>About Me</a>
        </li>
        <li className="nav-item">
          <a href='/i_am_Kote/#resume'>Resume</a>
        </li>
        <li className="nav-item">
          <a href='/i_am_Kote/#project'>Projects</a>
        </li>
        <li className='nav-item'>
          <a href={baseUrl+'#collections'}>Collections</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
