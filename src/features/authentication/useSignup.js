import { useMutation } from "@tanstack/react-query";
import { signUp as userSignUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const { mutate, isPending: isSignUp } = useMutation({
        mutationFn: ({ email, password, fullName }) => userSignUp(email, password, fullName),
        onSuccess: (user) => {
            console.log(user)
            toast.success('User Created succesfully. Please verify new account from user user\'s email ')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });

    return {
        signUp:mutate,
        isSignUp,
    }
    
   
}