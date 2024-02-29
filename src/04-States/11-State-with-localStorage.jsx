import { useEffect, useState } from "react";

const LocalStorageExample = () => {
  // Retrieve 'count' from localStorage on component mount
  const storedCount = localStorage.getItem("count");

  // Initialize state with the stored value or 0 if not present
  const [count, setCount] = useState(parseInt(storedCount, 10) || 0);

  // Update localStorage whenever 'count' changes
  useEffect(() => {
    localStorage.setItem("count", count.toString());
    console.log(localStorage);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LocalStorageExample;
