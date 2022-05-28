import { useState } from "react";
import { isBrowser, isMobile } from 'react-device-detect';
import PropTypes from "prop-types";

import Layout from "../components/layouts/Layout";
import LoginForm from "../components/layouts/LoginForm";
import NotReadyPage from "./NotReadyPage";

async function LoginUser(credentials) {
  return fetch(`${process.env.REACT_APP_SERVER_API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function AdminLogin({ setToken, msg }) {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleInputID = (e) => {
    setInputID(e.target.value);
  };
  const handleInputPW = (e) => {
    setInputPW(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = await LoginUser({
      inputID,
      inputPW,
    });
    setToken(token);
    if (token.msg) setErrMsg(token.msg);
  };

  return (
    <>
      {isBrowser && (
        <Layout type="onlyPC" mode="ADMIN MODE 👷‍♀️">
          <LoginForm
            inputID={inputID}
            inputPW={inputPW}
            handleID={handleInputID}
            handlePW={handleInputPW}
            errMsg={errMsg}
            onSubmit={onSubmit}
          />
        </Layout>
      )}
      {isMobile && <NotReadyPage msg={msg} />}
    </>
  );
}

AdminLogin.propTypes = {
  setToken: PropTypes.func.isRequired,
};
