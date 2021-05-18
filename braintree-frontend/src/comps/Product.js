import React from "react";

const Product = ({ name, img, amount, addToCart, from }) => {
  return (
    <div className="product">
      <div className="product-img">
        <h1>{name}</h1>
        <img src={img} />
        <span>{amount} $</span>
      </div>
      {!from ? (
        <button onClick={() => addToCart({ name, img, amount })}>
          Add to Cart{" "}
        </button>
      ) : (
        <button onClick={() => {}}>Remove to cart</button>
      )}
    </div>
  );
};

export default Product;
