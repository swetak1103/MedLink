import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BedsAvailability = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const cityData = {
    Uttar_Pradesh: ['Lucknow', 'Kanpur', 'Prayagraj', 'Agra', 'Varanasi', 'Ghaziabad', 'Jhansi', 'Unnao', 'vrindavan'],
    Madhya_Pradesh: ['Sagar', 'Bhopal', 'Beena', 'Ujjain', 'Jabalpur', 'Indore', 'Damoh'],
    Bihar: ['Patna', 'Muzaffarnagar', 'Madhubani', 'Banka', 'Darbhanga'],
    Maharastra: ['Mumbai', 'Pune', 'Nagpur', 'Akola', 'Amarvati', 'Washim'],
    Gujarat: ['Ahemdabad', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Surat', 'Bhuj', 'Mandvi'],
    Rajasthan: ['Kota', 'Jaipur', 'Jodhpur', 'Udaipur', 'Bikaner', 'Alwar'],
    Chattisgarh: ['Raipur', 'Bilaspur', 'Raigarh', 'Jashpur', 'Pratappur'],
    Uttrakhand: ['Almora', 'Dehradun', 'Nainital', 'Rishikesh', 'Kashipur'],
    Punjab: ['Amritsar', 'Jalandhar', 'Lundhiana', 'Patiala', 'Moga', 'Bhatinda'],
    Himachal_Pradesh: ['Chamba', 'Manali', 'Rampur', 'Rajgarh', 'Mandi', 'Una']
  };

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity(cityData[newState][0]);
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  };

  const handleSubmit = () => {
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="states">States:</label>
      <select id="states" onChange={handleStateChange} style={{ padding: '5px' }}>
        <option value="" disabled selected>Select States</option>
        {Object.keys(cityData).map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <label htmlFor="city" style={{ marginTop: '20px' }}>Cities:</label>
      <select id="city" onChange={handleCityChange} style={{ padding: '5px' }}>
        {selectedState && cityData[selectedState] && cityData[selectedState].map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <div style={{ padding: '10px auto' }}>
      <Link to={`/hospital/beds/${selectedCity}`}>
        <button className="btn btn-primary btn-md" style={{ padding: '8px 15px', margin: '25px 190px', color: 'white', textDecoration: 'none' }} onClick={handleSubmit}>
          Submit
      </button>
      </Link>
      </div>
    </div>
  );
};

export default BedsAvailability;
