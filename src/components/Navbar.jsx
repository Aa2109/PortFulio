import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);

  const [color, setColor] = useState(false);
  const changecolor = ()=> {
    if (window.scrollY>=100) {
      setColor(true);
    }
    else{
      setColor(false);
    }
  };
  
  window.addEventListener("scroll", changecolor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio.</h1>
        
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          
        </li>
      {/* <li>
      <a className="resume" href="https://docs.google.com/document/d/1Wt9EwQlSIdE4w6WNbd5lLpSm_cEHlIMR/edit?usp=sharing&ouid=115494833135031421203&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
    </li> */}
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/project">Project</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/contact">Contact</Link>
        </li>
       
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?(
          <FaTimes size={20} style={{color :"#fff"}}/>
        ):
        (
        <FaBars size={20} style={{color :"#fff"}}/>
        )}
      </div>
    </div>
  )
}

export default Navbar