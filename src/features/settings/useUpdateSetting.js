import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSetting() {
    const queryClient = useQueryClient();
    const{isPending:isPendingSetting,mutate:setSetting}= useMutation({
        mutationFn: newSettings => updateSetting(newSettings),
        onSuccess: () => {
            toast.success('Settings are updated successfully');
            queryClient.invalidateQueries({
                queryKey:['settings']
            })
        },
        onError: (err) => {
            toast.error(err.message);
        }
    })
    return[isPendingSetting,setSetting]
}