import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import SelectMode from "./routes/SelectMode";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="mode" element={<SelectMode />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
