import React from "react";

const ConditionalRendering = () => {
  let isLoggedIn = false;

  return <div>{isLoggedIn ? <p>Welcome User!</p> : <p>Please Login.</p>}</div>;
};

export default ConditionalRendering;
