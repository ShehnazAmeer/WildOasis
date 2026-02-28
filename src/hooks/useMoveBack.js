import { useNavigate } from "react-router-dom";

export function useMoveBack() {
    const navigate = useNavigate();
    const moveBack = () => navigate(-1);
    return moveBack
}