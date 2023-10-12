import React , {useContext} from 'react'
import './shop.css'

import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    const {id , productName , price, productImage}=props.data;
    const{addCart,cartItems}=useContext(ShopContext)
const cartId=cartItems[id];

    return (
        <div className="product">
          <img src={productImage} alt="" srcset="" />
          <div className="description">
            <p> <b> {productName} </b> </p>
            <p>${price} </p>
          </div>
          <button className='addCartBtn' onClick={()=>addCart(id)}>Add to Cart {cartId > 0 && <> ({cartId}) </> }</button>
        </div>
    )
}
