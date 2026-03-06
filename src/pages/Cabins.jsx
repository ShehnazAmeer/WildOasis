import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import MainSection from "../ui/MainSection";

function Cabins() {

  return (
    <div
      className="max-w-480 mx-auto my-auto px-12 flex flex-col gap-10 "  
    >
      <MainSection heading='All cabins '>
        <CabinTableOperations/> 
      </MainSection>
      
      <section >
        <CabinTable />
        <AddCabin/>
      </section>
    </div> 
  );
}

export default Cabins;
