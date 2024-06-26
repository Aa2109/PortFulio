import { Link } from "react-router-dom";
import "./AboutContactStyles.css";
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

import React from 'react'

const AboutContact = () => {
  return (
    <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>
            I am full-stack developer.
          currently learning new technologies.
          </p>
          <Link to = "/contact">
            <button className="btn">Contaact</button>
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