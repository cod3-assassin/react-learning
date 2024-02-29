import { useState } from "react";

const OptimisticUIUpdate = () => {
  const [message, setMessage] = useState("");

  const UpdateMsgOptimistically = () => {
    setMessage("Updating......");

    setTimeout(() => {
      setMessage("Update Successfully.....");
    }, 2000);
  };

  return (
    <div>
      <p>{message}</p>

      <button onClick={UpdateMsgOptimistically}>Update Message</button>
    </div>
  );
};

export default OptimisticUIUpdate;
