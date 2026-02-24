import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin } from "../../services/apiCapbins";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";

import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import useDeleteCabin from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash, HiXMark } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

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
      <Table.Row>
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
          <Button category='primary' styles="w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1" onClick={handleDuplicateCabin} disabled={isCreatingCabin}> <HiSquare2Stack /> </Button>
          <Modal>
            <Modal.Open opens='edit'>
              <Button category='primary' styles='w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1' >
                <HiPencil />
              </Button>
            </Modal.Open>

            <Modal.Window name='edit' >
              <CreateCabinForm cabinToEdit={cabin}/>
            </Modal.Window>

            <Modal.Open opens='delete'>
              <Button category='secondary' styles='w-20 max-md:text-lg max-md:p-3 max-md:w-10 max-sm:w-5 max-sm:text-xs max-sm:p-1' >
                <HiTrash />
              </Button >
            </Modal.Open>
            <Modal.Window name='delete' >
              <ConfirmDelete
                resourceName='Cabins'
                disabled={isDeleteCabin}
                onConfirm={()=>setDeleteCabin(cabinId)}
              />
              <Button category="close" styles="absolute right-9 top-0" >
                <HiXMark/>
              </Button>
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
      {
        showForm && <CreateCabinForm cabinToEdit={cabin} />
      }
      
    </>
    
  )
}