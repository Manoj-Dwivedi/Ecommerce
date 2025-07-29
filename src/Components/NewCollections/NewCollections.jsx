import React from 'react'
import './NewCollections.css'
import NewCollection from '../../assets/new_collection'
import Item from '../Navbar/Item/Item'
function Newcollections() {
  return (
    <div className='new-collections'>
        <h2>NEW COLLECTIONS</h2>
        <hr />
        <div className="collection">
        {NewCollection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default Newcollections;