import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/GlobalConstants";

export default function useBookings() {
    const [searchParams] = useSearchParams();
    const queryClient = useQueryClient();

    //Filter
    const filterValue = searchParams?.get('status');
    //sort
    const sortUrlData = searchParams?.get('sortby') || 'startDate-asc'
    //pagination
    const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
    
    const [field, direction] = sortUrlData.split("-");
    
    const sortby = { field, direction };

    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue,filterMethod:'eq' };
    
   const {data:{data:bookings,count}={},error,isLoading:isLoadingBookings}= useQuery({
        queryKey: ['bookings',filter,sortby,page],
        queryFn:()=> getAllBookings({filter,sortby,page})
   })
    
    const pageCount = count / PAGE_SIZE;
    
    //forward page prefetching
    if (page < pageCount)
        queryClient.prefetchQuery({
        queryKey: ['bookings', filter, sortby, page + 1],
         queryFn:()=> getAllBookings({filter,sortby,page:page+1})
        })
    
    //previous page prefetching
    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortby, page - 1],
            queryFn:()=>getAllBookings({filter,sortby,page:page-1})
        })
    
    return {
        bookings,
        count,
        page,
        error,
        isLoadingBookings,
    }
}