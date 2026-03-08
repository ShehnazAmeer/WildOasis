import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentBookings() {
    const [searchParams] = useSearchParams();
    const numDays = !searchParams.get('last') ? 7 : searchParams.get('last');

    const queryDate = subDays(new Date(), numDays).toISOString();
    
    const {data:filterBookings,errorFilterBookings,isLoading:isFilteringBookigs}= useQuery({
        queryKey: ['bookings', `last-${numDays}`],
        queryFn: () => getBookingsAfterDate(queryDate),
    });

    if (errorFilterBookings) {
        console.log(errorFilterBookings.message);
        throw new Error('Error occured while performing filter on bookings data')
    }

    return {
        filterBookings,
        isFilteringBookigs,
    }
}