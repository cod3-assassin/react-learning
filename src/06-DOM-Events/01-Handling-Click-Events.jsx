const ClickEventHandler = () => {
  //Event Handler funtion for Click event

  const handelClick = () => {
    alert("Button Clicked !");
  };

  return (
    <div>
      <button onClick={handelClick}>Click Me !</button>
    </div>
  );
};

export default ClickEventHandler;
