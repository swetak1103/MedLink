import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../utils/img/h1.jpeg";

const HospitalDetails = (props) => {
  const { name, address, location, beds, contact_info } = props;

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>Beds Availability: {beds}</Card.Text>
        <Button variant="primary">{contact_info}</Button>
        <Card.Text>{location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HospitalDetails;
