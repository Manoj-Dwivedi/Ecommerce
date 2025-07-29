import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
function Navbar() {
const [menu,setMenu]=useState('home');
const {getTotalCartItems}=useContext(ShopContext)
    
    return (
        <div className='box-shadow'>
            <div className='navbar container'>
                <div className="nav-logo">
                    <img src={logo} alt="" style={{ width: '80px' }} />
                    <p>Shopify</p>
                </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setMenu('home')}}>
                        <Link to='/'>Home</Link>{menu==='home'? <hr/> : <></>}
                    </li>
                    <li onClick={()=>{setMenu('men')}}>
                        <Link to='/mens'>Mens</Link>{menu==='men'? <hr/> : <></>}
                    </li>
                    <li onClick={()=>{setMenu('women')}}>
                        <Link to='/womens'>Womens</Link>{menu==='women'? <hr/> : <></>}
                    </li>
                    <li onClick={()=>{setMenu('kids')}}>
                       <Link to='/kids'> Kids</Link>{menu==='kids'? <hr/> : <></>}
                    </li>
                </ul>
                <div className="nav-login-cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'> <img src={cart} alt="" width='40px' /></Link>
                    <div className="cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar