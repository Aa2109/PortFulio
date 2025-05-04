import React from 'react';
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="hire">Interested in working together? Let's connect!</h1>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>New Town, Kolkata</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +91 8578052109
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a
                href="mailto:aashifiqubal68@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                aashifiqubal68@gmail.com
              </a>
            </h4>
          </div>

        </div>

        <div className="right">
          <h4>Find me on social media</h4>
          <p>I'm active on the platforms below. Reach out or follow along.</p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/aashif-iqubal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/Aa2109/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a
              href="https://x.com/aashif_857"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
            <a
              href="https://www.instagram.com/aashif_857"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
