import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import useBookings from "./useBookings";

function BookingTable() {
  const { bookings,count, isLoadingBookings } = useBookings();
  
  if (!bookings?.length) return <Empty resource='Bookings' />

  if (isLoadingBookings) return <Spinner />

  
  return (
    <Menus>
      <Table columns='0.6fr 2fr 3.4fr 1.4fr 1fr 3.2rem'>
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={bookings}
          render={booking => (
            <BookingRow
              booking={booking}
              key={booking.id}
            /> 
          )}
        />
        <Table.Footer>
          <Pagination
            count={count}
          />
        </Table.Footer>
    </Table>
    </Menus>
  )
}


export default BookingTable;
