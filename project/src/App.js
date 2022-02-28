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
      <Route path="/youtube-algorithm-breaker" element={<Main />} />
      <Route path="/youtube-algorithm-breaker/recommend" element={<SelectMode />} />
      <Route path="/youtube-algorithm-breaker/recommend/survey" element={<NotReadyPage />} />
      <Route path="/youtube-algorithm-breaker/recommend/random" element={<RandomMode />} />
      <Route path="/youtube-algorithm-breaker/faq" element={<NotReadyPage />} />
      <Route path="/youtube-algorithm-breaker/learn-more" element={<NotReadyPage />} />
      <Route path="/youtube-algorithm-breaker/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
