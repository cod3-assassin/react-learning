import { useState } from "react";

const Counter = () => {
  // Define state variable 'count' with initial value 0
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(generateRandomColor());

  function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  const handleClick = () => {
    setCount(count + 1);
    const newColor = generateRandomColor();
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    // Render count and a button to increment it
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click Me!</button>
      <p>{color}</p>
    </div>
  );
};

export default Counter;
