import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Slider() {
    return (
        <div>
        <Carousel
        indicators={false}>
        <Carousel.Item>
       
          <img
            className="d-block w-100"
            src="./images/slider.png"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slider.png"
            alt="Second slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/slider.png"
            alt="Third slide"
          />
      
     
        </Carousel.Item>
      </Carousel>


     
        </div>
    )
}
