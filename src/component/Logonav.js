import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
export default function Logonav() {



  const styleForButton = {
    
      width: '145px',
      padding: '0px',
      
 
  };
  const searchrButton = {
    
    background:'yellow'

};
    return (

        <div>
        <div className="container">
        <div className="row d-flex align-items-center">
    <div className="col col-md-3">
    <a className="navbar-brand" href="#">
    <img src='./images/download.png'></img>
    </a>
    </div>
    <div className="col-md-3">
    
    <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Type here to search..." aria-label="Search"/>
   <IconButton style={searchrButton}><SearchIcon /></IconButton>
   
  </form>
    </div>
    <div className="col col-md-6">
  

        <div className="row py-5">
   
        <div className="col-md-2"> 
        <IconButton  style={styleForButton}><PersonIcon /></IconButton>
        </div>
        <div className="col-md-4"><p className="mb-0"> login/signup</p><h5> My Account</h5></div>
     
   
      <div className="col-md-2">
      <IconButton  style={styleForButton}> <ShoppingCartIcon/></IconButton>
     
      </div>
      <div className="col-md-4"><p className="mb-0">0 items</p><h5>Your Cart</h5></div>
      </div>



 
   
  </div>
</div>

</div>
        </div>
    )
}
