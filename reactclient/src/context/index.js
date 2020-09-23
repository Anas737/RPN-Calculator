import React from "react";

import { initialState, stackReducer } from "./reducers/stack";
import { setStacks } from "./actions/stack";

// API
import api from "../api";

const Context = React.createContext();
const Provider = Context.Provider;

function StackProvider({ children }) {
  const [state, dispatch] = React.useReducer(stackReducer, initialState);
  const [operands, setOperands] = React.useState([]);

  React.useEffect(() => {
    async function getStacks() {
      const payload = await api.getStacks();

      dispatch(setStacks(payload));
    }

    async function getOperands() {
      const payload = await api.getOperands();

      setOperands(payload);
    }

    getStacks();
    getOperands();
  }, []);

  return <Provider value={{ state, operands, dispatch }}>{children}</Provider>;
}

export { Context as StackContext, StackProvider };
