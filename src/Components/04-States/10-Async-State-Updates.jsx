import React, { useState, useEffect } from "react";

const AsyncDataLoader = () => {
  // Define state variable 'data' with initial value null
  const [data, setData] = useState(null);
  // Define state variable 'loading' to track loading status
  const [loading, setLoading] = useState(true);

  // Use useEffect to fetch data asynchronously
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true while data is being fetched
        setLoading(true);

        // Simulate a delay (replace with actual API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch data
        const response = await fetch("https://dummyjson.com/carts");
        const result = await response.json();

        // Set data once fetched
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Set loading to false once data fetching is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Render data or loading indicator based on state
  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default AsyncDataLoader;
