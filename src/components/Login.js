import React from 'react';
import hospitalImage from '../utils/img/medlink.jpg';
import loginImage from '../utils/img/login.jpg';
import { Link } from 'react-router-dom';
import "../styleElements/login.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import {
    useNavigate
} from "react-router-dom";
const Login = () => {
  const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add login logic here
    
    let userid = document.getElementById("loginuserid").value;
    let pass = document.getElementById("loginpassword").value;
    let message = document.getElementById("message");
    let a=0,b=0,c=0;
    for (let index = 0; index < pass.length; index++) {
        if(pass[index]=='@' || pass[index]=='!'|| pass[index]=='#' || pass[index]=='$' || pass[index]=='%' || pass[index]=='^'  ){
            a=1;
           
        }
        if(pass[index]>='A' && pass[index]<='Z'){
            b=1;
        }
        if(pass[index]>='a' && pass[index]<='z'){
            c=1;
        }
        
    }
    if (userid === "" && pass === "") {
        alert("Enter username and password");
    } else if (userid === "") {
        alert( "Enter username");
    } else if (pass === "") {
        alert("Enter password");
    } 
        else {
        alert("Response submitted");
        navigate("/");
    }
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const {token}=await response.json();
        localStorage.setItem('logintoken', token);
        navigate('/');
      } else {
        // Unsuccessful login
        // Display an error message
        const data = await response.json();
        console.error(data.message); 
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <div id="main">
    <div id="loginleft">
      <div id="loginmainleft">
        <form action="#" id="myloginForm" onSubmit={handleSubmit}>
          <div id='medlink'><img id='hospital' src={hospitalImage}></img></div>
          <br/>
          <h1 id="loginsignup">Log In</h1>
          <br/>
          <label id='labeluser' htmlFor="loginuserid">Enter Email Id</label>
          <br />
          <input type="text" id="loginuserid" value={email} onChange={handleEmailChange}/>
          <br />
          <br/>
          <label htmlFor="loginpassword">Password</label>
          <br />
          <div className="loginlabel inline" id="loginshowLabel">
          
              <input 
              type={
visible ? ("text") : ("password")
              } id="loginpassword" placeholder="Password" value={password} className="logininput" onChange={handlePasswordChange} />
              <label htmlFor="loginshow" className="loginlabel">
              <button id='passBtn' type='button' onClick={()=> setVisible(!visible)}>
                {
                  visible ? (<AiFillEye/>) : (<AiFillEyeInvisible/>)
                }
              </button>
              </label>
            </div><br />
            <br/>
          <button className="btn bg-primary btn-sm" id="loginbutton">Sign In</button>
          <br />
          <br />
          <div id="or">Or</div>
      <p id='account'>   <Link to="/signup">Don't have an account ? Sign Up</Link></p> 
          <p id="message"></p>
        </form>
      </div>
    </div>
    <div id="loginright">
      <img src={loginImage} alt="" id="login" />
    </div>
    </div>
  );
};

export default Login;
