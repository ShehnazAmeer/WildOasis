import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
    const queryClient=useQueryClient();
   const{mutate:updateUser, isPending:isUpdatingUser }= useMutation({
        mutationFn: ({ fullName, avatar, password }) => UpdateCurrentUser(fullName, avatar, password ),
       onSuccess: (data) => {
           queryClient.invalidateQueries({
                queryKey:['user']
            })
            toast.success('User account updated scuccessfully');
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })

    return (
        {
            updateUser,
            isUpdatingUser,
        }
    )

}