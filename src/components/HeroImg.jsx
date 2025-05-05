import './HeroimgStyles.css';
import bgImg from "../assets/LibD.png";
import profile from "../assets/Portfolio Cover.png";
import React from 'react'
import { Link } from 'react-router-dom';

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={bgImg} alt="bgImage" />
        
      </div>

      {/* <div className='profile'>
      <img className="my-img" src={profile} alt="profile" />
      </div> */}

      <div className="content">
        <p>Java developer with 2+ years of experience in building scalable, high‑performance backends using Spring Boot, microservices, and CI/CD pipelines.</p>
        <br />
        <h1>Software Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light"> Contact</Link>
          <a 
          href="https://docs.google.com/document/d/1Wt9EwQlSIdE4w6WNbd5lLpSm_cEHlIMR/edit?usp=sharing&ouid=115494833135031421203&rtpof=true&sd=true" 
          className="btn btn-light" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        </div>
    </div>
    </div>
  );
}

export default HeroImg;