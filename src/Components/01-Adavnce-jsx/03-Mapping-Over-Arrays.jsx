import React from "react";

const MappingOverArrays = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const names = ["Skipper", "Riko", "Kwolski", "Dave", "Private"];
  const combinedArray = numbers.map(
    (number, index) => `${number} .${names[index]}`
  );
  return (
    <div className="grid">
      <ul>{combinedArray}</ul>
    </div>
  );
};

export default MappingOverArrays;
