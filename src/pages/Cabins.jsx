import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {

  return (
    <>
      <section className="flex justify-between py-9 ">
        <h1 className="font-extrabold text-4xl max-md:text-xl">
          All cabins
        </h1>
        <CabinTableOperations/> 
      </section>
      
      <section  >
        <CabinTable />
        <AddCabin/>
      </section>
    </>

      
  );
}

export default Cabins;
