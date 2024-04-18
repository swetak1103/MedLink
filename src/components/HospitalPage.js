import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HospitalDetails from './HospitalDetails';

import hospitals from "./hospitals.json"

const HospitalPage = () => {
    const { location } = useParams();
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchHospitalData = async () => {
            try {
              setList(hospitals);
            } catch (error) {
                console.error('Error fetching hospital data:', error);
            }
        };
        fetchHospitalData();
    }, [location]);

    return (
        <div>
            <p style={{marginLeft:"15px", fontSize: '20px', fontWeight: 'bold' }}>Location: {location}</p>
            <div style={{display:"flex", flexWrap: 'wrap'}}>
                {list.map((hospital, index) => (
                    <HospitalDetails key={index} {...hospital} />
                ))}
            </div>
        </div>
    );
};

export default HospitalPage;
