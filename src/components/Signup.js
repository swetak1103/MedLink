import React, { useState } from 'react';
import loginImage from '../utils/img/login.jpg';
import "../styleElements/signup.css";
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobileOrEmail, setMobileOrEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let loginuserid = document.getElementById("loginuserid").value;
    let pass = document.getElementById("loginpassword").value;
    let passwordInput = document.getElementById("loginCpassword").value;
    let message = document.getElementById("loginmessage");
    let a = 0;

    for (let i = 0; i < loginuserid.length; i++) {
        if (loginuserid[i] == '@' || loginuserid[i] == '!' || loginuserid[i] == '#' || loginuserid[i] == '$' || loginuserid[i] == '%' || loginuserid[i] == '^') {
            a = 1;
            break;
        }
    }

    if (loginuserid === "" && pass === "") {
        alert("Enter username and password");
    } else if (loginuserid === "") {
    alert("Enter username");
    } else if (pass === "") {
        alert("Enter password");
    } else if (pass != passwordInput) {
        alert("Password is not matching with Confirm Password");
    } else if (pass.length < 4) {
        alert("Password must be greater than 4 characters");
    } else if (a == 1) {
        alert("Name cannot contain special characters");
    } else {
        alert("Response submitted");
        navigate("/");
    }
  };

  return (
    <div id="loginfull">
      <div id="loginleft">
        <div id="loginmainleft">
          <form id="myloginForm" onSubmit={handleSubmit}>
            <img src="medlink-PhotoRoom-removebg-preview.png" alt="" id="loginmedlink" className="loginimage" />
            <br />
            <h2 id="loginsignup">Sign Up</h2>
            <br />
            <label htmlFor="loginuserid" className="loginlabel">Enter Name</label>
            <br />
            <input
              type="text"
              id="loginuserid"
              name="names"
              placeholder="Name"
              className="logininput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br /><br />
            <label htmlFor="loginuseri" className="loginlabel">Enter Mobile no or Email Id</label>
            <br />
            <input
              type="text"
              name="mobile"
              id="loginuseri"
              placeholder="Mobile No or Email Id"
              className="logininput"
              value={mobileOrEmail}
              onChange={(e) => setMobileOrEmail(e.target.value)}
            />
            <br /><br />
            <label htmlFor="logindate" className="loginlabel">Date Of Birth</label>
            <br />
            <input
              type="date"
              name="date"
              id="logindate"
              placeholder="Date of birth"
              className="logininput"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <br /><br />
            <label htmlFor="loginpassword" className="loginlabel">Create Password</label>
            <br />
            <br/>
            <div className="loginlabel">
              <input
                type={showPassword ? "text" : "password"}
                name="passwords"
                id="loginpassword"
                placeholder="Password"
                className="logininput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="loginshow" className="loginlabel" onClick={togglePasswordVisibility}>
              <button id='passBtn' type='button' >
                {
                  showPassword ? (<AiFillEye/>) : (<AiFillEyeInvisible/>)
                }
              </button>
              </label>
            </div>
            <br />
            <label htmlFor="loginCpassword" className="loginlabel">Confirm Password</label>
            <br></br>
            <br/>
            <div className='loginlabel'>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="loginCpassword"
                placeholder="Confirm Password"
                className="logininput"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="loginshowC" className="loginlabel" onClick={toggleConfirmPasswordVisibility}>
                <button id='passBtn' type='button' >
                {
                  showConfirmPassword ? (<AiFillEye/>) : (<AiFillEyeInvisible/>)
                }
              </button>
              </label>
            </div>
            <br />
            <div id="loginbut">
              <button type="submit" className="btn bg-primary btn-lg" id="loginbutton">Sign Up</button>
            </div>
            <p id="loginmessage"></p>
          </form>
        </div>
      </div>
      <div id="loginright">
        <img src={loginImage} alt="" id="login" className="loginimage" />
      </div>
    </div>
  );
}

export default Signup;
