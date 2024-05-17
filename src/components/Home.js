import React from 'react';
import { Link } from 'react-router-dom';
import headerbg from '../utils/img/header-bg.png';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="header flex flex-col md:flex-row items-center justify-between py-10">
        <div className="text-center md:text-left md:w-1/2 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-fadeIn">Get Quick Medical Services</h1>
          <p className="text-gray-700 mb-6 animate-fadeIn delay-100">
            In today's fast-paced world, access to prompt and efficient medical services is of paramount importance. When faced with a medical emergency or seeking immediate medical attention, the ability to receive quick medical services can significantly impact the outcome of a situation.
          </p>
          <div className="flex flex-col gap-4 animate-fadeIn delay-200">
            <p className="text-gray-700">
              Our platform connects you to a variety of medical services at the click of a button. Whether you need to find a nearby hospital bed, consult with a doctor online, access your health records, or purchase medicines, we have you covered.
            </p>
            <p className="text-gray-700">
              We are committed to providing fast, reliable, and accessible healthcare solutions to ensure you and your loved ones receive the best possible care when you need it the most.
            </p>
          </div>
        </div>
        <div className="image relative w-full md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <img src={headerbg} alt="doctor" className="rounded-lg shadow-md max-w-full h-auto animate-fadeIn delay-300" style={{ maxWidth: '400px' }} />
          <div className="image__content absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-white rounded-lg shadow-md flex items-center animate-fadeIn delay-400">
            <div className="ac h-6 w-6 bg-green-500 rounded-full mr-2"></div>
            <div className="details text-center md:text-left">
              <h4 className="text-xl font-semibold">1520+</h4>
              <p className="text-gray-700">Active Clients</p>
            </div>
          </div>
        </div>
      </header>
      <section className="features py-10 -mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 animate-fadeIn">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/hospital" className="feature-item bg-white rounded-lg shadow-md p-6 text-center block transform transition-transform duration-300 hover:-translate-y-2 animate-fadeIn delay-100">
              <i className="fas fa-hospital-alt text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-semibold mb-2">Hospital Beds</h3>
              <p>Find available hospital beds near you.</p>
            </Link>
            <Link to="/appointments" className="feature-item bg-white rounded-lg shadow-md p-6 text-center block transform transition-transform duration-300 hover:-translate-y-2 animate-fadeIn delay-200">
              <i className="fas fa-user-md text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-semibold mb-2">Online Consultation</h3>
              <p>Consult with a doctor online.</p>
            </Link>
            <Link to="/patient" className="feature-item bg-white rounded-lg shadow-md p-6 text-center block transform transition-transform duration-300 hover:-translate-y-2 animate-fadeIn delay-300">
              <i className="fas fa-file-medical text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-semibold mb-2">Health Records</h3>
              <p>Access your health records securely.</p>
            </Link>
            <Link to="/medicines" className="feature-item bg-white rounded-lg shadow-md p-6 text-center block transform transition-transform duration-300 hover:-translate-y-2 animate-fadeIn delay-400">
              <i className="fas fa-pills text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-lg font-semibold mb-2">Buy Medicines</h3>
              <p>Purchase medicines online.</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="testimonials py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 animate-fadeIn">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial-item bg-white rounded-lg shadow-md p-6 text-center animate-fadeIn delay-100">
              <p className="text-gray-700 mb-4">"QuickMed saved my life! I was able to find a hospital bed in minutes during an emergency. Highly recommend!"</p>
              <h4 className="text-lg font-semibold">Piyush</h4>
            </div>
            <div className="testimonial-item bg-white rounded-lg shadow-md p-6 text-center animate-fadeIn delay-200">
              <p className="text-gray-700 mb-4">"The online consultation feature is fantastic. I got to speak with a doctor from the comfort of my home. Very convenient and efficient!"</p>
              <h4 className="text-lg font-semibold">Anadi</h4>
            </div>
            <div className="testimonial-item bg-white rounded-lg shadow-md p-6 text-center animate-fadeIn delay-300">
              <p className="text-gray-700 mb-4">"Accessing my health records online has never been easier. QuickMed ensures my data is secure and easily accessible."</p>
              <h4 className="text-lg font-semibold">Sairam</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
