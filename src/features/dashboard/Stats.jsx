import { HiOutlineBanknotes, HiOutlineBriefcase } from "react-icons/hi2"
import Stat from "./Stat"
import { formatCurrency } from "../../utils/helpers";
import useCabin from "../cabins/useCabin";

export default function Stats({ bookings, confirmStays, numDays, cabinCount }) {
    const numBookings = bookings?.length;

    const totalSales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    const totalCheckin = confirmStays?.length;

    const totalNumCheckInNumNights = confirmStays.reduce((acc, cur) => acc + cur.numNights, 0);

    const occupancy = Math.round((totalNumCheckInNumNights / (numDays * cabinCount) * 100));
    
    //occupancy
    //totals num of checkin numNights / all nights available (num days * num cabins)

    return (
        <>
            <Stat title='Bookings' color='bg-blue-200' value={numBookings}>
                <HiOutlineBriefcase className="h-15 w-15 text-blue-700"/>
            </Stat>

            <Stat title='Sales' color='bg-green-200' value={formatCurrency(totalSales)}>
                <HiOutlineBanknotes className="h-15 w-15 text-green-700"/>
            </Stat>
            
            <Stat title='check in' color='bg-purple-200' value={totalCheckin}>
                <HiOutlineBriefcase className="h-15 w-15 text-purple-700"/>
            </Stat>
            
            <Stat title='Occupancy rate' color='bg-yellow-200' value={`${occupancy}%`}>
                <HiOutlineBriefcase className="h-15 w-15 text-yellow-600"/>
            </Stat>
        </>
    )
}