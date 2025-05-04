import { Link } from "react-router-dom"
import "./PriceCardStyles.css"


import React from 'react'

const PriceCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>-- Basic --</h3>
          <span className="bar"></span>
          <p className="btc"> $ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Ready projects -</p>
          <Link to="/contact" className="btn" target="_blank" rel="noopener noreferrer">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-- Premium --</h3>
          <span className="bar"></span>
          <p className="btc"> $ 200</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Redy projects -</p>
          <Link to="/contact" className="btn" target="_blank" rel="noopener noreferrer">
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>-- Business --</h3>
          <span className="bar"></span>
          <p className="btc"> $ 500</p>
          <p>- 5 Days -</p>
          <p>- 8 Pages -</p>
          <p>- Featured -</p>
          <p>- Ready Projects -</p>
          <Link to="/contact" className="btn" target="_blank" rel="noopener noreferrer">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PriceCard