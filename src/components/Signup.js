import React, { useState,useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import loginImage from '../utils/img/login.jpg';
import { useNavigate } from 'react-router-dom';
import doctor from "../utils/img/header-bg.png";
import { useRef } from 'react';
import { toast } from 'react-hot-toast';


const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
      


     /// Empty dependency array ensures this effect runs only once after initial render
      
   
   
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (firstName === "") {
      toast.error("Enter first name");
    } else if (email === "") {
      toast.error("Please enter email id");
    } else if (password === "") {
      toast.error("Please enter password");
    } else if (confirmPassword === "") {
      toast.error("Please enter confirm password");
    } else if (password !== confirmPassword) {
      toast.error("Password and confirm password are not matching");
    } else {
      try {
        const data = {
          firstName, // Corrected from firstname
          lastName,
          email,
          password,
        };
        const response = await fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const { token } = await response.json();
          console.log(token);
          localStorage.setItem("logintoken", token);
          navigate("/");
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error("Error:", errorData.message);
          toast.error("An error occurred. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  
  return (
    <div>
      <section className="bg-gray-50 h-[80vh] flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-[55vw] px-8 md:px-16">
            <h2 className="font-bold mx-[70px] text-3xl text-[#002D74]">Signup</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
             <br></br>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                className="logininput 
                text-black px-1
                h-8 mb-2 w-[15vw] rounded-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                className="logininput 
                text-black
                px-1
                mb-2 h-8  w-[15vw] rounded-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                id="loginuseri"
                placeholder="Email Id"
                className="logininput px-1 mb-2  h-8
                w-[15vw] text-black rounded-lg"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="loginlabel">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="loginpassword"
                  placeholder="Password"
                  className="logininput
                  w-[15vw] h-8 mb-2 px-1
               text-black rounded-lg"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="loginshow" className="loginlabel mt-[-100px]" onClick={togglePasswordVisibility}>
                  <button className='mt-[-100px] mx-[-19px]' id='passBtn' type='button' >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </label>
              </div>
              <div className='loginlabel'>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="loginCpassword"
                  placeholder="Confirm Password"
                  className="logininput                    w-[15vw]
                   text-black rounded-lg px-1 h-8 w-[15vw]"
                  name='confirmpassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="loginshowC" className="loginlabel" onClick={toggleConfirmPasswordVisibility}>
                  <button className=' mx-[-19px]' id='passBtn' type='button' >
                    {showConfirmPassword ? (<AiFillEye/>) : (<AiFillEyeInvisible/>)}
                  </button>
                </label>
              </div>
              <br />
              <div id="loginbut">
                <button type="submit" className=" mx-[55px] bg-[#002D74] w-[6vw] rounded-xl text-white py-2 hover:scale-105 duration-300 btn-lg" id="loginbutton">Signup</button>
              </div>
              <p id="loginmessage"></p>
            </form>
          </div>
          <div id="loginright">
            <img src={doctor} alt="Login" className="loginimage" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
