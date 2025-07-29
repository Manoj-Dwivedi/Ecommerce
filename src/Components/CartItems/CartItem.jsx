import React, { useContext } from 'react'
import './cartItem.css'
import remove_icon from '../../assets/remove.webp'
import { ShopContext } from '../../Context/ShopContext';

function CartItem() {
  const {all_Products, cartItem, removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  console.log(all_Products)
  return (
    <div className='cartItem'>
      <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_Products.map((e) => {
        if (cartItem[e.id] > 0) {
          return <div>
            <div className="cartitem-format cartitem-format-main">
              <img src={e.image} alt="" className='carticon-producticone' height='180px' width='80x'/>
              <p>{e.name}</p>
              <p>₹{e.new_price}</p>
              <button className='cartitem-quantity'>{cartItem[e.id]}</button>
              <p>{e.new_price*cartItem[e.id]}</p>
              <img onClick={()=>removeFromCart(e.id)} src={remove_icon} alt="remove" height='20px' className='remove' />
            </div>
            <hr />
          </div>
        }
        return null;

      })}
      <div className="cartItem-down">
        <div className="cartItem-totals">
          <h2>Cart Totals</h2>
          <div>
            <div className="cartItem-totalItems">
              <p>Sub Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItem-totalItems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItem-totalItems">
              <p>Total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCESSD TO CHECKOUT</button>
        </div>
        <div className="cartItem-promoCode">
          <p>If You Have a Promo Code , Enter it hear</p>
          <div className="cartItem-promoBox">
            <input type="text"  placeholder='Promo code'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;