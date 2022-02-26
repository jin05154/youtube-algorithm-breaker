import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";

import Main from "./routes/HomePage";
import RandomMode from "./routes/RandomMode";
import SelectMode from "./routes/SelectMode";
import NotReadyPage from "./routes/NotReadyPage";
import Admin from "./routes/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="recommend" element={<SelectMode />} />
      <Route path="recommend/survey" element={<NotReadyPage />} />
      <Route path="recommend/random" element={<RandomMode />} />
      <Route path="faq" element={<NotReadyPage />} />
      <Route path="learn-more" element={<NotReadyPage />} />
      <Route path="admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
