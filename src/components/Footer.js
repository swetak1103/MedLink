import React from 'react';
import "../styleElements/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <h3>Contact Us</h3>
            <p>FAQs</p>
            <p>Post a query</p>
            <p>Give Your Feedback</p>
            <p>Phone: +91 8323676932</p>
          </div>
          <div className="footer-content">
            <h3>Quick Links</h3>
            <ul className="list">
              <li><a href="/">Home</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Consult online</a></li>
              <li><a href="/">Book Appointment</a></li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="/"><i className="fab fa-facebook"></i></a></li>
              <li><a href="/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <p style={{ color: 'aliceblue' }}>&copy; 2023 Medlink Services . All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
