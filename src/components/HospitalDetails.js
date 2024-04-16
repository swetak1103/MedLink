import React from 'react';

const HospitalDetails = (props) => {
    const {name,address,location,contactInfo,beds}=props;
    console.log(name);
    return (
        <div style={{
            background:"blue",
            margin:"10px",
        }}>
            <h1>{name}</h1>
            <h1>{address}</h1>
            <h1>{location}</h1>
            <h1>{beds}</h1>
            <h1>{contactInfo}</h1>
        </div>
    );
}

export default HospitalDetails;
