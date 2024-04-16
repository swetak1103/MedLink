import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styleElements/hospitalpage.css";
import HospitalDetails from './HospitalDetails';

const HospitalPage = () => {
    const { location } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchHospitalData = async () => {
            try {
              const response = await fetch(`/hospitals/${location}`);
              const data = await response.json();
              setList(data);
              console.log(data);
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
            {/* /Fetch and display hospital list based on the location parameter */}
            {list.map((hospital) => (
                <HospitalDetails key={hospital.id} {...hospital} />
            ))
            }
        </div>
    );
};

export default HospitalPage;
