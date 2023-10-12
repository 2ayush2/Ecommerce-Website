import React from 'react';
import { Product } from './Product';
import { Data } from '../../Data';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTesh Shop</h1>
      </div>
      <div className="products">
      {Data.map((product) => {
  console.log(product); // Add this line for debugging
  return <Product data={product} />;
})}

      </div>
    </div>
  );
};
