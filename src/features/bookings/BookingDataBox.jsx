import { HiOutlineChatBubbleBottomCenterText, HiOutlineCheckCircle, HiOutlineCurrencyDollar, HiOutlineHomeModern } from "react-icons/hi2";
import DataItem from "../../ui/DataItem";
import { format, isToday } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

export default function BookingDataBox({ booking }) {
  const {created_at,startDate, endDate,extrasPrice,observations,guests:{fullName:guestName,email,country,countryFlag,nationalID},cabins:{name:cabinName},hasBreakfast,isPaid,numGuests,numNights,observation,status,totalPrice,cabinPrice} = booking;

  return (
    <section
      className="bg-stone-100 border border-stone-300 rounded-lg overflow-hidden"
    >
      <header className="bg-blue-600 text-blue-50 px-8 py-16 text-2xl font-bold flex items-center justify-between" >
        <div className="flex items-center gap-5 font-bold">
          <HiOutlineHomeModern className="h-9 w-9" />
          <p> {numNights} nights in Cabin <span className="text-3xl ml-1"> {cabinName} </span> </p>
        </div>
        <p>
          {
            format(new Date(startDate), "EEE,MMM dd yyyy")}
          (
          {isToday(new Date(startDate)) ?
            "Today" : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate),"EEE,MMM dd yyyy")}
        </p>
      </header>

      <section className="px-13 py-15">
        <div className="flex items-center gap-4 mb-6 text-stone-500">
          {
            countryFlag && (
              <img
                className="max-w-10 rounded-md block border border-stone-500"
                src={countryFlag}
                alt={`${country} flag`}
              />
            ) 
          }
          <p className="font-extrabold text-stone-500">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
          </p>
          <span>&bull;</span>
          <p> {email} </p>
          <span>&bull;</span>
          <p>National ID {nationalID} </p>
        </div>
        {
          observations && (
            <DataItem
              icon={<HiOutlineChatBubbleBottomCenterText />}
              label='Observation'
            >
              {observations}
            </DataItem>
          )
        }
        <DataItem
          icon={<HiOutlineCheckCircle />}
          label='Breakfast Included?'
        >
          {hasBreakfast? 'Yes':'No'}
        </DataItem>

        <div className= {`flex items-center justify-between px-5 py-12 rounded-sm mt-8 ${isPaid? 'bg-green-200':'bg-amber-200'}`}>
          <DataItem
            icon={<HiOutlineCurrencyDollar />}
            label='Total Price'
          >
            {formatCurrency(totalPrice)}
              {hasBreakfast &&
              `(${formatCurrency(cabinPrice) } cabin + ${formatCurrency(extrasPrice) } breakfast)`
              }
          </DataItem>
          <p className="uppercase text-2xl font-bold">
            {isPaid? "Paid":"Will pay once reached at hotel"}
          </p>
        </div>

      </section>
      <footer className="px-6 py-14 text-2xl text-stone-600 text-right">
        <p>Booked on {format(new Date(created_at),"EEE, MMM dd yyyy,p")} </p>
      </footer>
    </section>
  )
}