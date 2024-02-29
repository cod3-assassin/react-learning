import { useState, useEffect } from "react";

const DebounceEffectExample = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Debounce function
    const debounceTimer = setTimeout(() => {
      console.log("Search term ", searchTerm);
    }, 500);

    // Cleanup function to clear the timer on each change

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handelInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handelInputChange} />
    </div>
  );
};

export default DebounceEffectExample;
