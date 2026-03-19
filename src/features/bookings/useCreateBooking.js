import { useMutation } from "@tanstack/react-query"
import { createBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

export function useCreateBooking() {
    const { mutate:createBooking,isPending:isSendingBooking,error:bookingError } = useMutation({
        mutationFn: (newBooking) => createBooking(newBooking),
        onSuccess: () => {
            toast.success('New Booking have been created');
        },
        onError: () => {
            toast.error('Error occured while creating new Booking. Please try again later!')
        }
    });
    return {
        bookingError,
        createBooking,
        isSendingBooking,
    }
}