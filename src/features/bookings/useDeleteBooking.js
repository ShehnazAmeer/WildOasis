import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function useDeleteBooking() {
    console.log('clicked from the useDeleteBooking');
    const queryClient = useQueryClient();
   const navigate= useNavigate();
    
   const {mutate:bookingDelete,isPending:isDeletingBooking} = useMutation({
        mutationFn: (bookingId) => deleteBooking(bookingId),
        onSuccess: () => {
            toast.success(`Booking deleted successfully`);
            queryClient.invalidateQueries({ active: true });
            navigate('/')
        },
        onError: (error) => {
            toast.error(`${error.message}`);
        }
    })
    return ({
        bookingDelete,
        isDeletingBooking,
    })
}