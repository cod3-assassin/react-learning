const EventBubblingCapturing = () => {
  // Event handler functions for bubbling and capturing phases

  const handelBubbling = () => {
    console.log("Bubbling Phase...");
  };
  const handelCapturing = () => {
    console.log("Capturing Phase...");
  };

  return (
    <div onClick={handelBubbling} onCutCapture={handelCapturing}>
      {" "}
      Click me to see event phases
    </div>
  );
};

export default EventBubblingCapturing;
