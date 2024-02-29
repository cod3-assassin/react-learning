import { useContext, createContext } from "react";

const FunctionAsValueContextExample = () => {
  const GreetContext = createContext((name) => `Hello, ${name}!`);

  const GreetComponent = () => {
    const greet = useContext(GreetContext);

    return <p>{greet("Skipper")}</p>;
  };

  return (
    <GreetContext.Provider value={(name) => `Hola, ${name}!`}>
      <GreetComponent />
    </GreetContext.Provider>
  );
};

export default FunctionAsValueContextExample;
