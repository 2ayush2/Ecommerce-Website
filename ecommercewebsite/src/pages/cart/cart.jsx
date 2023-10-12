import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {CARTITEMS} from './CARTITEMS'
import { Data } from "../../Data";

export const Cart = () => {
  const { cartItems,getTotalAmount } = useContext(ShopContext);
  console.log(cartItems);

  return (
   <div className="cart-items">
    
    <h1>This is cart items</h1>
    <div className="cartItems">
    {Data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CARTITEMS data={product} key={product.id} />;
          }
          return null; // Return null for items not to be rendered
        })}
      
    </div>
<div className="checkout">
  <p>checkout: ${getTotalAmount} </p>
</div>
   </div>
  );
};
