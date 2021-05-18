import React, { useState } from "react";
import Product from "./Product";
import '../App.css'
const Home = () => {
  const products = [
    {
      name: "Book",
      img: "https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      amount: 5,
    },
    {
      name: "Laptop",
      img: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      amount: 200,
    },
    {
      name: "Pen",
      img: "https://images.pexels.com/photos/4476623/pexels-photo-4476623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      amount: 2,
    },
    {
      name: "Mobile",
      img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      amount: 15,
    },
  ];

const addToCart=(data)=>
{
    let cart = [];

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push(
       data
      );
      localStorage.setItem("cart", JSON.stringify(cart));

      

}


  return (
      <div className="home">
          <h1>Products</h1>
    <div className="product-list">
      
      {
          products.length>0 && products.map((data,i)=>(
            
              <Product key={i} name={data.name} addToCart={addToCart} amount={data.amount} img={data.img}/>
          ))
      }
    </div>
    </div>
  );
};

export default Home;
