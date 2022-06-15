import React from 'react'

export default function About() {
    return (
        <div  className='aboutus' style={{backgroundImage:"url('./images/aboutus/aboutbg.png')"}}>
           <div className='container-fluid'>
           <div className='row'>
           <div className='col-md-6'>
           <img src='./images/aboutus/jcb.png'></img>
           </div>
           <div className='col-md-6 d-flex align-items-center'>
           <div className='about-data'>
           <span>Mini Digger wholesale</span>
           <h1>About Us </h1>     
           <p>Mini Digger WA stocks the complete range of new Viking Mini Loaders and Digga attachments here in Perth WA.  We also stock quality secondhand Dingo and attachments. Perth Dingo Hire and mini excavator & Dumper hire also available short or long term.</p>    
             </div>
             </div>
           </div>
           </div> 
        </div>
    )
}
