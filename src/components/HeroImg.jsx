import './HeroimgStyles.css';
import bgImg from "../assets/hands-typing.jpg";
import React from 'react'
import { Link } from 'react-router-dom';

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={bgImg} alt="bgImage" />
      </div>
      <div className="content">
        <p>HI, I AM A SOFTWARE DEVELOPER.</p>
        <h1>Java Developer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light"> Contact</Link>
        </div>
    </div>
    </div>
  );
}

export default HeroImg;