import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  // Define state variable 'data' with initial value null
  const [data, setData] = useState(null);

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("https://picsum.photos/v2/list");

      const result = await responce.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []); //Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Fetched Data:</h2>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.author}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <p className="text-7xl">Side Effects Of UseEffect </p>
      <p className="text-4xl">
        1 Data Fetching: The primary side effect in your code is fetching data
        from an API using the fetch function. This operation is asynchronous and
        involves network requests.
        <br></br>
        2.State Update: The setData(result) inside the fetchData function
        triggers a state update. This is also a side effect, as it causes the
        component to re-render with the updated data.
        <br></br>
        3. Console Logging: The console.log(result) statement is a side effect
        as well. It logs the fetched data to the console, which is a common
        practice for debugging.
        <br></br>4 .Dependency Array: The empty dependency array ([]) in
        useEffect ensures that the effect is only executed once when the
        component mounts. This is a way to control when the side effect runs.
        <br></br>
        Understanding and managing side effects is crucial in React
        applications, and useEffect provides a clean way to incorporate them
        into functional components. It helps avoid issues related to race
        conditions and ensures that side effects are properly synchronized with
        the component lifecycle.
      </p>
    </div>
  );
};

export default DataFetcher;
