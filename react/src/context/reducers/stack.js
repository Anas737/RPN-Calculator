import {
  SET_STACKS,
  ADD_STACK,
  EDIT_STACK,
  DELETE_STACK,
  SELECT_STACK,
} from "../actions/types";

const initialState = {
  stacks: [],
  stack: null,
};

function stackReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STACKS:
      return { ...state, stacks: action.stacks };
    case ADD_STACK:
      return { stacks: [...state.stacks, action.stack], stack: action.stack };
    case EDIT_STACK:
      const newState = { ...state };
      const stackIndex = newState.stacks.findIndex(
        (stack) => stack.id === action.stack.id
      );

      newState.stacks[stackIndex] = action.stack;
      newState.stack = action.stack;

      return newState;

    case DELETE_STACK:
      return {
        stacks: state.stacks.filter((stack) => stack.id !== action.stackId),
        stack: null,
      };
    case SELECT_STACK:
      return {
        ...state,
        stack: state.stacks.find((stack) => stack.id === action.stackId),
      };

    default:
      return state;
  }
}

export { initialState, stackReducer };
