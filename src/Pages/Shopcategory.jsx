import React, { useContext } from 'react'
import '../CSS/shopcategorey.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../Components/Navbar/Item/Item';

function Shopcateagory(props) {
  const all_product = useContext(ShopContext);
  // const {product}={all_product};
  console.log(all_product)
  return (
    <div className='shop-cateagory'>
      <img className='shopcatagory-banner' src={props.banner} alt="" />
      <div className="shopcatogery-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatogey-sort">
          Sort by <img src={dropdown} alt="" height='20px' />
        </div>
      </div>
      <div className="shopcategorey-product">
        {all_product.all_Products.map((item, i) => {
            if (props.cotegory === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
                return null;
            }
          })}
      </div>
      <div className="shopcatogery-loadmore">  
        Explor More
      </div>
    </div>
  )
}

export default Shopcateagory