import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="flex justify-between p-9">
        <h1 className="font-extrabold text-4xl max-md:text-xl">
          All cabins
        </h1>
        <p>filter/sort</p>
      </section>
      
      <section  >
         <CabinTable/>
      </section>
      <section className=" flex flex-col justify-between">
        <Button category='primary' onClick={() => setShowForm(show => !show)} >Add New Cabin</Button>
        {/* <button
          className="bg-blue-600 py-4 text-stone-100 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-blue-600 hover:bg-blue-400"
          onClick={}
        >
          Add new Cabins
        </button> */}
        {
          showForm && <CreateCabinForm/>
        }
      </section>
    </>

      
  );
}

export default Cabins;
