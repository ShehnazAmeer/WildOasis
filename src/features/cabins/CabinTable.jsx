import { useQuery } from "@tanstack/react-query"
import { getCabins } from "../../services/apiCapbins"
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinTable() {
  const {data:cabins,isLoading,error}= useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });
  
  if( isLoading)return <Spinner/>
  return (
    <div className="text-xlrounded-md overflow-hidden px-8 " role="table">
      <header
        role="row"
        className="border border-stone-300 bg-stone-200 rounded-sm grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] grid-flow-row items-center uppercase tracking-wider font-semibold text-stone-800 px-4 py-8"
      >
        <div>Image</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>
      {
        cabins.map(cabin=><CabinRow key={cabin.id} cabin={cabin} /> )
      }
    </div>
  )
}