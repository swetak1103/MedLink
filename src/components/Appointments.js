import React, { useState } from 'react';
import "../styleElements/appoitment.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic to submit the form data
  };

  return (
    <div className="parent">
      <div className="container">
        <h1>Book an Appointment</h1>
        <form id="appointmentForm" onSubmit={handleSubmit}>
          <div className="form-group">
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
            <button type="submit" style={{ marginLeft: '500px', width: '100px' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
