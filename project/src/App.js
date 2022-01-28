import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";

import Main from "./routes/HomePage";
import SelectMode from "./routes/SelectMode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="recommend" element={<SelectMode />} />
    </Routes>
  );
}

export default App;
