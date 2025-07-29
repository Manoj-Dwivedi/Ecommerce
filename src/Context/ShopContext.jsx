import React,{createContext, useState} from 'react';
import all_Products from '../assets/all_product'

export const ShopContext=createContext(null);

 const getDefaultCart=()=>{
        let cart={};
        for(let i=0; i<all_Products.length+1; i++){
            // console.log(cart[i])
            cart[i]=0;
           
        }
        return cart;
        
    }
  

const ShopContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState(getDefaultCart());
    const addtoCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:(prev[itemId] ||0)+1}));
        console.log(cartItem)
    }

     const removeFromCart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let TotalAmount=0;
        for(let item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=all_Products.find((product)=>product.id===Number(item));
                TotalAmount+=itemInfo.new_price*cartItem[item];
            }
            
        }
        return TotalAmount;
    }
     const getTotalCartItems=()=>{
        let TotalItems=0;
        //console.log(cartItem)
        for(let item in cartItem){
            if(cartItem[item]>0){
               TotalItems+=cartItem[item];
            }
            
        }
       return TotalItems;
    }
    
   
    const contextValu={all_Products,cartItem,addtoCart,removeFromCart,getTotalCartAmount,getTotalCartItems}; 

    //console.log(contextValu)
    return(
        <ShopContext.Provider value={contextValu}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;