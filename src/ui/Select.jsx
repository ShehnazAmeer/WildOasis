export default function Select({ options, value,styles,handleChange}) {
  return (
    <select
      className={`font-bold text-lg shadow-sm px-2 py-5 rounded-sm bg-stone-100 border border-stone-300 focus:outline-none focus:ring foucs:ring-stone-200 mx-2  ${styles} dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 `}
      value={value}
      onChange={handleChange}
    >
      {
        options.map(option => (
          <option
            className="dark:bg-gray-800 dark:text-gray-200 "
            value={option.value}
            key={option.value}
          > {option.label} </option>
        ))
      }
    </select>
  )
}