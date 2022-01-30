import { useNavigate } from "react-router-dom";

import Layout from "../components/DefaultLayout";
import Button from "../components/Button";

export default function SelectMode() {
    const navigate = useNavigate();
    const onClickRecommendBtn = () => {
        navigate("/recommend/survey");
    };
    const onClickRandomBtn = () => {
        navigate("/recommend/random");
    };
    return (
        <Layout>
            <div id="select-mode" className="container">
                <Button
                    theme='gray'
                    text="시청패턴 분석 후 맞춤형으로 추천 받기 🎯"
                    width='500px'
                    height='120px'
                    onClick={onClickRecommendBtn} />
                <Button
                    theme='gray'
                    text="그냥 아무거나 빨리 추천 받기 🎲"
                    width='500px'
                    height='120px'
                    onClick={onClickRandomBtn} />
            </div>
        </Layout>
    );
}
