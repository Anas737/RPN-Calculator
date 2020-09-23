import React from "react";

// Components
import StackValueList from "./stack/StackValueList";

export default function Stack({ stack }) {
  return (
    <div
      style={{
        border: "2px solid black",
        overflowY: "scroll",
        height: "50vh",
      }}
      className="flex-grow-1 mt-2 bg-dark"
    >
      <StackValueList stack={stack} />
    </div>
  );
}
