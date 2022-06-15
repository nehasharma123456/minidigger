import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = props => {
  return (
    <div>
    <Card style={{border:'0px', margin:'0px 10px',boxShadow: 'rgb(14 30 37 / 10%) 0px 2px 4px 0px, rgb(14 30 37 / 12%) 0px 2px 16px 0px'}}>
    <Card.Img variant="top" src={props.cardimage} />
    <Card.Body>
      <Card.Title><h3>{props.title}</h3></Card.Title>
      <Card.Text>
        <p> {props.services}</p>
        <h4>{props.price}</h4>
      </Card.Text>
      <Button variant="danger">Add to Cart</Button>
    </Card.Body>
  </Card>
  
    </div>
  );
};

export default ProductCard;
