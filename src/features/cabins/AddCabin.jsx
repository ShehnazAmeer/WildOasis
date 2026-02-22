import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import { HiXMark } from "react-icons/hi2";


export default function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button category='primary' styles="max-md:text-lg max-md:p-2 ">Add New Cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm /> 
         <Button category="close" styles="absolute right-9 top-0" >
            <HiXMark/>
         </Button>
      </Modal.Window>
    </Modal>
  )
}
