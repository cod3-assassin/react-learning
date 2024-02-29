import { useState, useEffect } from "react";

const CleanupEffectExample = () => {
  useEffect(() => {
    console.log("Component mounted...");

    //Cleanup function

    return () => {
      console.log("Component Will unmount...");
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return <p>Component with cleanup effect</p>;
};

export default CleanupEffectExample;
