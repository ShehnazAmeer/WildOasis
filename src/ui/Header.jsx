import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
    return (
        <header className="bg-stone-50 px-2 py-9 flex justify-between font-bolder tracking-wider text-4xl mx-15 dark:bg-gray-800 dark:text-gray-200 ">
            <UserAvatar />
            <div className="flex">   
            <DarkModeToggle/>
            <HeaderMenu/>
            </div>
        </header>
    )
}