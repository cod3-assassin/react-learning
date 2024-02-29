import { useState } from "react";

const ChangeEventHandler = () => {
  //state to hold input value

  const [inputValue, setInputValue] = useState("");

  //Event handler function for change events
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter something"
      />
      <p>Input Value : {inputValue}</p>
    </div>
  );
};

export default ChangeEventHandler;
