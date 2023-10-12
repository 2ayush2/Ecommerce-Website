import React , {useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import './cart.css'

export const CARTITEMS = (props) => {
    const { cartItems,addCart,removeCart , updateCart } =useContext(ShopContext);
    const {id , productName , price, productImage}=props.data;
    return (
        <div className='cartItem'>
            <img src={productImage} alt="" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <div className="handlerClick">
    
<button onClick={()=>removeCart(id)} > - </button>
<input value={cartItems[id]} onChange={(e)=> updateCart(Number(e.target.value),id)}  />
<button onClick={()=>addCart(id)} >+</button>
            </div>
        </div>
    )
}
