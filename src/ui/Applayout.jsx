import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useForm } from "react-hook-form";

export default function Applayout() {
    return (
        <section className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen border border-red-500">
            <Header />
            <Sidebar />
            <main className="bg-stone-200 overflow-y-scroll ">
                <Outlet/>
            </main>  
        </section>
    )
}