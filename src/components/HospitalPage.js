import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import HospitalList from './HospitalList';

const HospitalPage = () => {
    const {location}=useParams();
    const [hospitalData, setHospitalData] = useState([]);

    useEffect(() => {
      const fetchHospitalData = async () => {
          try {
              const response = await fetch('/MedLink/hospitals.json'); 
              const data = await response.json();
              console.log(data);
              
              const filteredHospitals = data.filter(hospital => hospital.location === location);
              setHospitalData(filteredHospitals);
          } catch (error) {
              console.error('Error fetching hospital data:', error);
          }
      };

      fetchHospitalData();
  }, [location]);
  return (
        <div>
        <h2>Hospital List</h2>
        <p>Location: {location}</p>
        <HospitalList hospitals={hospitalData} />
        {/* Fetch and display hospital list based on the location parameter */}
      </div>
    );
}

export default HospitalPage;
