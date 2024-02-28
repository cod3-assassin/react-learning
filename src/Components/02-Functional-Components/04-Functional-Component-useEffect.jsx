import { useState, useEffect } from "react";

const FunctionalCompUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default FunctionalCompUseEffect;
