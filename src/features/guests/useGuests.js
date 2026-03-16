import { useQuery } from "@tanstack/react-query";
import { getGuest } from "../../services/apiGuests";

export default function useGuests() {
    const { data: guests, isLoading: isGuestsLoading, error: guestError } = useQuery({
        queryFn: getGuest,
        queryKey: ['guests'],
        
    });

    return {
        guests,
        isGuestsLoading,
        guestError,
    }
}