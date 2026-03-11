import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext/useDarkModeContext";
import { eachDayOfInterval, format,  isSameDay, subDays } from "date-fns";

const fakeData = [
  { label: "Jan 09", totalSales: 480, extrasSales: 20 },
  { label: "Jan 10", totalSales: 580, extrasSales: 100 },
  { label: "Jan 11", totalSales: 550, extrasSales: 150 },
  { label: "Jan 12", totalSales: 600, extrasSales: 50 },
  { label: "Jan 13", totalSales: 700, extrasSales: 150 },
  { label: "Jan 14", totalSales: 800, extrasSales: 150 },
  { label: "Jan 15", totalSales: 700, extrasSales: 200 },
  { label: "Jan 16", totalSales: 650, extrasSales: 200 },
  { label: "Jan 17", totalSales: 600, extrasSales: 300 },
  { label: "Jan 18", totalSales: 550, extrasSales: 100 },
  { label: "Jan 19", totalSales: 700, extrasSales: 100 },
  { label: "Jan 20", totalSales: 800, extrasSales: 200 },
  { label: "Jan 21", totalSales: 700, extrasSales: 100 },
  { label: "Jan 22", totalSales: 810, extrasSales: 50 },
  { label: "Jan 23", totalSales: 950, extrasSales: 250 },
  { label: "Jan 24", totalSales: 970, extrasSales: 100 },
  { label: "Jan 25", totalSales: 900, extrasSales: 200 },
  { label: "Jan 26", totalSales: 950, extrasSales: 300 },
  { label: "Jan 27", totalSales: 850, extrasSales: 200 },
  { label: "Jan 28", totalSales: 900, extrasSales: 100 },
  { label: "Jan 29", totalSales: 800, extrasSales: 300 },
  { label: "Jan 30", totalSales: 950, extrasSales: 200 },
  { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
  { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
  { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
  { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
  { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
  { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
  { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
];

export default function SalesChart({bookings,numDays}) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays-1),
    end: subDays(new Date(),0),
  });

  const data = allDates.map(date => {
    return {
      label: format(date, 'MM dd'),
      totalSales: bookings.filter(booking =>
        isSameDay(date, new Date(booking.created_at))
      ).reduce((acc, cur) => acc + cur.totalPrice, 0),
      
      extrasSales: bookings.filter(booking =>
        isSameDay(date, new Date(booking.created_at))).reduce((acc, cur) => acc + cur.extrasPrice, 0),
    }
  })

  return (
    <div
      className="col-span-full rounded-lg bg-stone-100  p-5 flex flex-col gap-5 dark:bg-gray-700 dark:text-gray-100"
    >
      <h2>Sales from {format(allDates.at(0),'MM dd yyyy')} &mdash; {format(allDates.at(-1),'MM dd yyyy')} </h2>
      <ResponsiveContainer className='dark:bg-gray-700 dark:text-gray-100'  height={300}
          width={'100%'} style={{margin:'auto' }}>
        <AreaChart
          data={data}
          className="dark:bg-gray-700 dark:text-gray-100"
         >
          <XAxis dataKey='label' tick={{fill:isDarkMode?'#fff':'#374151'}}   />
          <YAxis unit='$' tick={{fill:isDarkMode?'#fff':'#374151'}}  />
          <CartesianGrid />
          <Tooltip
            contentStyle={ {backgroundColor:isDarkMode? '#374151':'#fff',border:'none'}}
          />
          <Area
            dataKey='totalSales'
            type='monotone'
            stroke={isDarkMode ? '#e8e8e8' : '#4f46e5'}
            fill={isDarkMode ? "#4f46e5" : "#c7d2fe"}
            strokeWidth={2}
            name='Total sales'
            unit='$'
          />
          <Area
            dataKey='extrasSales'
            type='monotone'
            stroke={isDarkMode ? '#9cefd9' : '#097175'}
            fill={isDarkMode ? "#47a5a9" : "#80d9f0"}
            strokeWidth={2}
            name='Extras sales'
            unit='$'
          />
      </AreaChart >
      </ResponsiveContainer>

    </div>
  )
}