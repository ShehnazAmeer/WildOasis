import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCapbins";

export default function useCreateCabin() {
    const queryClient = useQueryClient();

    const {isPending:isCreatingCabin,mutate:setCreateNewCabin} = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success('New Cabin is successfully Created');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
    },
    onError: (err) => {
      toast.error(err.message)
    }
  });

    return (
        [
            isCreatingCabin,
            setCreateNewCabin,
        ]
    )
}