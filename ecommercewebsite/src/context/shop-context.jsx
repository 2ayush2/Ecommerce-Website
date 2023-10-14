import React, { createContext, useState } from "react";
import { Data } from "../Data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= Data.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalAmount=()=>{
    let totalAmount=0;
    for (let item in cartItems){
      if(cartItems[item]>0){
        console.log(cartItems[item])
        let itemInfo=Data.find((product)=>product.id==Number(item))
console.log(itemInfo)
        totalAmount+=cartItems[item]*itemInfo.price;
      }
    }
    return totalAmount;
  }

  const addCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCart = (newItem, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newItem }));
  };

  const contextValue = { cartItems, addCart, removeCart, updateCart, getTotalAmount };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
