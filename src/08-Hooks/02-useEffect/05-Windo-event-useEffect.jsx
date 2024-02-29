import { useEffect, useState } from "react";

const ResizeEffectExample = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerWidth,
  });

  useEffect(() => {
    const handelResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerWidth,
      });
    };
    // Attach event listener on mount
    window.addEventListener("resize", handelResize);

    // Detach event listener on unmount

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <div>
      <p>Window Width: {windowSize.width}</p>
      <p>Window Height: {windowSize.height}</p>
    </div>
  );
};

export default ResizeEffectExample;
