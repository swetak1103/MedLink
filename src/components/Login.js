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
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(true);
  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
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
    else if(a!=1 || b!=1 || c!=1){
        alert("password should contain one capital one small and one special character atleast");
    }
        else {
        alert("Response submitted");
        navigate("/");
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
          <label id='labeluser' htmlFor="loginuserid">Enter Mobile no Or Email Id</label>
          <br />
          <input type="text" id="loginuserid" value={userId} onChange={handleUserIdChange}/>
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
          <button className="btn bg-primary btn-lg" id="loginbutton">Sign In</button>
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
