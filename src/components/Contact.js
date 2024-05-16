import React, { useState } from "react";
import "../styleElements/contactus.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate=useNavigate();
  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(fullName==='') {
      alert("full name cannot be empty");
    }
    else if(email===''){
      alert("email cannot be empty");
    }
    else if(message===''){
      alert("message cannot be empty");
    }
    else{
      
      const user={fullName, email, message}
      console.log(user)
      fetch("http://localhost:4001/contact",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
  
    }).then(()=>{
      console.log("information send");
      alert("response sent");
      navigate("/");
    })

    }
  }
  return (
    <section className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" 
          value={fullName} onChange={(e)=>setFullName(e.target.value)}
          className="contact-input-box" required />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" 
          value={email} onChange={(e)=>setEmail(e.target.value)}
          className="contact-input-box" required />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          className="contact-textarea-box" required></textarea>
        </div>

        <div className="contact-form-group">
          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
