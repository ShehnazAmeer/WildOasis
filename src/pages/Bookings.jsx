import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <section className="flex justify-between py-9 ">
        <h1 className="font-extrabold text-4xl max-md:text-xl">
          All bookings
        </h1>
       <BookingTableOperations/>
    </section>
    <BookingTable/>
    </>

  );
}

export default Bookings;
