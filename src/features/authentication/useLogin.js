import { useMutation, useQueryClient} from "@tanstack/react-query";
import { login as userLogin } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const navigate = useNavigate();
    const queryClient= useQueryClient()

    const { mutate: login, isPending: isLogin } = useMutation({
        mutationFn: ({ email, password }) => userLogin({
            email,
            password,
        }),
        onSuccess: (data) => {
            console.log(data);
            toast.success('user Successfully login');
            queryClient.setQueryData(['user'],data.user)
            navigate('/dashboard');
            
        },
        onError: (error) => {
            console.log(error.message);
            toast.error(error.message)
            throw new Error('Error found while login. Please try again later')
        }
        
    });
    return {
        login,
        isLogin,
    }
}