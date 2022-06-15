import { Typography } from '@material-ui/core'
import React, { Component } from "react";
import Slider from "react-slick";
import Footer from '../Footer.js';
import ProductCard from "../Product.js";
export default function Shop() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true,
      };
    return (
        <div>
        <div className='py-5'>
        <div className='container'>
        <Typography variant='h2' className='mb-5 fw-bold text-black'>Newest Products
  </Typography>
        <Slider {...settings}>
          <div className=''>
         <ProductCard 
         title="Boxer 525DX Kubota Engine Service Kit" 
         cardimage="./images/product/1.png" 
         services="Service, Pins & Brushes" 
         price="$85.00"
         />
          </div>
          <div className=''>
          <ProductCard 
          title="Weld On Mountplates Universal Fit" 
          cardimage="./images/product/2.png" 
          services="Service, Pins & Brushes" 
          price="$189.00"
          />
          </div>
          <div className=''>
          <ProductCard 
          title="Kohler 23HP Engine  - Dingo Spec Engine" 
          cardimage="./images/product/3.png" 
          services="Engines & parts" 
          price="$189.00"
          />
          </div>
          <div className=''>
          <ProductCard 
          title="MiniLoader Multi-Tool" 
          cardimage="./images/product/4.png" 
          services="Other parts" 
          price="$85.00"
          />
          </div>
          <div className=''>
          <ProductCard 
          title="Weld On Mountplates Universal Fit" 
          cardimage="./images/product/5.png" 
          services="Service, Pins & Brushes" 
          price="$189.00"
          />
          </div>
         
        </Slider> 
        </div>
        </div>
        <Footer/>
        </div>
    )
}
