import { useState } from "react";

const StateObjectExample = () => {
  const [user, setUser] = useState({ name: "Skipper", age: 30 });

  const updateAge = () => {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
};

export default StateObjectExample;
