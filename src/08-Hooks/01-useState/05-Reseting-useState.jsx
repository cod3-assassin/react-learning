import { useState } from "react";

const StateResetExample = () => {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button className="m-10" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default StateResetExample;
