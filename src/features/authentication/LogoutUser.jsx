import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Button from "../../ui/Button";
import useSignout from "./useSignout";
import Spinner from "../../ui/Spinner";

export default function LogoutUser() {
    const { logout, isLogout } = useSignout();
    function handleLogout() {
        logout()
    }
    return (
        
        <Button onClick={handleLogout} disabled={isLogout} >
            <HiArrowRightOnRectangle/>
        </Button>
    )
}