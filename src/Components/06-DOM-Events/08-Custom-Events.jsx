import React from "react";

const CustomEvents = () => {
  // Function to dispatch a custom event
  const dispatchCustomEvent = () => {
    const customEvent = new CustomEvent("customEvent", {
      detail: "Custom event data",
    });
    document.dispatchEvent(customEvent);
  };

  // Event handler for the custom event
  const handleCustomEvent = (e) => {
    console.log("Custom Event Data:", e.detail);
  };

  // Add event listener for the custom event
  document.addEventListener("customEvent", handleCustomEvent);

  return (
    <div className="bg-slate-500">
      <button onClick={dispatchCustomEvent}>Dispatch Custom Event</button>
    </div>
  );
};

export default CustomEvents;
