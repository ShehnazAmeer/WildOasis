import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import SortBy from "../../ui/SortBy";
import CreateGuestForm from "./CreateGuestForm";

export default function GuestOperations() {
    return (
        <div
            className="flex itemp-center gap-2 dark:bg-grey-800 dark:text-gray-200"
        >
            <Modal>
                <Modal.Open opens='guestForm' >
                    <Button category='primary' >Create New User</Button>
                </Modal.Open>
                <Modal.Window name='guestForm'>
                    <CreateGuestForm/>
                </Modal.Window>
            </Modal>
            <SortBy
                options={[
                    { value: 'fullName-asc', label: 'Sort by Name (A-Z)' },
                    { value: 'fullName-dsc', label: 'Sort by Name (Z-A) ' },
                    { value: 'nationality-asc', label: 'Sort by Nationaliy (A-Z)' },
                    {value:'nationality-dsc',label:'Sort by Nationality (Z-A)'}
                ]}
                styles='bg-stone-100 text-stone-800'
            />
            
        </div>
    )
}