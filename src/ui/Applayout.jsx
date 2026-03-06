import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Applayout() {
    return (
        <section className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen  dark:bg-gray-800 dark:text-gray-200 ">
            <Header />
            <Sidebar />
            <main className="bg-stone-200 dark:bg-gray-900 dark:text-gray-100 overflow-y-scroll ">
                <Outlet/>
            </main>  
        </section>
    )
}