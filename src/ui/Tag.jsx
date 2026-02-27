const statusStyles = {
    unconfirmed: 'bg-blue-200 text-blue-600',
    'checked-in': 'bg-green-300 text-green-800',
    'checked-out': 'bg-stone-300 text-stone-700',
}
export default function Tag({status}) {
  return (
    <span
        className={`${statusStyles[status]} font-bold py-2 px-2 uppercase rounded-lg w-50 `}
    >
      {
          status.replace("-"," ")
      }
    </span>
  )
}