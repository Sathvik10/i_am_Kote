// Navbar.js

import React from 'react';
import '../styling/Navbar.css'; // Import a separate CSS file for styling


function Navbar() {
  return (
    <nav className="navbar flex justify-center bg-neutral-900/50 p-4 backdrop-blur gap-x-8">
      <ul className="nav-list text-white">
        <li className="nav-item">
          <a href='/#home'>Home</a>
        </li>
        <li className="nav-item">
          <a href='/#about'>About Me</a>
        </li>
        <li className="nav-item">
          <a href='/#resume'>Resume</a>
        </li>
        <li className="nav-item">
          <a href='/#project'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
