import React from 'react';
import logo from './Images/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-1">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} width={`85`} alt="Logo" />
        </a>
        <div className="collapse-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Post Job</a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">Need Job</a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">Contact Us</a>
            </li>
            <button className="btn-Nav">Login / SignUp</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
