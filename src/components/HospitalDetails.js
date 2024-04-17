import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from "../utils/img/h1.jpeg";
// import 'bootstrap/dist/css/bootstrap.min.css';
const HospitalDetails = (props) => {
  const { name, address, contactInfo, beds } = props;
  console.log(name);

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>BedsAvailability: {beds}</Card.Text>
        <Button variant="primary">{contactInfo}</Button>
      </Card.Body>
    </Card>
  );

  // return (
  //     <div style={{
  //         background:"blue",
  //         margin:"10px",
  //     }}>
  //         <h1>{name}</h1>
  //         <h1>{address}</h1>
  //         <h1>{location}</h1>
  //         <h1>{beds}</h1>
  //         <h1>{contactInfo}</h1>
  //     </div>
  // );
};

export default HospitalDetails;
