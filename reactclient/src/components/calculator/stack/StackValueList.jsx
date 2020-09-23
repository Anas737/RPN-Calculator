import React from "react";

// Components
import StackValue from "./StackValue";

export default function StackValueList({ stack }) {
  return (
    <>
      {stack &&
        stack.values.map((element, index) => (
          <StackValue key={element.id} index={index} value={element.value} />
        ))}
    </>
  );
}
