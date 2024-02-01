import React from "react";
import "../styleElements/contactus.css";


const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <form action="#" id="contact-form">
        <div className="contact-form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" className="contact-input-box" required />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="contact-input-box" required />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="contact-textarea-box" required></textarea>
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
