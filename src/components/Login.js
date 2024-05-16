
import React from 'react';
import hospitalImage from '../utils/img/medlink.jpg';
import loginImage from '../utils/img/login.jpg';
import { Link } from 'react-router-dom';
import doctor from "../utils/img/header-bg.png";
import { useState,useEffect } from 'react';
//import { useEffect } from 'react';
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import {useNavigate} 
from
 "react-router-dom";
 import "../styleElements/login.css";
 import toast from 'react-hot-toast';
const Login = () => {
 
  const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
function register(){
  navigate("/signup");
}
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add login logic here
  
 if (email === "") {
    toast.error("Please enter email id");
  } else if (password === "") {
    toast.error("Please enter password");
  }  else {
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
    toast.error('Login failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error('An error occurred. Please try again later.');
  }
}
};
  return (
  //  <div className='parent h-[100vh] w-[100vw] flex  bg-blue-500'>
  //   <div className='left w-[60vw]  z-10 h-[80vh]'>

  //   </div>
  //   <div className='right w-[40vw] z-40  bg-pink-500 h-[80vh]'>
      
  //   </div>
  
  //  </div>
  <div>
  <section class="bg-gray-50 h-[80vh] flex items-center justify-center">
  <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    <div class="md:w-[25vw] px-8 md:px-16">
      <h2 class="font-bold mx-[70px] text-3xl text-[#002D74]">Login</h2>
      <p class="text-sm mt-4 text-[#002D74]">If you are already a member, easily log in</p>
      <form action="" class="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input class="ml-[-10px]
        px-1 text-black
         h-8 text-sm p-2 w-[16vw] mt-8 rounded-xl border" type="email"
        value={email}
        onChange={handleEmailChange}
         name="email" placeholder="Email"/>
        <div class="relative">
          <input
           class="ml-[-10px] text-black text-sm h-8 p-2 rounded-xl border w-[16vw]"
            type={
              visible ? ("text") :("password")
            } 
            value={password}
            onChange={handlePasswordChange}
            name="password" placeholder="Password"/>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg> */}
          <label htmlFor="loginshow" className="loginlabel ">
              <button id='passBtn' className='mx-[-20px]' type='button' onClick={()=> setVisible(!visible)}>
                {
                  visible ? (<AiFillEye/>) : (<AiFillEyeInvisible/>)
                }
              </button>
              </label>
        </div>
        <button class="bg-[#002D74] mx-[65px] w-[6vw] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>
      <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400"/>
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400"/>
      </div>

      {/* <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
        <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Login with Google
      </button> */}

      {/* <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div> */}

      <div class="mt-3 w-[17vw] text-xs flex justify-between items-center text-[#002D74]">
        <p className='w-[20vw]'>Don't have an account?</p>
        
        <button 
        onClick={register}
        class="py-2 mx-[16px] px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
       
      </div>
   
    </div>

    <div class="md:block hidden w-1/2 h-[70vh]">
      <img class="rounded-2xl w-full h-full" src={doctor}/>
    </div>
  </div>
</section>
</div>
  );
};

export default Login;
