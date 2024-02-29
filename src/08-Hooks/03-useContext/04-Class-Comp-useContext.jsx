import React, { createContext } from "react";
const ClassComponentWithContext = () => {
  const ThemeContext = createContext("light");

  class ThemedComponent extends React.Component {
    static contextType = ThemeContext;

    render() {
      const theme = this.context;

      return <p>Current Theme: {theme}</p>;
    }
  }

  return (
    <div>
      <ThemeContext.Provider value="dark">
        <ThemedComponent />
      </ThemeContext.Provider>
    </div>
  );
};

export default ClassComponentWithContext;
