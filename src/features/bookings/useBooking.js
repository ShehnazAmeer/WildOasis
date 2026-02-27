import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export default function useBooking(id) {
    const { bookingId } = useParams();
    const { data:booking, isLoading: isBookingLoading, error } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => getBooking(bookingId),
    });

    return {
        booking,
        isBookingLoading,
        error,
    }
}