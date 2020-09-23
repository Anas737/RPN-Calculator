import {
  SET_STACKS,
  ADD_STACK,
  EDIT_STACK,
  DELETE_STACK,
  SELECT_STACK,
} from "./types";

export function setStacks(stacks) {
  return {
    type: SET_STACKS,
    stacks,
  };
}

export function addStack(stack) {
  return {
    type: ADD_STACK,
    stack,
  };
}

export function editStack(stack) {
  return {
    type: EDIT_STACK,
    stack,
  };
}

export function deleteStack(stackId) {
  return {
    type: DELETE_STACK,
    stackId,
  };
}

export function selectStack(stackId) {
  return {
    type: SELECT_STACK,
    stackId,
  };
}
