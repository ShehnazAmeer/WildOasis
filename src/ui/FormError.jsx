import { MdErrorOutline } from "react-icons/md";
export default function FormError({ children }) {
    return (
        <span
            className="text-2xl text-red-100 bg-red-500 px-1 py-3 border border-red-400 flex rounded-lg"
        > <MdErrorOutline className="text-3xl "/> {children} </span>
    )
}