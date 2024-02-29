import { useContext, createContext } from "react";

const DynamicContextExample = () => {
  const ThemeContext = createContext("light");

  const ThemesComponent = () => {
    const theme = useContext(ThemeContext);

    return <p>Current Theme : {theme}</p>;
  };

  return (
    <div>
      <ThemeContext.Provider value="dark">
        <ThemesComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default DynamicContextExample;
