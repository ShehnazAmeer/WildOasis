import { HiArrowRightOnRectangle, HiBars3, HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Menus from "./Menus";
import useSignout from "../features/authentication/useSignout";

export default function HeaderMenu() {
    const navigate = useNavigate();
    const { logout} = useSignout();
    function handleLogout() {
        logout()
    }
    return (
        <div className="flex">
            <Menus>
                <Menus.Menu>
                    <Menus.Toggle id='header-menu'>
                        <HiBars3 />
                    </Menus.Toggle>

                    <Menus.List id='header-menu'>
                        <Menus.MenuButton onClick={()=>navigate('/account')} > 
                            <HiOutlineUser />
                            User Info
                        </Menus.MenuButton>
                        <Menus.MenuButton onClick={handleLogout}>
                            <HiArrowRightOnRectangle/>
                            Logout
                        </Menus.MenuButton>
                    </Menus.List>
                    </Menus.Menu>
            </Menus>
        </div>
        // <ul className="flex gap-4">
        //     <li>
        //         <Button onClick={ ()=> navigate('/account')} >
        //             <HiOutlineUser />
        //         </Button>
        //     </li>
        //     <li> <LogoutUser/> </li>
        // </ul>
    )
}