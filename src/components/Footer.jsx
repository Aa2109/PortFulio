import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={
            {color:"#fff", marginRight:"2rem"}
            }/>
            <div>
              <p>New Town.</p>
              <p>India</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
            <FaPhone size={20} style={
              {color:'#fff', marginRight:"2rem"}
              }/>
            +91 8578052109 
            </h4>
          </div>
          <div className='email'>
            <h4>
            <FaMailBulk size={20} style={
              {color:'#fff', marginRight:"2rem"}
              }/>
              aashifiqubal67@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>Write here about company dtails</p>
          <div className='social'>
          <FaFacebook size={30} style={
            {color:'#fff', marginRight:"1rem"}
            }/>
          <FaTwitter size={30} style={
            {color:'#fff', marginRight:"1rem"}
            }/>
          <FaLinkedin size={30} style={
            {color:'#fff', marginRight:"1rem"}
            }/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer
