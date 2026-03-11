export default function Flag({countryFlag,country}) {
  return (
    <img
      className="max-w-10 rounded-md block border border-stone-500 "
      src={countryFlag}
      alt={`${country} flag`}
  />
  )
}