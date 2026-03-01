import { format, isToday } from "date-fns";
import Table from "../../ui/Table";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEllipsisVertical, HiEye, HiTrash, HiXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Tag from "../../ui/Tag";
import useCheckout from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { deleteBooking } from "../../services/apiBookings";
import Button from "../../ui/Button";

export default function BookingRow({ booking }) {
    const navigate = useNavigate();
    const { checkout, isCheckout } = useCheckout();
    const{ bookingDelete,isDeletingBooking }=useDeleteBooking()
    const { id: bookingId, startDate, endDate, numNights, totalPrice, status, guests: { fullName, email }, cabins: { name } } = booking;
    
  
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
            <Modal>
                <Menus.Menu>
                    <Menus.Toggle id={bookingId}> 
                        <HiEllipsisVertical/>
                    </Menus.Toggle>
                    <Menus.List id={bookingId} >
                        <Menus.MenuButton onClick={()=>navigate(`/bookings/${bookingId}`)}>
                            <HiEye/> See details
                        </Menus.MenuButton>
                        
                        <Modal.Open opens='delete'>
                            <Menus.MenuButton>
                                <HiTrash />
                                <span>Delete</span>
                            </Menus.MenuButton>
                        </Modal.Open>

                        <Modal.Window name='delete'>
                            <ConfirmDelete
                                resourceName='booking'
                                onConfirm={() => deleteBooking(bookingId)}
                            />
                            <Button category="close" styles="absolute right-9 top-0" >
                                <HiXMark/>
                            </Button>
                        </Modal.Window>

                       
                        {
                            status === 'unconfirmed' && (
                                <Menus.MenuButton onClick={()=> navigate(`/checkin/${bookingId}`)} >
                                 <HiArrowDownOnSquare/> Check in
                                </Menus.MenuButton>
                            )
                        }
                        {
                            status === 'checked-in' && (
                                <Menus.MenuButton
                                    onClick={() => checkout(bookingId)}
                                    disabled={isCheckout}
                                >
                                    <HiArrowUpOnSquare/> Check out
                                </Menus.MenuButton>
                            )
                        }
                    </Menus.List>
                </Menus.Menu>
            </Modal>

        </Table.Row>
    )
}