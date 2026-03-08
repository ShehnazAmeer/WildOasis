import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import {  useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
    const [searchParams] = useSearchParams();
    
    const numDays = !searchParams.get('last') ? 7 : searchParams.get('last');
    
    const queryDate = subDays(new Date(), numDays).toISOString();
    
    const {data:stays,error:staysError,isLoading:isStaysLoading}= useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ['stays', `last-${numDays}`]
    });

    if (staysError) {
        console.log(staysError.message);
        throw new Error('Error occured while loading confirm stays');
    }

    const confirmStays=stays?.filter(stay=>stay.status==='checked-in'|| stay.status==='checked-out')

    return {
        stays,
        confirmStays,
        isStaysLoading,
        numDays,
    }

}