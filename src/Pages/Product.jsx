import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bedcrums from '../Components/Bedcrumps/Bedcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Discription from '../Components/Discription/Discription';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';

function Product() {
  const all_product=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.all_Products.find((e)=>e.id==productId); 
  return (
    <div>
      <Bedcrums product={product}/>
      <ProductDisplay product={product}/>
      <Discription/>
      <Relatedproduct/>
    </div>
  )
}

export default Product