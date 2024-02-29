import React, { useState } from "react";

const DebouncingThrottling = () => {
  // State to track input value
  const [inputValue, setInputValue] = useState("");

  // State for debouncing
  const [debounceTimeoutId, setDebounceTimeoutId] = useState(null);

  // State for throttling
  const [isThrottled, setIsThrottled] = useState(false);

  // Event handler with debouncing
  const handleDebouncedChange = (e) => {
    clearTimeout(debounceTimeoutId);
    const value = e.target.value;
    const newTimeoutId = setTimeout(() => {
      console.log("Debounced Value:", value);
    }, 500);
    setDebounceTimeoutId(newTimeoutId);
    setInputValue(value);
  };

  // Event handler with throttling
  const handleThrottledChange = (e) => {
    if (!isThrottled) {
      const value = e.target.value;
      console.log("Throttled Value:", value);
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, 500);
      setInputValue(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleDebouncedChange}
        placeholder="Debounced Input"
      />
      <input
        type="text"
        value={inputValue}
        onChange={handleThrottledChange}
        placeholder="Throttled Input"
      />
    </div>
  );
};

export default DebouncingThrottling;
