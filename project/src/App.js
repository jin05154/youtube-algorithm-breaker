import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";

/* components */
import Main from "./routes/HomePage";
import RandomMode from "./routes/RandomMode";
import SelectMode from "./routes/SelectMode";
import NotReadyPage from "./routes/NotReadyPage";
import AdminLogin from "./routes/AdminLogin";
import Admin from "./routes/AdminPage";

/* custom hooks */
import useToken from "./hooks/useToken";

function App() {
  const { token, setToken } = useToken();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="recommend" element={<SelectMode />} />
      <Route
        path="recommend/survey"
        element={<NotReadyPage msg="페이지 준비중입니다." />}
      />
      <Route path="recommend/random" element={<RandomMode />} />
      <Route path="faq" element={<NotReadyPage msg="페이지 준비중입니다." />} />
      <Route
        path="learn-more"
        element={<NotReadyPage msg="페이지 준비중입니다." />}
      />
      <Route
        path="admin"
        element={
          (!token && (
            <AdminLogin setToken={setToken} msg="PC로 접속해주세요." />
          )) ||
          (token && <Admin />)
        }
      />
    </Routes>
  );
}

export default App;
