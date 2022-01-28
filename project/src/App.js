import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

import Main from "./routes/HomePage";
import SelectMode from "./routes/SelectMode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="mode" element={<SelectMode />} />
    </Routes>
  );
}

export default App;
