import React from 'react';
import { useParams } from 'react-router-dom';
import "../styleElements/hospitalpage.css";
const HospitalPage = () => {
    const {location}=useParams();


    
    return (
        <div>
        <h2>Hospital List</h2>
        <p>Location: {location}</p>
        {/* Fetch and display hospital list based on the location parameter */}
      </div>
    );
}

export default HospitalPage;
