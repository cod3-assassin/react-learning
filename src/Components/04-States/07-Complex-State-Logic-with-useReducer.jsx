import { useReducer } from "react";

const CountWithReducer = () => {
  // Define reducer function to handle state transitions
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        return state;
    }
  };

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Render count and buttons to increment or decrement it using dispatch

  return (
    <div>
      <p>Count : {state.count}</p>
      <button className="m-10" onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  );
};

export default CountWithReducer;
