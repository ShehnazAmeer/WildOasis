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
      <section className=" flex flex-col justify-between ">
        <Button category='primary' styles="max-md:text-lg max-md:p-2 " onClick={()=> setShowForm(show => !show)  }>Add New Cabin</Button>
      
        {
          showForm && <CreateCabinForm/>
        }
      </section>
    </>

      
  );
}

export default Cabins;
