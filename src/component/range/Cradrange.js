import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default function Cradrange(props) {
    return (
        
        <div className="col-md-4">
        <Card >
        <Card.Body>
        <div className='row d-flex align-items-center'>
        <div className='col-md-6 pe-0'>
        <Card.Title ><h4>{props.name}</h4></Card.Title>
        </div>
        <div className='col-md-6 ps-0'>
        <img
        className="d-block w-100"
        src={props.imageUrl}
        alt="First slide"
      /></div>
       
        </div>
         
       
          <Card.Text>
          <Button variant="danger">View Range</Button>
          </Card.Text>
          
        </Card.Body>
      </Card>
        </div>
    )
}
