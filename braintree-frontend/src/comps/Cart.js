import React, { useEffect, useState } from "react";
import Product from "./Product";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState([]);

  
  useEffect(() => {
    setCartProduct(loadCart());
   
  }, []);





  const loadCart = () => {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")); //   console.log(localStorage.getItem('cart'))
    }
    return [];
  };


  return (
    <div className="cart">
      <div className="cart-item">
        {cartProduct.length > 0 &&
          cartProduct.map((data, i) => (
            <Product
              key={i}
              name={data.name}
              from="cart"
              amount={data.amount}
              img={data.img}
            />
          ))}

        {cartProduct.length == 0 && <h1>Cart is Empty</h1>}
      </div>
      
      
    </div>
  );
};

export default Cart;
