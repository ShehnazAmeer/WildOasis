import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext/useDarkModeContext";

const startDataLight = [
  {
    duration: "1 night",
    value: 2,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 3,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 4,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 8,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 6,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 4,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 8,
    color: "#a855f7",
  },
];

function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 nights");
      if (num === 3) return incArrayValue(arr, "3 nights");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 nights");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 nights");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 nights");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 nights");
      if (num >= 21) return incArrayValue(arr, "21+ nights");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

export default function DurationChart({confirmStays}) {
  const { isDarkMode } = useDarkMode();

  const data = prepareData(startDataLight, confirmStays);

  return (
    <div
      className="col-span-2 bg-stone-100 dark:bg-gray-700 dark:text-gray-100 rounded-md px-4 py-9"
    >
      <h2>Stay duration summary</h2>
      <ResponsiveContainer width='100%' height={290}  >
        <PieChart>
          <Pie
            data={data}
            nameKey='duration'
            dataKey='value'
            innerRadius='50%'
            outerRadius='90%'
            cx='50%'
            cy='50%'
            paddingAngle='2  '
          >
            {
              startDataLight.map(entry => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.duration}
                />
              ) )
            }
          </Pie>
          
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? '#374151' : '#fff',
              border: 'none',
            }}
            itemStyle={{
              color: isDarkMode ? '#fff' : '#333'
            }}
          />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="top"
            iconType="square"
            iconSize='7'
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
