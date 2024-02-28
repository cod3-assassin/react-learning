import { useState } from "react";

const FunctionalProps = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <Button onClick={() => setCounter(counter + 1)} label="Click Me !" />
    </div>
  );
};
export default FunctionalProps;

const Button = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};
