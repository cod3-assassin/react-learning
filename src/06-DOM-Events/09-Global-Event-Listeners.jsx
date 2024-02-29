import React, { useEffect } from "react";

const GlobalEventListeners = () => {
  // Event handler for global keydown event
  const handleGlobalKeyDown = (e) => {
    console.log("Key pressed globally:", e.key);
  };

  // Add global event listener on component mount
  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => {
      // Remove global event listener on component unmount
      document.removeEventListener("keydown", handleGlobalKeyDown);
    };
  }, []);

  return <div>Component with a global event listener</div>;
};

export default GlobalEventListeners;
