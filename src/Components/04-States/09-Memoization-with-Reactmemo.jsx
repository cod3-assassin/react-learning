import { useState, memo } from "react";

// Memoized functional component using React.memo

const MemoizedComponent = memo(({ value }) => {
  console.log("Rendering MemoizedComponent");

  return <p>Value : {value}</p>;
});

const ParentComponent = () => {
  // Define state variable 'count' with initial value 0

  const [count, setCount] = useState(0);

  // Render MemoizedComponent with value and button to update count

  return (
    <div>
      <MemoizedComponent value={count} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
};

export default ParentComponent;
