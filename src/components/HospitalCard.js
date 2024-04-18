import React from 'react';
import hospitalsData from '../hospitals.json';


const HospitalCard = ({ hospital }) => {
  return (
    <div className="hospital-card">
      <h2>{hospital.name}</h2>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Location:</strong> {hospital.location}</p>
      <p><strong>Beds:</strong> {hospital.beds}</p>
      <p><strong>Contact Info:</strong> {hospital.contact_info}</p>
    </div>
  );
};

const HospitalList = () => {
  return (
    <div>
      {hospitalsData.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
};

export default HospitalList;
