import { useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";

const NotReadyPage = () => {
  const navigate = useNavigate();
  const onClickMainBtn = () => {
    navigate("/");
  };
  return (
    <div className="error-msg">
      <h1>페이지 준비중입니다.</h1>
      <Button theme="gray" text="되돌아가기" onClick={onClickMainBtn} />
    </div>
  );
};

export default NotReadyPage;
