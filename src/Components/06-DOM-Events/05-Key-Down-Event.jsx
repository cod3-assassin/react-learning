const KeyDownHandler = () => {
  //Event handler function for the key down event

  const handeKeyDown = (e) => {
    console.log(`Key pressed  : ${e.key}`);
  };

  return (
    <div onKeyDown={handeKeyDown} tabIndex={0}>
      Press Any Key{" "}
    </div>
  );
};

export default KeyDownHandler;
