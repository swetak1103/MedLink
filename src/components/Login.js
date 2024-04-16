import React from 'react';
import hospitalImage from '../utils/img/medlink.jpg';
import loginImage from '../utils/img/login.jpg';
import { Link } from 'react-router-dom';
import "../styleElements/login.css"
const Login = () => {
  return (
    <><body id="ramb">
      <div id="ram">
        <div id="krishna">
          <form action="#">
            <img src={hospitalImage} alt="" id="medlink" />
            <br />
            <h2>Sign Up</h2>
            <br />
            <label htmlFor="userName">Enter Name</label>
            <br />
            <input type="text" id="userName" placeholder="Name" />
            <br />
            <br />
            <label htmlFor="userContact">Enter Mobile no or Email Id</label>
            <br />
            <input type="text" id="userContact" placeholder="Mobile No or Email Id" />
            <br />
            <br />
            <label htmlFor="date">Date Of Birth</label>
            <br />
            <input type="date" name="date" id="date" placeholder="Date of birth" />
            <br />
            <br />
            <label htmlFor="gender">Gender</label>
            <br />
            <p className="gen">
              Male :
              <input type="radio" name="gender" id="maleGender" />
            </p>
            <p className="gen">
              Female :
              <input type="radio" name="gender" id="femaleGender" />
            </p>
            <br />
            <br />
            <label htmlFor="password">Create Password</label>
            <br />
            <div id="showLabel">
              <input type="password" id="password" placeholder="Password" />
              <label htmlFor="show" id="showLabel">
                <input type="checkbox" id="show" />
              </label>
            </div>
            <br />
            <label htmlFor="Cpassword">Confirm Password</label>
            <div id="showLabel">
              <input type="password" id="Cpassword" placeholder="Confirm Password" />
              <label htmlFor="showC" id="showLabel">
                <input type="checkbox" id="showC" />
              </label>
            </div>
            <br />

            <button className="btn bg-primary btn-lg">
              <Link style={{ color: 'white' }} to="/">
                Sign Up
              </Link>
            </button>
            <p id="message"></p>
          </form>
        </div>
      </div>
      <div id="shyam">
        <img src={loginImage} alt="" id="login" />
      </div>
      </body>
    </>
  );
};

export default Login;
