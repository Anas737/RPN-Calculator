import React from "react";

export default function StackValue({ index, value }) {
  return (
    <p
      style={{
        fontWeight: 600,
      }}
      className="ml-2 text-white"
    >
      {index} -> {value}
    </p>
  );
}
