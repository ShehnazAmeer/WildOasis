import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateBooking from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useCheckout() {
    const queryClient= useQueryClient();
   const {mutate:checkout, isPending:isCheckout}= useMutation({
       mutationFn: (bookingId) => updateBooking(bookingId, {
            status:'checked-out'
        }),
        onSuccess: () => {
            toast.success('Booking successfully checkout ');
            queryClient.invalidateQueries({active:true
            })
        },
        onError: (error) => {
            console.log(error.message);
            toast.error(error.message)
        }
   })
    return ({
        checkout,
        isCheckout,
    })
    
}