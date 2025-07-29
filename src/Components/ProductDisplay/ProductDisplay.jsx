import React, { useContext } from 'react'
import './productDisplay.css'
import star from '../../assets/star_icon.png'
import star_half from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product}=props;
    //console.log(product.id)
    const {addtoCart}=useContext(ShopContext)
  return (
    <div className='productDisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-imglist">
                <img src={product.image} alt="" height='110px'/>
                <img src={product.image} alt=""  height='110px'/>
                <img src={product.image} alt=""  height='110px'/>
                <img src={product.image} alt=""  height='110px'/>
            </div>
            <div className="productdisplay-image">
                <img className='productdisplay-main-image' src={product.image} alt="" height='500px'/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h2>{product.name}</h2>
            <div className="productdisplay-right-star">
                <img src={star} alt="" height='20px'/>
                <img src={star} alt="" height='20px'/>
                <img src={star} alt="" height='20px'/>
                <img src={star} alt="" height='20px'/>
                <img src={star_half} alt="" height='23px'/><p>{130}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ₹{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ₹{product.new_price}
                </div>
            </div>    
            <div className="productdisplay-right-discription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, deleniti ipsam labore est ipsum omnis sequi a delectus maxime molestiae accusamus dolore sapiente cupiditate quasi quod minus soluta consequuntur distinctio.
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>N</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addtoCart(product.id)}>ADD TO CART</button>
            <div className="productdisplay-right-category">
                <span>Category: <span>Women ,T-Shirt ,Crop Top</span></span>
            </div>
            <div className="productdisplay-right-category">
                <span>Tags: <span>Modern ,Latest ,Trend Shorts</span></span>
            </div>
        </div>
    </div>
    
   
  )
}

export default ProductDisplay