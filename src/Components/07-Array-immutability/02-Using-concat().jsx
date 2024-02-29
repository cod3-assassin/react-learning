import { useState } from "react";

const ImmutableArrayWithConcat = () => {
  const [originalArray, setOriginalArray] = useState([1, 2, 3]);

  const addElement = () => {
    const newArray = originalArray.concat(4);

    setOriginalArray(newArray);
  };

  return (
    <div>
      <p>Orignal Array : {originalArray.join(",")}</p>
      <button onClick={addElement}>Add Element</button>
    </div>
  );
};

export default ImmutableArrayWithConcat;
