import LogoutUser from "../features/authentication/LogoutUser";

export default function Header() {
    return (
        <header className="bg-stone-50 px-2 py-9 flex justify-between font-bolder tracking-wider text-4xl  ">
            <h1>Header</h1>
            <LogoutUser/>
        </header>
    )
}