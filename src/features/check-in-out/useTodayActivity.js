import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useTodayActivity() {
    const { isLoading: isTodayActivityLoading, data:todayActivity, error } = useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ['today-activity'],
    });

    if (error) {
        console.log(error.message);
        throw new Error('Error Occurred while getting Today Activity Data');
    }
    console.log(todayActivity);

    return {
        todayActivity,
        isTodayActivityLoading,
    }
    

}