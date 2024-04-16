import React from 'react';


const HospitalCard = ({ hospital }) => {
  return (
    <div className="hospital-card">
      <h2>{hospital['name']}</h2>
      <p><strong>address:</strong> {hospital.address}</p>
      <p><strong>location:</strong> {hospital.location}</p>
      <p><strong>beds:</strong> {hospital.contactInfo}</p>
      <p><strong>contact_info:</strong> {hospital.beds}</p>
    </div>
  );
};

export default HospitalCard;
