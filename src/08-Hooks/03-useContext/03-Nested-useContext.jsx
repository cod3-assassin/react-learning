import { createContext, useContext } from "react";

const NestedContextExample = () => {
  const UserContext = createContext();
  const ThemeContext = createContext();

  const Profile = () => {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return (
      <div>
        <p>User: {user.name}</p>
        <p>Theme: {theme}</p>
      </div>
    );
  };

  return (
    <UserContext.Provider value={{ name: "Skipper" }}>
      <ThemeContext.Provider value="dark">
        <Profile />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default NestedContextExample;
