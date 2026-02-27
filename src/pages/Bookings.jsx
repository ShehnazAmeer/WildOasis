import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import MainSection from "../ui/MainSection";

function Bookings() {
  return (
    <>
      <MainSection heading='All bookings'>
         <BookingTableOperations/>
      </MainSection>
    <BookingTable/>
    </>

  );
}

export default Bookings;
