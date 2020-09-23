import React from "react";
// Context
import { StackContext } from "./context";
// Components
import Calculator from "./components/Calculator";
import StackDisplayer from "./components/StackDisplayer";

function App() {
  const { state, operands, dispatch } = React.useContext(StackContext);

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Calculator stack={state.stack} operands={operands} dispatch={dispatch} />
      <StackDisplayer stacks={state.stacks} dispatch={dispatch} />
    </div>
  );
}

export default App;
