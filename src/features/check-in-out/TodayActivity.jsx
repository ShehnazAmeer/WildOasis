import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import { useTodayActivity } from "./useTodayActivity"

export default function TodayActivity() {
  const { todayActivity, isTodayActivityLoading } = useTodayActivity();
  console.log(todayActivity);
  return (
    <div
      className="bg-stone-100  rounded-md p-4 flex flex-col gap-3 col-span-2 pt-4  dark:bg-gray-700 dark:text-gray-100"
    >
      <div>
        <h2>Today</h2>
      </div>
      {
        !isTodayActivityLoading ? (
          todayActivity.length > 0 ? (
            <TodayList>
              {
                todayActivity.map(activity => (
                  <TodayItem activity={activity} key={activity.id} />
                ))
              }
            </TodayList>
          )
            : (
              <p
                className="text-center text-xl font-bold mt-7"
              >
                No Activity to Show Today!
              </p>
            )
        ) :
          (<Spinner />) 
      }

    </div>
  )
}

function TodayList({children}) {
  return (
    <ul className="overflow-y-auto">
      {children}
    </ul>
  )
}