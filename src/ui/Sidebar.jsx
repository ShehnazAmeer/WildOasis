import Uploader from "../data/Uploader";
import Logo from "./Logo";
import MainNav from './MainNav';

export default function Sidebar() {
    return (
        <aside className=" row-span-full bg-stone-50  flex flex-col gap-5 dark:border-r-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ">
            <Logo />
            <MainNav />
            <Uploader/>
        </aside>
    )
}