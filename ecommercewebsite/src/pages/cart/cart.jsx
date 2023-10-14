import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {CARTITEMS} from './CARTITEMS'
import { Data } from "../../Data";
import  {useNavigate} from "react-router-dom";

export const Cart = () => {
  const { cartItems,getTotalAmount } = useContext(ShopContext);
  const totalAmount=getTotalAmount();
  console.log(cartItems);
  const navigate=useNavigate();

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
  <p>checkout: ${totalAmount} </p>
  <button onClick={()=>navigate("/")}>Continue Shopping</button>
  <button>Checkout</button>
</div>
   </div>
  );
};
