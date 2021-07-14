import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';


function Footer() {
    return (
      <div style={{"background": "Black"}}>
            <div style={{ "margin-left": "29%","display": "flex","flex-direction": "column;"}}>
                  <div><Nav href="#home" style={{ "margin": "70px","color": "#E50914" ,"font-family":"Roboto","font-size":"30px"}}>Netchills</Nav></div>
                  <div style={{"margin": "70px"}}>
                        <div><Link to='/'>Watch on netchills</Link></div>
                        <div> <Link to='/'>My Profile</Link></div>
                        <div><Link to='/'>Features</Link></div>
                        <div ><Link to='/'>Contact us</Link></div>
                  </div>
            </div>
            <div style={{"font-size": "60px","margin-left": "40%","padding": "45px"}}>
                        <Link style={{"margin-left": "15px"}}><FaInstagram/></Link>
                        <Link style={{"margin-left": "15px"}}><FaFacebookF/></Link>
                        <Link style={{"margin-left": "15px"}}><AiFillYoutube/></Link>
            </div>
      </div>
    )
};
    

export default Footer;
