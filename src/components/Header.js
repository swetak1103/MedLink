import React from "react";
import "../styleElements/home.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const navigate = useNavigate();
  const loginToken = localStorage.getItem("logintoken");
  let sub;
  if (loginToken) sub = jwtDecode(loginToken)["sub"];
  console.log(loginToken);
  const handleClick = (e) => {
    localStorage.removeItem("logintoken");
    navigate("/");
  };
  return (
    <nav>
      {/* <!-- this div for heart animation --> */}
      <div className="main_header">
        <div className="center-div"></div>
        <Link to="/">
          <div className="nav__logo">MedLink Services</div>
        </Link>
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

      {!loginToken && (
        <button style={{ backgroundColor: "#046585" }} className="btn1">
          <Link style={{ color: "white" }} to="/login">
            Login / SignUp
          </Link>
        </button>
      )}
      {loginToken && (
        <ul style={{ display: "flex", alignItems: "center" }}>
          {sub}
          <button
            style={{
              backgroundColor: "#046585",
              padding: "10px",
              marginLeft: "9px",
            }}
            className="btn1"
            onClick={handleClick}
          >
            SignOut
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Header;
