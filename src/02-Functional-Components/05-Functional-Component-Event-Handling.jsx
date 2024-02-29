import { useState } from "react";

const FunctionalEvenetHandling = () => {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  return (
    <div>
      <p> Click Count :{count}</p>
      <button onClick={handelClick}>Click Me !</button>
    </div>
  );
};
export default FunctionalEvenetHandling;
