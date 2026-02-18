import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin } from "../../services/apiCapbins";

export default function useDeleteCabin() {
    const queryClient = useQueryClient();

const {isPending:isDeleteCabin,mutate:setDeleteCabin} = useMutation({
  mutationFn: id => deleteCabin(id),
  onSuccess: () => {
    toast.success('Cabin Successfully Deleted');

    queryClient.invalidateQueries({
      queryKey:["cabins"]
    })
  },
  onError: (error) => {
    toast.error(error.message)
  }
})
    return [
        isDeleteCabin,setDeleteCabin
    ]
}
