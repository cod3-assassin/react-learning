const DestructuringArray = () => {
  const colors = ["Red", "Green", "Blue", "Yellow"];

  // Destructuring assignment

  const [firstColor, secondColor, thirdColor, fourthColor] = colors;

  return (
    <div>
      <p>First Color : {firstColor}</p>
      <p>Second Color : {secondColor}</p>
      <p>Third Color : {thirdColor}</p>
      <p>Fourth Color : {fourthColor}</p>
    </div>
  );
};
export default DestructuringArray;
