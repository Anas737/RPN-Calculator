import React from "react";
// API
import api from "../api";
// Context
import { editStack } from "../context/actions/stack";
// Components
import Stack from "./calculator/Stack";
import Operands from "./calculator/Operands";

export default function Calculator({ stack, operands, dispatch }) {
  const [input, setInput] = React.useState(null);

  const handleOnChange = React.useCallback((e) => {
    const strValue = e.target.value;

    if (strValue === "") {
      setInput(null);
    } else {
      const value = parseFloat(strValue);

      if (isNaN(value)) return;

      setInput(value);
    }
  }, []);

  const handleOnClick = React.useCallback(async () => {
    console.log(typeof input);

    if (!input) return;

    const payload = await api.pushValue(stack.id, input);
    dispatch(editStack(payload));

    setInput("");
  }, [input, stack, dispatch]);

  return (
    <div style={{ width: "30vw", height: "70vh" }} className="card">
      <div className="card-header h3 text-center text-uppercase bg-dark text-white">
        RPN Calculator
      </div>
      <div className="card-body bg-info d-flex  flex-column h-100">
        <div className="d-flex">
          <div className="flex-grow-1">
            <input
              type="text"
              className="input-group"
              onChange={(e) => handleOnChange(e)}
              value={input !== null ? input : ""}
            />
          </div>
          <div className="ml-2">
            <button
              type="button"
              style={{
                width: "6rem",
                fontWeight: 600,
              }}
              className="btn btn-sm btn-success d-block mx-1"
              onClick={() => handleOnClick()}
            >
              Enter
            </button>
          </div>
        </div>
        <div className="flex-grow-1 d-flex">
          <Stack stack={stack} />
          <Operands stack={stack} operands={operands} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}
