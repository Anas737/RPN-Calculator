import React from "react";
// Components
import StackList from "./displayer/StackList";

export default function StackDisplayer({ stacks, dispatch }) {
  return (
    <div style={{ width: "20vw", height: "70vh" }} className="card ml-5">
      <div className="card-header h3 text-center text-uppercase bg-info text-white">
        Stacks
      </div>
      <div className="card-body bg-dark d-flex  flex-column h-100">
        <StackList stacks={stacks} dispatch={dispatch} />
      </div>
    </div>
  );
}
