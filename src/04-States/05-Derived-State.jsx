import { useState, useEffect } from "react";

const Timer = () => {
  // Define state variable 'seconds' with initial value 0
  const [second, setSecond] = useState(0);

  // Use useEffect to increment seconds every second

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only once
  // Render timer with dynamically updating seconds

  return (
    <>
      <p>Timer : {second}</p>
    </>
  );
};

export default Timer;
