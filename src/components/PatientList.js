import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../styleElements/PatientList.css"; 

const PatientList = ({ props }) => {
  const { fullName, email, phone, date, time,} = props;

  return (
    <ListGroup className="patient-list"> {/* Apply the custom class */}
      <ListGroup.Item className="list-item">Name: {fullName}</ListGroup.Item> {/* Apply custom class to items */}
      <ListGroup.Item className="list-item">Email: {email}</ListGroup.Item>
      <ListGroup.Item className="list-item">Phone: {phone}</ListGroup.Item>
      <ListGroup.Item className="list-item">Date: {date}</ListGroup.Item>
      <ListGroup.Item className="list-item">Time: {time}</ListGroup.Item>
    </ListGroup>
  );
};

export default PatientList;
