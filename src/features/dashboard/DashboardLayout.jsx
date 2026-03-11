import { bookings } from "../../data/data-bookings";
import Spinner from "../../ui/Spinner";
import useCabin from "../cabins/useCabin";
import TodayActivity from "../check-in-out/TodayActivity";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";
import Stats from "./Stats";
import { useRecentBookings } from "./useRecentBookings"
import { useRecentStays } from "./useRecentStays";


export default function DashboardLayout() {
  const { filterBookings, isFilteringBookigs } = useRecentBookings();
  
  const {cabins,isLoadingCabins} =useCabin();

  const {confirmStays,numDays,isStaysLoading} = useRecentStays();

  if (isFilteringBookigs ||isStaysLoading ||isLoadingCabins ) return <Spinner />
  
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-4 ">
      <Stats bookings={filterBookings} confirmStays={confirmStays} numDays={numDays} cabinCount={cabins.length} />
      <TodayActivity/>
      <DurationChart confirmStays={confirmStays}  />
      <SalesChart bookings={filterBookings} numDays={numDays} />
    </div>
  )
}