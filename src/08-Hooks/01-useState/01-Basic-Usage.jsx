import { useState } from "react";

const BasicState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter : {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
    </div>
  );
};
export default BasicState;
