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
            {/* <h2>Hospital List</h2> */}
            <p style={{marginLeft:"15px", fontSize: '20px', fontWeight: 'bold' }}>Location: {location}</p>
            <div style={{display:"flex"}}>
            {list.map((hospital) => (
                <HospitalDetails key={hospital.id} {...hospital} />
            ))
            }
            </div>
        </div>
    );
};

export default HospitalPage;
