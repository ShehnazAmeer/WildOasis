import { useMutation, useQueryClient } from "@tanstack/react-query"
import updateBooking from "../../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

export default function Checkin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

   const {mutate:checkin,isPending:isChecking }= useMutation({
        mutationFn: ({bookingId,breakfast}) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
            ...breakfast
        }),
        onSuccess: (data)=>{
            toast.success(`Booking #${data.id} successfully check in`)
            queryClient.invalidateQueries({
                queryKey:["bookings"],
            })
            navigate('/');
        },
        onError: (error) => {
            toast.error(error.message)
        }
   })
    return {
        checkin,
        isChecking,
    }
}