import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Footer from '../Footer';

export default function Contact() {
    return (
        <div>
        <div  className='contact d-flex align-items-center' style={{backgroundImage:"url('./images/contact/bg.png')"}}>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6 '>
      <div>
      <h1>Need a Quote?</h1>
      <p>Contact us today to arrange a quote or get more information. Call us on 0418 940 673 or submit an online enquiry.
      </p>
     <IconButton ><LocalPhoneIcon />  08 6162 1213
      </IconButton> 
      <IconButton ><MailOutlineIcon/> info@minidiggerwholesale.com
      </IconButton>
      <IconButton ><LocationOnIcon/>  54 FARRALL RD,MIDVALE WA 6056 AUSTRALIA
      </IconButton>
      </div>
        </div>
        <div className='col-md-6 d-flex align-items-center'>
        <div className='contact-form'>
        <Form>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="your name" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="your Email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="your phone number" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Your postcode" />
          </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3}  placeholder='Your message '/>
        </Form.Group>
        <Button variant="danger" type="submit">Submit</Button>
      </Form>
          </div>
          </div>
        </div>
        </div> 
     </div>
     <Footer/>
        </div>
    )
}
