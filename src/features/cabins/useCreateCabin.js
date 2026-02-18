import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCapbins";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export default function useCreateCabin() {
    const { reset } = useForm();
    const queryClient = useQueryClient();

    const {isPending:isCreatingCabin,mutate:setCreateNewCabin} = useMutation({
    mutationFn: newCabin => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success('New Cabin is successfully Created');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset()
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