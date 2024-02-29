import { useState } from "react";

const ImmutableArrayWithSpread = () => {
  const [originalArray, setOriginalArray] = useState([1, 2, 3]);

  const addElement = () => {
    //Adding an element immutably using spread operator

    const newArray = [...originalArray, 4];
    setOriginalArray(newArray);
  };
  return (
    <div>
      <p>Original Array : {originalArray.join(",")}</p>
      <button onClick={addElement}>Add Element</button>
    </div>
  );
};

export default ImmutableArrayWithSpread;
