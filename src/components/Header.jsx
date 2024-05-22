// Header.js 

import React from 'react';
import '../Header.css'; 
import logoR from './logoR.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <img src={logoR} alt="PICTOR" className="header-logo" />
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#Learn">Learn</a></li>
            <li className="nav-item"><a href="#Community">Community</a></li>
            <li className="nav-item"><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
