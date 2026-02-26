import { format, isToday } from "date-fns";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiEllipsisVertical, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const statusStyles = {
    unconfirmed: 'bg-blue-200 text-blue-600',
    'checked-in': 'bg-green-300 text-green-800',
    'checked-out': 'bg-stone-300 text-stone-700',
}

export default function BookingRow({ booking }) {
    const { id: bookingId, startDate, endDate, numNights, totalPrice, status, guests: { fullName, email }, cabins: { name } } = booking;
    console.log(bookingId);
    
    const navigate = useNavigate();
  
    return (
        <Table.Row>
            <div> {name} </div>
            <div>
                <span className="block font-bold"> {name} </span>
                <span className="block"> {fullName} {email} </span>
            </div>
            <div>
                <span className="block italic font-bold">{isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)}{""} &mdash; {numNights} night stay</span>
                
                <span>
                    {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
                    {format(new Date(endDate),"MMM dd yyyy")}
                </span>
            </div>
            <span
                className={`${statusStyles[status]} font-bold py-2 px-2 uppercase rounded-lg w-50 `}
            >
                {
                    status.replace("-"," ")
                }
            </span>
            <div> {formatCurrency(totalPrice)} </div>
            <Menus.Menu>
                <Menus.Toggle id={bookingId}> 
                    <HiEllipsisVertical/>
                </Menus.Toggle>
                <Menus.List id={bookingId} >
                    <Menus.MenuButton onClick={()=>navigate(`/bookings/${bookingId}`)}>
                        <HiEye/> See details
                    </Menus.MenuButton>
                </Menus.List>
            </Menus.Menu>
        </Table.Row>
    )
}