import { Typography } from '@material-ui/core'
import React from 'react'
import Cradrange from './Cradrange'
import { useEffect,useState } from 'react';
export default function Viewrange() {
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
    return (
 
        <div className='viewrange  py-5'>
       
           <div className='container'>
           <Typography variant='h2' className='mb-3 fw-bold text-black'>View Our Range
           </Typography>
           <div className="row mb-4">
           {
              data.map((item)=>
              
               <Cradrange name={item.name}
         imageUrl="./images/range/1.png"
        />
              

              )
           }
  
           </div>
           
           </div> 
        </div>
    )
}
