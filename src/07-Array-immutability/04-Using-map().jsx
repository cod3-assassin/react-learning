import React, { useState } from "react";

const ImmutableArrayWithMap = () => {
  const [originalArray, setOriginalArray] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const updateElement = (idToUpdate, newName) => {
    // Updating an element immutably using map
    const newArray = originalArray.map((element) =>
      element.id === idToUpdate ? { ...element, name: newName } : element
    );
    setOriginalArray(newArray);
  };

  return (
    <div>
      <p>
        Original Array:{" "}
        {originalArray.map((element) => element.name).join(", ")}
      </p>
      <button onClick={() => updateElement(2, "Charlie")}>
        Update Element
      </button>
    </div>
  );
};

export default ImmutableArrayWithMap;
