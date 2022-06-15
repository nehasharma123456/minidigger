import { Typography } from '@material-ui/core'
import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./Product.js";
import { useEffect,useState } from 'react';
export default function Newproductslider() {
 const [data, setData]= useState([])
  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((result)=>
    {
    result.json().then((res)=>{
    // console.log("result",res)
    setData(res)
    })
    })
  },[])
  console.log(data)
    const settings = {
        dots: false,
        infinite: true,
        speed: 50,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true,
      };
    return (
        <div className='py-5'>
        <div className='container'>
        <Typography variant='h2' className='mb-5 fw-bold text-black'>Best Selling Products


  </Typography>
        <Slider {...settings}>
        {
          data.map((item)=>
          <div className=''>
          <ProductCard 
          title={item.name} 
          cardimage="./images/product/1.png" 
          services={item.email} 
          price="$85.00"
          />
           </div>
           
          

          )
       }
       
         
        </Slider> 
        </div>
        </div>
    )
}