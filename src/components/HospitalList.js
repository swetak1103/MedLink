import React from 'react';
import HospitalCard from './HospitalCard';

const HospitalList = ({ hospitals }) => {
  return (
    <div className="hospital-list">
      <h1>List of Hospitals</h1>
      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  );
};

export default HospitalList;
