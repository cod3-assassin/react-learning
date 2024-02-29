import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  return (
    <>
      <form>
        <label>Username :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>{username}</p>
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <p>{email}</p>
      </form>
    </>
  );
};

export default Form;
