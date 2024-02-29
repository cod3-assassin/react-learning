import React, { useState } from "react";

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { name: "Product 1", price: 10, quantity: 5 },
    { name: "Product 2", price: 30, quantity: 6 },
    { name: "Product 3", price: 60, quantity: 12 },
    { name: "Product 4", price: 40, quantity: 8 },
    { name: "Product 5", price: 50, quantity: 4 },
  ];

  const onAddToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  return (
    <div>
      <h1 className="m-10">Product List</h1>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <ul className="m-5">
              {product.name} - ${product.price}
            </ul>
            <button
              className="bg-slate-500"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
      <Cart cartItems={cart} />
    </div>
  );
};

export default ProductList;

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name} - ${item.price} : {item.quantity}
            </p>
          </div>
        );
      })}
      <p>Total : ${calculateTotal()}</p>
    </div>
  );
};
