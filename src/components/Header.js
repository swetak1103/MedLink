import React from 'react';
import '../styleElements/home.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <nav>
      {/* <!-- this div for heart animation --> */}
      <div className="main_header">
        <div className="center-div"></div>
     <Link to="/"><div className="nav__logo">MedLink Services</div></Link>
      </div>

      <ul className="nav__links">
        <li className="link">
        <Link to="/">Home </Link>
        </li>
        <li className="link">
        <Link to="/hospital">Beds availability</Link>
        </li>
        <li className="link">
        <Link to="/appointments">Book Appointment </Link>
        </li>
        <li className="link">
        <Link to="/about">About Us </Link>
        </li>
        <li className="link">
        <Link to="/contact">Contact Information</Link>
        </li>
      </ul>

      <button style={{ backgroundColor: '#046585' }} className="btn1">
        <Link style={{ color: 'white' }} to="/login">
          Login / SignUp
        </Link>
      </button>
    </nav>
  );
};

export default Header;
