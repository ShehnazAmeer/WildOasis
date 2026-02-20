import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCapbins";

export default function useUpdateCabin() {
    const queryClient = useQueryClient();

    const { isPending: isUpdateCabin, mutate: setUpdateCabin } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success('Cabin is Successfully Updated');
            queryClient.invalidateQueries({
                queryKey: ['cabins'],
            });
        },
        onError: (err) => { toast.error(err.message) }
    });

    return (
        [
            isUpdateCabin,
            setUpdateCabin,
        ]
    )
}