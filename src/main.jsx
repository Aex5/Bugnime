import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
