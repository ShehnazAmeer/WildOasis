import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";

export default function CreateGuestForm() {
    return (
        <Form>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='fullName'>FullName</FormLabel>
                <input
                    className="input"
                    id='fullName'
                    type="text"
                    placeholder="FullName"
                />
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <input
                    className="input"
                    id='email'
                    type="email"
                    placeholder="Email"
                />
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='nationalID'>National ID</FormLabel>
                <input
                    className="input"
                    id='nationalID'
                    type='number'
                    placeholder="National ID"
                />
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='nationality'>Nationality</FormLabel>
                <input
                    className="input"
                    id='nationality'
                    type='text'
                    placeholder="Nationality"
                />
            </FormRow>
            <div className="text-right">
                <Button category='secondary' >Cancel</Button>
                <Button category='primary' >Create New Guest</Button>
            </div>
        </Form>
    )
}