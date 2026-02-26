import Fillter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function BookingTableOperations(){
  return (
    <div className="flex items-center gap-2">
      <Fillter
        filterField='status'
        options={[
          { value: 'all', label: 'All' },
          { value: 'unconfirmed', label: 'UnConfirmend' },
          { value: 'checked-in', label: 'Checked in' },
          { value: 'checked-out', label: 'Checked out' },
          
        ]}
      />
      <SortBy
        options={[
          { value: 'startDate-asc', label: 'Sort by date (Latest date first)' },
          { value: 'startDate-dsc', label: 'Sort by date(Oldest date first' },
          { value: 'totalPrice-asc', label: 'Sort by amount (lowest first)' },
          { value: 'totalPrice-dsc', label: 'Sort by amount (highest first)' },
          
        ]}
      />
  </div>
)
}