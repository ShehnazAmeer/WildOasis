import { format, isToday } from "date-fns";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiEllipsisVertical, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";

export default function BookingRow({ booking }) {
    const { id: bookingId, startDate, endDate, numNights, totalPrice, status, guests: { fullName, email }, cabins: { name } } = booking;
    
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

            <Tag status={status} />
            
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