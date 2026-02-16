import Logo from "./Logo";
import MainNav from './MainNav';

export default function Sidebar() {
    return (
        <aside className=" row-span-full bg-stone-50  flex flex-col gap-5">
            <Logo />
            <MainNav/>
        </aside>
    )
}