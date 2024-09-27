import React from "react";
import Reactdom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = Reactdom.createRoot(document.querySelector("#root"));

root.render(
  <>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </>
)