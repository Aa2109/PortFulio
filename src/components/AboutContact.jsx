import { Link } from "react-router-dom";
import "./AboutContactStyles.css";
import React2 from "../assets/BA.png"
import React1 from "../assets/Portfolio Cover.png"

import React from 'react'

const AboutContact = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Contact me</h1>
          <br />
          <Link to = "/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>

        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="true" />
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="true" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContact