import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Banking App</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <Link className="nav-link" to="/Home">Home</Link> */}
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">About</Link> */}
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/services">Services</Link> */}
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/contact">Contact</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
