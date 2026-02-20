import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
    function handleCloseModal() {
        setIsOpenModal(false);
  }
    return (
        <section className=" flex flex-col justify-between ">
            <Button category='primary' styles="max-md:text-lg max-md:p-2 " onClick={()=>setIsOpenModal(show=>!show)}>Add New Cabin</Button>
          
            {
              isOpenModal && <Modal onCloseModal={handleCloseModal} > <CreateCabinForm onCloseModal={handleCloseModal} /> </Modal>
            }
      </section>
    )
}