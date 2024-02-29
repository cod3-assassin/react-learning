import React, { useState, useEffect } from "react";

const FetchDataEffectExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        const result = await response.json();
        setData(result.carts); // Assuming 'carts' is the key in the fetched data
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((cart) => (
        <div key={cart.id}>
          <p>Cart ID: {cart.id}</p>
          <ul>
            {cart.products.map((product) => (
              <li key={product.id}>
                <p>Product ID: {product.id}</p>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                {/* Add other product details as needed */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FetchDataEffectExample;
