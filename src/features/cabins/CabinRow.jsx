import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin } from "../../services/apiCapbins";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const [isDeleteCabin, setDeleteCabin] = useDeleteCabin();
  const [isCreatingCabin, setCreateNewCabin,] = useCreateCabin();

  const { id: cabinId, name, maxCapacity, discount, image, regularPrice, description } = cabin;

  function handleDuplicateCabin() {
    console.log('Duplicating Cabin');
    setCreateNewCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      discount,
      image,
      regularPrice,
      description
    })
  }

  return (
    <>
      <section
        role="row"
        className=" grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr_1fr] grid-flow-row gap-x-5 items-center p-3 border-b capitalize border-stone-300 space-y-3  max-md:w-auto bg-stone-100 max-md:text-lg max-sm:text-xs"
      >
        <div className="mx-auto my-0">
          <img
          className="px-2 w-20  aspect-3/2 object-cover  object-center  scale-150 -translate-x-1 font-bold"
          src={image}
          alt={name}
        />
        </div>
        <div
          className=" text-3xl max-md:text-lg max-sm:text-xs text-stone-500"
        >
          {name}
        </div>
        <div className=" text-3xl max-md:text-lg max-sm:text-xs text-stone-500">
          {description}
        </div>
         <div
          className=" text-3xl max-md:text-lg max-sm:text-xs text-stone-500"
        >
         Fits Upto {maxCapacity} guests
        </div>
        <div
          className="font-semibold text-3xl max-md:text-lg max-sm:text-xs"
        >
          {formatCurrency(regularPrice)}
        </div>
        {
          discount ? (
          <div
            className="text-3xl max-md:text-lg max-sm:text-xs font-semibold text-green-600"
          >
          {formatCurrency(discount)}
        </div>
          ) : (
              <div>--</div>
          )
        }
        
        <div className="flex justify-around items-center ">
          <Button category='primary' styles='w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1' onClick={() => setShowForm(show => !show)}  > <HiPencil /> </Button>
          <Button category='primary' styles="w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1" onClick={ handleDuplicateCabin} disabled={isCreatingCabin}> <HiSquare2Stack/> </Button>
          <Button category='secondary' styles='w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1' onClick={() => setDeleteCabin(cabinId)} disabled={isDeleteCabin} > <HiTrash/> </Button >
        </div>
      </section>
      {
        showForm && <CreateCabinForm cabinToEdit={cabin} />
      }
      
    </>
    
  )
}