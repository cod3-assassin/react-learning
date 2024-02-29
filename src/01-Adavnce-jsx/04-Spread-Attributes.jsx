import React from "react";

const SpreadAttributes = () => {
  const buttonProps = {
    className: "btn",
    onClick: () => alert("Button Clicked !"),
  };

  const changeColor = {
    style: { backgroundColor: "red" },
    onClick: () => alert("Color Changed !"),
  };
  return (
    <div>
      <button className="bg-emerald-500 box-border h-30 w-70" {...buttonProps}>
        Click Me !
      </button>
      <button {...changeColor}>Change Color</button>
    </div>
  );
};

export default SpreadAttributes;
