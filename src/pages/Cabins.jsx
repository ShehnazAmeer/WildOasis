import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import MainSection from "../ui/MainSection";

function Cabins() {

  return (
    <>
      <MainSection heading='All cabins'>
        <CabinTableOperations/> 
      </MainSection>
      
      <section  >
        <CabinTable />
        <AddCabin/>
      </section>
    </>

      
  );
}

export default Cabins;
