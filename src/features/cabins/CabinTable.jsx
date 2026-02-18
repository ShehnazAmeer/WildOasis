import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabin from "./useCabin";

export default function CabinTable() {
 const{cabins,isLoadingCabins}= useCabin();
  
  if( isLoadingCabins)return <Spinner/>
  return (
    <div className="text-xlrounded-md overflow-hidden px-8 " role="table">
      <header
        role="row"
        className=" bg-stone-200 rounded-sm grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr_1fr] grid-flow-row  uppercase tracking-wider font-semibold text-stone-800 py-3 border border-stone-300 space-y-3  max-md:w-auto max-md:text-lg max-sm:text-xs"
      >
        <div>Image</div>
        <div>Cabin</div>
        <div>Description</div>
        <div>Capacity</div>
        <div>Price</div>
        <div >Discount</div>
      </header>
      {
        cabins.map(cabin=><CabinRow key={cabin.id} cabin={cabin} /> )
      }
    </div>
  )
}