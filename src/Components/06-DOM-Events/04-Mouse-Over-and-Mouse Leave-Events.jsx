const MouseOverLeaveHandler = () => {
  //Evnet handler function for mouse over and mouse leave

  const handelMouseOver = () => {
    console.log("Mouse Over the Element..");
  };
  const handelMouseLeave = () => {
    console.log("Mouse Left teh Element..");
  };

  return (
    <div
      className="bg-slate-500"
      onMouseOver={handelMouseOver}
      onMouseLeave={handelMouseLeave}
    >
      Hover Over this Element
    </div>
  );
};
export default MouseOverLeaveHandler;
