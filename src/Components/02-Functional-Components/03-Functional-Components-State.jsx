import { useState } from "react";
const FunctionalCompState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click Me !</button>
    </div>
  );
};
export default FunctionalCompState;
