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
  const { id,status } = booking;

  if (isBookingLoading) return <Spinner/>
  return (
    <>
      <div className="flex justify-between items-center">
        <MainSection heading={`Booking # ${id} `} styles='mr-2'>
          <Tag status={status} />
        </MainSection>
        
        <Button className='custom' styles="text-blue-600" onClick={()=>navigate(-1)}> &larr; Back </Button>
      </div>
      <BookingDataBox booking={booking} />
      <div className="text-right ">
          <Button>Back</Button>
      </div>
    </>
  )
}