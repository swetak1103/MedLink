import React, { useEffect, useState } from 'react';
import "../styleElements/appoitment.css";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Appointments = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Check if login token is found in local storage
    const token = localStorage.getItem('logintoken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {id}=jwtDecode(localStorage.getItem("logintoken"));
      const data = {...formData,patientId:id};
      console.log(data);
      const response = await fetch("/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data=await response.json();
        console.log(data);
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
navigate("/");    
  };

  return (
    <div className="parent">
      <div className="container">
        <h1>Book an Appointment</h1>
        <form id="appointmentForm">
          <div className="form-group">a
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              style={{ color: 'black' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Information:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button type="submit" style={{ marginLeft: '500px', width: '100px' }} onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
