import { useState, useEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mount or Count changed...");

    // Cleanup function (optional)

    return () => {
      console.log("Component Will  unmount");
    };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default EffectExample;
