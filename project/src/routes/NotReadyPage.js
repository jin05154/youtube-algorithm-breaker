import { useNavigate } from "react-router-dom";

import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

const NotReadyPage = ({ msg }) => {
  const navigate = useNavigate();
  const onClickMainBtn = () => {
    navigate("/");
  };
  return (
    <Layout type="simple">
      <h2 id="error-msg">{msg}</h2>
      <Button
        type="default"
        theme="gray"
        text="되돌아가기"
        onClick={onClickMainBtn}
      />
    </Layout>
  );
};

export default NotReadyPage;
