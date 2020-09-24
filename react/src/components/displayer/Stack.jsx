import React from "react";
// API
import api from "../../api";
// Context
import { selectStack, deleteStack } from "../../context/actions/stack";

export default function Stack({ stack, dispatch }) {
  const handleSelect = React.useCallback(() => {
    dispatch(selectStack(stack.id));
  }, [dispatch, stack]);

  const handleDelete = React.useCallback(async () => {
    const payload = await api.deleteStack(stack.id);

    dispatch(deleteStack(stack.id));
  }, [dispatch, stack]);

  return (
    <div className="d-flex justify-content-between align-items-center mt-2">
      <div
        style={{
          fontWeight: 600,
        }}
        className="flex-grow-1 btn btn-sm btn-info"
        onClick={() => handleSelect()}
      >
        {stack.id}
      </div>
      <button
        style={{
          fontWeight: 600,
        }}
        type="button"
        className="ml-2 btn btn-sm btn-danger"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    </div>
  );
}
