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

  useEffect(() => {
    
  }, [token])

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="recommend" element={<SelectMode />} />
      <Route path="recommend/survey" element={<NotReadyPage />} />
      <Route path="recommend/random" element={<RandomMode />} />
      <Route path="faq" element={<NotReadyPage />} />
      <Route path="learn-more" element={<NotReadyPage />} />
      <Route
        path="admin"
        element={
          (!token && <AdminLogin setToken={setToken} />) || (token && <Admin />)
        }
      />
    </Routes>
  );
}

export default App;
