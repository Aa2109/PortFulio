import React from 'react'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./FooterStyles.css"
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className='hire'>Wants to hire me?. Contact me</h1>
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
              aashifiqubal68@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Wants to know more?</h4>
          <p>contact me on below links</p>
          <div className='social'>
          <a href="https://www.linkedin.com/in/aashif-iqubal-b067bb22b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
          <a href="https://github.com/Aa2109/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
          <a href="https://twitter.com/aashif_857" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />

            <a href="https://www.instagram.com/aashif_857" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer
