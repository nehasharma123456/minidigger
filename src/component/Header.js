import React from 'react'
import Logonav from './Logonav'
import Topnav from './Topnav'
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import './header.css';
import {
  Link
} from "react-router-dom";
export default function Header() {
    return (
        <div>
        <Topnav/>
        <Logonav/>
        <div className="col-md-12">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light bottom-nav ">
        <div className="container-fluid px-0">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              
                <Link className="nav-link active" aria-current="page" to="/">
                <IconButton  style={{padding:"0px" ,color: "#fff"}}><HomeIcon/></IconButton>Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="shop">Shop</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="about">About Mini Digger Wholesale</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="faqs">FAQs
    </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="contact">Contact Us

  </Link>
</li>
            
            </ul>
          </div>
        </div>
      </nav>
      </div>
        </div>
    )
}
