import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Context
import { StackProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <StackProvider>
      <App />
    </StackProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
