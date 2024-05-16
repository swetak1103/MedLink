import React from 'react';
import "../styleElements/appoitment.css"

const Appointments = () => {
  return (
    <div className="parent">
      <div className="container">
        <h1>Book an Appointment</h1>
        <form id="appointmentForm">
          <div className="form-group">a
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" required style={{ color: 'black' }} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required style={{ color: 'black' }} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required style={{ color: 'black' }} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date:</label>
            <input type="date" id="date" name="date" required style={{ color: 'black' }} />
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time:</label>
            <input type="time" id="time" name="time" required style={{ color: 'black' }} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Additional Information:</label>
            <textarea id="message" name="message" rows="4"></textarea>
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
