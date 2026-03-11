import { useNavigate} from "react-router-dom"
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import MainSection from "../../ui/MainSection";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";
import useCheckout from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiXMark } from "react-icons/hi2";
import Empty from "../../ui/Empty";

export default function BookingDetail() {
  const navigate = useNavigate();
  const { booking = {}, isBookingLoading, error } = useBooking()
  const { checkout, isCheckout } = useCheckout();
  const { bookingDelete, isDeletingBooking } = useDeleteBooking();
  const { id: bookingId, status } = booking;

  if(Object.keys(booking).length === 0) return  <Empty resource='Booking' />
  

  if (isBookingLoading) return <Spinner />
  
  return (
    <>
      <div className="flex justify-between items-center  mx-12  ">
        <MainSection heading={`Booking # ${bookingId} `} styles='mr-2'>
          <Tag status={status} />
        </MainSection>
        
        <Button
          className='link'
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </Button>
      </div>
      <BookingDataBox booking={booking} />
      <div className="flex gap-5 justify-end mx-16 mt-5 ">
        {
          status==='unconfirmed' && <Button category='primary' onClick={()=>navigate(`/checkin/${bookingId}` )} >Check in </Button>
        } 
        {
          status === 'checked-in' && (
            <Button
              category='primary'
              onClick={() => checkout(bookingId)}
              disabled={isCheckout}
            >
              check out
            </Button>
          )
        }
        <Modal>
          <Modal.Open opens='delete'>
            <Button category='primary'>Delete Booking</Button>
          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete resourceName='booking' onConfirm={() => { 
              bookingDelete(bookingId)
              navigate(-1)
            }}/>
            <Button category="close" styles="absolute right-9 top-0" >
                <HiXMark/>
            </Button>
          </Modal.Window>
        </Modal>

        <Button category='secondary' onClick={()=>navigate(-1)} >Back</Button>
      </div>
    </>
  )
}