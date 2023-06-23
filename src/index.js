import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import Context from "./context/Context";
import "kromac-ui-18/src/css/style.css";
import "./index.style.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
