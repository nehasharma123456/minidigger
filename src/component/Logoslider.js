import React from "react";
import { Card, Button } from "react-bootstrap";

const Logoslider = props => {
  return (
    <div className="col-sm-8 col-md-8 col">
    <Card style={{border:"0px"}}>
    <Card.Img variant="top" src={props.logoimage} style={{margin:"0px auto"}}/>
  </Card>
    </div>
  );
};

export default Logoslider;
