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
      try {
        const user={ fullName, email, message}
        const response = await fetch('/contact', {
        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        })
  .then(()=> {
    alert("response sent successfully");
   navigate('/');
      })
        
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    };
   

    }
  
  return (
    <section className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" 
          value={fullName}
          onChange={(e)=> setFullName(e.target.value)}
          id="fullName" className="contact-input-box" required />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email"
          onChange={(e)=>setEmail(e.target.value)}
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
