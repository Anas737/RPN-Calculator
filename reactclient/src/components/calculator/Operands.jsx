import React from "react";

// API
import api from "../../api";
// Context
import { editStack } from "../../context/actions/stack";

export default function Operands({ stack, operands, dispatch }) {
  const handleOnClick = React.useCallback(
    async (e) => {
      const operand = e.target.name;
      const payload = await api.applyOperand(operand, stack.id);

      dispatch(editStack(payload));
    },
    [stack, dispatch]
  );

  return (
    <div className="ml-2">
      {operands.map((operand, index) => (
        <button
          key={index}
          style={{
            width: "6rem",
            fontWeight: 600,
          }}
          type="button"
          name={operand}
          className="btn btn-sm btn-dark d-block mx-1 mt-2 text-uppercase"
          onClick={(e) => handleOnClick(e)}
        >
          {operand}
        </button>
      ))}
    </div>
  );
}
