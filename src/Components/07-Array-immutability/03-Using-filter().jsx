import React, { useState } from "react";

const ImmutableArrayWithFilter = () => {
  const [originalArray, setOriginalArray] = useState([1, 2, 3]);

  const removeElement = (elementToRemove) => {
    // Removing an element immutably using filter
    const newArray = originalArray.filter(
      (element) => element !== elementToRemove
    );
    setOriginalArray(newArray);
  };

  return (
    <div>
      <p>Original Array with filter: {originalArray.join(", ")}</p>
      <button onClick={() => removeElement(2)}>Remove Element</button>
    </div>
  );
};

export default ImmutableArrayWithFilter;
