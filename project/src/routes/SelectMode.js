import { useNavigate } from "react-router-dom";

import Layout from "../components/DefaultLayout";
import Button from "../components/Button";

export default function SelectModePage() {
    const navigate = useNavigate();
    const onClickRecommendBtn = () => {
        navigate("/recommend/survey");
    };
    const onClickRandomBtn = () => {
        navigate("/recommend/random");
    };
    return (
        <Layout>
            <Button text={"시청패턴 분석 후 맞춤형으로 추천 받기"} onClick={onClickRecommendBtn} />
            <Button text={"그냥 아무거나 빨리 추천 받기"} onClick={onClickRandomBtn} />
        </Layout>
    );
}
