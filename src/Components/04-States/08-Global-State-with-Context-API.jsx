import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Define state variable 'user' with initial value null
  const [user, setUser] = useState(null);

  // Provide the state and setter to the context
  const contextValue = { user, setUser };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const UserProfile = () => {
  // Consume the state from the context
  const { user, setUser } = useContext(UserContext);

  // Render user details and a button to update the user globally
  return (
    <div>
      <p>Username: {user ? user.username : "Guest"}</p>
      <button onClick={() => setUser({ username: "John" })}>
        Set Default User
      </button>
    </div>
  );
};
