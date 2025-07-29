import React from 'react'
import './relatedproduct.css'
import Item from '../Navbar/Item/Item'
import { useParams } from 'react-router-dom'
import all_product from '../../assets/all_product'

function Relatedproduct() {
   const {productId}=useParams();
   const match=all_product.find((item)=>item.id==productId);
   const catogery=match.category;
   const collect_data=all_product.filter((item)=>item.category==catogery);
   const slice_data=collect_data.slice(0,4);
   //console.log(collect_data.slice(0,4))
  return (
    <div className='related-product'>
        <h2>Related Products</h2>
        <hr />
        <div className="related-product-item">
            {slice_data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Relatedproduct