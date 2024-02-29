import { useState } from "react";

const StateBooleanExample = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <p>Switch is {isOn ? "on" : "off"}</p>
      <button onClick={toggleSwitch}>Toggle Switch</button>
    </div>
  );
};

export default StateBooleanExample;
