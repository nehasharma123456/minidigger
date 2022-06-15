import React, { Component } from "react";
import Slider from "react-slick";
import Logoslider from "./Logoslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@material-ui/core'
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "./images/logoslider/1.png"
        },
        {
          img: "./images/logoslider/2.png"
        },
        {
          img: "./images/logoslider/3.png"
        },
        {
          img: "./images/logoslider/4.png"
        },
        {
          img: "./images/logoslider/5.png"
        }
        
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 50,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className='my-5'>
      <div className="container">
      <Typography variant='h6' className='pb-4 text-uppercase' style={{letterSpacing:"3.75px" , fontSize:"14px"}}>we stock a vast range of brands

      </Typography>
       <div className="row">
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
              <Logoslider logoimage={slide.img}/>
               
                
              </div>
            );
          })}
        </Slider>
        </div>
        </div>
      </div>
    );
  }
}

export default ProductSlider;
