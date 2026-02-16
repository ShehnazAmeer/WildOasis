import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin } from "../../services/apiCapbins";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const queryClient = useQueryClient();

  const { id: cabinId, name, maxCapacity, discount, image, regularPrice } = cabin;

const {isPending:isLoadingCabins,mutate} = useMutation({
  mutationFn: id => deleteCabin(id),
  onSuccess: () => {
    toast.success('Cabin Successfully Deleted');

    queryClient.invalidateQueries({
      queryKey:["cabins"]
    })
  },
  onError: (error) => {
    toast.error(error.message)
  }
})

  return (
    <>
      <section
        role="row"
        className=" grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] grid-flow-row gap-x-5 items-center p-3 border-b border-stone-300 space-y-3  max-md:w-auto bg-stone-100"
      >
        <div className="mx-auto my-0">
          <img
          className="px-2 w-20  aspect-3/2 object-cover  object-center  scale-150 -translate-x-1 font-bold"
          src={image}
          alt={name}
        />
        </div>
        <div
          className=" text-3xl max-md:text-[1.1rem] text-stone-500"
        >
          {name}
        </div>
         <div
          className=" text-3xl max-md:text-[1.1rem] text-stone-500"
        >
         Fits Upto {maxCapacity} guests
        </div>
        <div
          className="font-semibold text-3xl max-md:text-[1.1rem]"
        >
          {formatCurrency(regularPrice)}
        </div>
        <div
          className="text-3xl max-md:text-[1.1rem] font-semibold text-green-600"
        >
        
          {formatCurrency(discount)}
        </div>
        <div>
          <Button category='primary' styles='w-35 max-md:text-lg max-md:p-3 max-md:w-20' onClick={()=>setShowForm(show=>!show)}  >Edit</Button>

          <Button category='secondary' styles='w-35 max-md:text-lg max-md:p-3 max-md:w-20' onClick={() => mutate(cabinId)} disabled={isLoadingCabins} >Delete</Button>
        </div>
      </section>
      {
        showForm && <CreateCabinForm cabinToEdit={cabin} />
      }
      
    </>
    
  )
}