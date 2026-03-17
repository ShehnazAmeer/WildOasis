import { HiXMark } from "react-icons/hi2";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Createbooking from "./CreateBooking";

export default function AddBooking() {
    return (
        <Modal>
            <Modal.Open opens='createBooking'>
                <Button category='primary' >Create New Booking</Button>
            </Modal.Open>
            <Modal.Window name='createBooking'>
                <Createbooking />
                <Button category='close' styles="absolute right-9 top-0">
                    <HiXMark/>
                </Button>
            </Modal.Window>
        </Modal>
        
    )
}