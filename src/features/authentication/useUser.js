import { useQuery } from "@tanstack/react-query";
import { getCurrentSession } from "../../services/apiAuth";

export default function useUser() {
   const {data:user,isLoading:isLoadingUser} = useQuery({
        queryKey:['user'],
        queryFn: getCurrentSession,
   })
    return {
        user,
        isLoadingUser,
        isAuthenticated:user?.role==='authenticated',
        
    }
}