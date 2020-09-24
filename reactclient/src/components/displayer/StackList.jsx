import React from "react";
// API
import api from "../../api";
// Context
import { addStack } from "../../context/actions/stack";
// Component
import Stack from "./Stack";

export default function StackList({ stacks, dispatch }) {
  const handleCreate = React.useCallback(async () => {
    const payload = await api.createStack();
    dispatch(addStack(payload));
  }, [dispatch]);

  return (
    <div>
      <button
        style={{
          fontWeight: 600,
        }}
        type="button"
        className="btn btn-sm btn-success w-100 mb-2"
        onClick={() => handleCreate()}
      >
        +
      </button>
      {stacks.map((stack) => (
        <Stack key={stack.id} stack={stack} dispatch={dispatch} />
      ))}
    </div>
  );
}
