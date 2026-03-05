import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    return (
        <header className="bg-stone-50 px-2 py-9 flex justify-between font-bolder tracking-wider text-4xl mx-15  ">
            <UserAvatar/>
            <HeaderMenu/>
        </header>
    )
}