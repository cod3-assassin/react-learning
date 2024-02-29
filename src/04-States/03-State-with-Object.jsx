import { useState } from "react";

const UserInfo = () => {
  // Define state variable 'user' as an object with initial values
  const [user, setUser] = useState({ username: "", email: "" });

  // Render user details and a button to update the user

  return (
    <div>
      <p>Username :{user.username}</p>
      <p>Email : {user.email}</p>
      <button
        onClick={() =>
          setUser({ username: "Skipper", email: "Skipper1234@gmail.com" })
        }
      >
        Set Default User
      </button>
    </div>
  );
};
export default UserInfo;
