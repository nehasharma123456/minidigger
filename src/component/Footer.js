import React from 'react'
import { IconButton } from '@material-ui/core';
import HeadsetIcon from '@material-ui/icons/Headset';
export default function Footer() {
    return (
        <div className='footer '>
            <div className='container'>
            <div className='row  py-5'>
            <div className='col-md-4'>
            <img src='./images/download.png'></img>
            
            <h4 className='pt-4'>Mini Digger Wholesale
          <IconButton>  <h3 >
          <HeadsetIcon/>
          
        08 6162 1213</h3>
          </IconButton>
            </h4>
            </div>
            <div className='col-md-4'>
            <h4>Product Range</h4>
            <ul>
            <li>Drive & Undercarriage
            </li>
            <li>
            Hydraulic Parts
            </li>
            <li>
            Service, Pins & Brushes
            </li>
            <li>
            Engines & Parts
            </li>
            <li>
            Tyres, Rims & Tracks
            </li>
            <li>
            Other parts
            </li>
            </ul>
            </div>
            <div className='col-md-4'>
            <h4>About Mini Digger</h4>
            <ul>
            <li>about Us
            </li>
            <li>
            faqs
            </li>
            <li>
           Contact us
            </li>
            <li>
            Payment
            </li>
            <li>
            Shipping
            </li>
           
            </ul>
            </div>
            </div>
            </div>
            <div className='container-fluid px-0'>
            <div className='footer-bottom '>
            <p>COPYRIGHT © MINI DIGGER WHOLESALE 2022 | ALL RIGHTS RESERVED | PRIVACY POLICY | TERMS AND CONDITIONS | DESIGN & DEVELOPED BY XUGAR</p>
            </div>
            </div>
        </div>
    )
}
