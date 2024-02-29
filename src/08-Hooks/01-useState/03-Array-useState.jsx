import { useState } from "react";

const StateArrayExample = () => {
  const [colors, setColors] = useState(["red", "green", "blue"]);

  const addColor = () => {
    setColors((prevColors) => [...prevColors, "yellow"]);
  };

  return (
    <div>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
      <button onClick={addColor}>Add Color</button>
    </div>
  );
};
export default StateArrayExample;
