import React, { createContext, useContext } from "react";

const myContext = createContext();

const ContextExample = () => {
  // Use context value
  const contextValue = useContext(myContext);

  return <p>Context Value : {contextValue}</p>;
};

const ContextProvider = () => {
  return (
    <myContext.Provider value="Hello from Context">
      <ContextExample />
    </myContext.Provider>
  );
};

export default ContextProvider;
