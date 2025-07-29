import React from 'react'
import './Offers.css'
import exclusive from '../../assets/exclu.webp'
function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offers for You</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offers