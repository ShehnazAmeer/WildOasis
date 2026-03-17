import AddBooking from "../features/bookings/AddBooking";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import MainSection from "../ui/MainSection";

function Bookings() {
  return (
    <div
      className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10 "  
    >
    <MainSection heading='All bookings'>
        <BookingTableOperations />
      </MainSection>
      <AddBooking/>
    <BookingTable/>
    </div>

  );
}

export default Bookings;
