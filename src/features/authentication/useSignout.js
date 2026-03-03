import { useMutation, useQueryClient } from "@tanstack/react-query";
import { singOut } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useSignout() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    
  const {mutate:logout,isPending:isLogout} =  useMutation({
        mutationFn: singOut,
        onSuccess: () => {
            toast.success('User Logout Successfully');
            queryClient.removeQueries();
            navigate('/login',{replace:true})
        },
      onError: (err) => {
          console.log(err.message);
            toast.error(err.message)
        }
    })

    return {
        logout,
        isLogout
    }
}