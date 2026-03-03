import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser"
import Spinner from "./Spinner";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
    const { user, isLoadingUser,isAuthenticated } = useUser();
    const navigate= useNavigate();

    useEffect(function () {
        if (!isAuthenticated && !isLoadingUser)
            return navigate('/login')
    },[isAuthenticated,isLoadingUser,navigate])

    if (isLoadingUser) return (
        <div
            className="h-screen bg-stone-200 flex justify-center items-center"
        >
            <Spinner />
        </div> 
    )  

    if (isAuthenticated)
        return (
        children
    )
}