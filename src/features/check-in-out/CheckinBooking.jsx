import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";

import Button from "../../ui/Button";
import MainSection from "../../ui/MainSection";
import BookingDataBox from "../bookings/BookingDataBox";
import useBooking from "../bookings/useBooking";
import useCheckin from "../check-in-out/useCheckin";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import useSettings from "../settings/useSettings";

export default function CheckinBooking() {
  const navigate = useNavigate();
  const { booking = {}, isBookingLoading } = useBooking();
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [confirmBreakfast, setConfirmBreakfast] = useState(false);
  const { settings, isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const { checkin, isChecking } = useCheckin();
  
  const { id: bookingId, totalPrice, hasBreakfast, numGuests, numNights} = booking;
  const optionalTotalBreakfast = settings?.breakfastPrice * numGuests * numNights;
  console.log(optionalTotalBreakfast)

  function handleCheckIn() {
    console.log('checking...')
    if (!confirmPaid) return;

    if (confirmBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalTotalBreakfast,
          totalPrice: totalPrice+ optionalTotalBreakfast
        }
      })
     }
    else {
      checkin({
        bookingId,
        breakfast:{}
      });
    }
  }
  
  if (isBookingLoading ||isLoadingSettings) return <Spinner />
  
  return (
    <>
      <div className="flex justify-between items-center mx-12 ">
        <MainSection heading='Check in' styles="mr-2 ">
        </MainSection>
        <Button className='link' onClick={() => navigate(-1)} > &larr; Back </Button>
      </div>

      <BookingDataBox booking={booking} />

      {
        !hasBreakfast && (
          <div className="flex justify-between py-9 px-3 mx-18 bg-stone-50  dark:bg-gray-800 dark:text-gray-200 dark:border-gray-300 ">
                <Checkbox
                  id='breakfast'
                  type='checkbox'
                  value={confirmBreakfast}
                  onChange={() => {
                    setConfirmBreakfast(breakfast => !breakfast);
                    setConfirmPaid(false);
                  }}
                >
                  Want to add breakfast for { formatCurrency(optionalTotalBreakfast) } ?
                </Checkbox>
          </div>
          )
        }

      <div className="flex justify-between py-9 px-3 bg-stone-50  dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 mx-18 ">
        <Checkbox
          id='confirm'
          type='checkbox'
          value={confirmPaid}
          disabled={confirmPaid ||isChecking}
          onChange={() => setConfirmPaid(confirm => !confirm)}
        >
        I confirm that <span className="font-bold italic">{booking.guests.fullName}</span>  has paid total amount of {!confirmBreakfast? formatCurrency(totalPrice): `${formatCurrency(totalPrice+optionalTotalBreakfast)} (${formatCurrency(totalPrice)} + ${formatCurrency(optionalTotalBreakfast)})` } .
       </Checkbox>
      </div>


      <div className="flex gap-5 justify-end mx-16 mt-5">
        <Button
          category='primary'
          disabled={!confirmPaid || isChecking}
          onClick={handleCheckIn}
        >
          Check in booking #{bookingId}
        </Button>
        <Button category='secondary' onClick={() => navigate(-1)}>Back</Button>
      </div>
    </>

  )
}
