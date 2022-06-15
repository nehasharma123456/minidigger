import React from 'react'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HeadsetIcon from '@material-ui/icons/Headset';
export default function Topnav() {
    return (
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container d-block">
            <ul className="row navbar-nav ">
            <div class="d-flex justify-content-between">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">We Ship Australia-Wide!
             <span><LocalShippingIcon/></span>
            
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span><HeadsetIcon/></span>Looking for help? Contact our support on <span style={{color: "#FDCA14"}}>08 6162 1213</span> </a>
              </li>
              </div>
            
            </ul>
          </div>
       
      </nav>
        </div>
    )
}
