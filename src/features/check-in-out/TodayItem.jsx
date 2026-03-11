import Button from "../../ui/Button"
import Flag from "../../ui/Flag"
import Tag from "../../ui/Tag"
import useCheckout from "./useCheckout";

export default function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  const { checkout,isCheckout }= useCheckout();
  return (
    <li
      className="flex justify-between  px-4 gap-9 items-center first:border-t first:border-t-stone-400 first:pt-9 mb-4 "
    >
      <div
        className="flex justify-between items-center space-x-4"
      >
        {status === 'unconfirmed' && <Tag styles='text-lg' status='unconfirmed' />}
        {status === 'checked-in' && <Tag styles='text-lg' status='checked-in' />}
        
        <Flag country={guests.country} countryFlag={guests.countryFlag} />

        <div className="font-bold text-xl">
          {guests.fullName}
        </div>
      </div>
      <p className="text-xl "> {numNights} Nights </p>
      {status === 'unconfirmed' && (
        <Button
          as="link"
          to={`/checkin/${id}`}
          category='primary'
          styles="text-sm w-23  px-1 text-center"
        >
          Check in
        </Button>
      )}
      
      {status === 'checked-in' && (
        <Button
          onClick={() => checkout(id)}
          disabled={isCheckout}
          category='primary'
          styles="text-sm w-23 px-1 text-center"
        >
          Check out
        </Button>
      ) }
    </li>
  )
}