import React from 'react'
import './Bedcrums.css'
import arrow from '../../assets/arrow_icon.png'
import Product from '../../Pages/Product'

function Bedcrums(props) {
    const {product}=props;
   // console.log(product)
  return (
    <div className='bedcrums'>
        Home <img src={arrow} alt="" height='10px'/> Shop <img src={arrow} alt="" height='10px' />{product.category} <img src={arrow} alt="" height='10px' />{product.name} 
    </div>
  )
}

export default Bedcrums;