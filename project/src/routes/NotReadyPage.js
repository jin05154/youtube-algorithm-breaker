import { useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";

const NotReadyPage = ({ msg }) => {
  const navigate = useNavigate();
  const onClickMainBtn = () => {
    navigate("/");
  };
  return (
    <div className="error-msg">
      <h2>{msg}</h2>
      <Button theme="gray" text="되돌아가기" onClick={onClickMainBtn} />
    </div>
  );
};

export default NotReadyPage;
