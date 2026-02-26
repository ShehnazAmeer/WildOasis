import { HiEllipsisVertical, HiPencil, HiSquare2Stack, HiTrash, HiXMark } from "react-icons/hi2";
import { useState } from "react";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Button from "../../ui/Button";

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
        <div className=" text-xl max-md:text-lg max-sm:text-sm text-stone-500">
          {description}
        </div>
         <div
          className=" text-3xl max-md:text-lg max-sm:text-xs text-stone-500"
        >
          <span className="block">Fits Upto</span>
          <span className="font-bold block "> {maxCapacity} guests </span>
        
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
          <Modal>
            <Menus.Menu>
                <Menus.Toggle id={cabinId}>
                  <HiEllipsisVertical/>
                </Menus.Toggle>

              <Menus.List id={cabinId}>
                <Menus.MenuButton onClick={handleDuplicateCabin} >
                  <HiSquare2Stack />
                  <span>Duplicate</span>
                </Menus.MenuButton>
              
                <Modal.Open opens='edit'>
                  <Menus.MenuButton >
                    <HiPencil />
                    <span>Edit</span>
                  </Menus.MenuButton>
                </Modal.Open>

                <Modal.Open opens='delete'>
                   <Menus.MenuButton >
                      <HiTrash/>
                      <span>Delete</span>
                    </Menus.MenuButton>
                </Modal.Open>
              </Menus.List>

                <Modal.Window name='edit' >
                  <CreateCabinForm cabinToEdit={cabin}/>
                </Modal.Window>


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

            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
      {
        showForm && <CreateCabinForm cabinToEdit={cabin} />
      }
      
    </>
    
  )
}