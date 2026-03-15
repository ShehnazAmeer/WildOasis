import { useMutation } from "@tanstack/react-query";
import { createGuests } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useCreateGuest() {
    const { mutate: createGuest, isPending: isCreatingGuest } = useMutation({
        mutationFn: newGuest => createGuests(newGuest),
        onSuccess: () => {
            toast.success('Guest created successfully')
        },
        onError: () => {
            toast.error('There is error while creating guest')
        }
    });
    return {
        createGuest,
        isCreatingGuest,
    }
}