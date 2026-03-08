import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import MainSection from "../ui/MainSection";

function Dashboard() {
  useRecentBookings();
  return (
    <div
      className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10  "  
    >
      <MainSection heading='Dashboard'>
         <DashboardFilter/>
      </MainSection>
       <DashboardLayout/>
    </div>
    
  );
}

export default Dashboard;
