import { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import Layout from "../components/layouts/Layout";

async function LoginUser(credentials) {
  return fetch(`${process.env.REACT_APP_SERVER_API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function AdminLogin({ setToken }) {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

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
  };

  return (
    <Layout type="onlyPC" mode="ADMIN MODE 👷‍♀️">
      <LoginBox>
        <h2>Login</h2>
        <LoginMenuWrap>
          <form onSubmit={onSubmit}>
            <InputsWrap>
              <InnerWrap>
                <InputLabel>ID</InputLabel>
                <div>
                  <input
                    type="text"
                    name="input_id"
                    value={inputID}
                    onChange={handleInputID}
                  />
                </div>
              </InnerWrap>
              <InnerWrap>
                <InputLabel>PW</InputLabel>
                <div>
                  <input
                    type="password"
                    name="input_pw"
                    value={inputPW}
                    onChange={handleInputPW}
                  />
                </div>
              </InnerWrap>
            </InputsWrap>
            <div>
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </LoginMenuWrap>
      </LoginBox>
    </Layout>
  );
}

AdminLogin.propTypes = {
  setToken: PropTypes.func.isRequired,
};

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 40px 0 0;
  border: 2px solid var(--black);
  border-radius: 4px;
`;
const LoginMenuWrap = styled.div`
  display: inherit;
  flex-direction: row;
  align-items: center;
`;
const InputsWrap = styled.div`
  display: inherit;
  flex-direction: column;
  padding: 0 10px 0 0;
`;
const InnerWrap = styled.div`
  display: inherit;
  flex-direction: row;
  div {
    margin: 5px 0;
  }
`;
const InputLabel = styled.div`
  width: 30px;
  display: inherit;
  justify-content: flex-start;
  font-weight: bold;
`;
