const RestInArrayDestructuring = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8.9];
  const nestednumber = [1, 2, 3, [5, 6, 7], 8, 9];

  // Destructuring with rest syntax
  const [one, two, three, four, ...rest] = number;

  // Destructuring with rest syntax but in Nested Array
  const [first, second, Third, [...middle], eight, nine] = nestednumber;
  return (
    <div>
      <div>
        <p>First : {one}</p>
        <p>Second : {two}</p>
        <p>Third : {three}</p>
        <p>Fourth : {four}</p>
        <p>Rest : {JSON.stringify(rest)}</p>
      </div>
      <div>
        <p>One : {first}</p>
        <p>Two : {second}</p>
        <p>Three : {Third}</p>
        <p>Middle ; {JSON.stringify(middle)}</p>
        <p>Eight : {eight}</p>
        <p>Nine : {nine}</p>
      </div>
    </div>
  );
};

export default RestInArrayDestructuring;
