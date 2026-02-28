import { useNavigate} from "react-router-dom"
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import MainSection from "../../ui/MainSection";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";

export default function BookingDetail() {
  const navigate = useNavigate();
  const { booking={}, isBookingLoading, error } = useBooking()
  const { id:bookingId,status } = booking;

  if (isBookingLoading) return <Spinner/>
  return (
    <>
      <div className="flex justify-between items-center">
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
      <div className="flex gap-5 justify-end">
        {
          status==='unconfirmed' && <Button category='primary' onClick={()=>navigate(`/checkin/${bookingId}` )} >Check in </Button>
        } 
        <Button category='secondary' onClick={()=>navigate(-1)} >Back</Button>
      </div>
    </>
  )
}