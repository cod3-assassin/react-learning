import { useState } from "react";

const DynamicCounter = () => {
  // Define state variable 'count' with initial value 0

  const [counter, setCounter] = useState(0);
  // Render count and buttons to increment or decrement it dynamically
  return (
    <div>
      <p>{counter}</p>

      <button
        className="m-10"
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
      >
        Increament
      </button>
      <button
        className="m-10"
        onClick={() => setCounter((prevCounter) => prevCounter - 1)}
      >
        Decreament
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter * 2)}>
        Multiplication
      </button>
    </div>
  );
};

export default DynamicCounter;
