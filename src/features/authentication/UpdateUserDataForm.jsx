import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import useUser from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

export default function UpdateuserDataForm() {
  const { user: { email, user_metadata: { fullName: currentUserFullName }, }, } = useUser();
  const [fullName, setFullName] = useState(currentUserFullName);
  const [avatar, setAvatar] = useState(null);
  const { updateUser,isUpdatingUser } =useUpdateUser();
  
  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName ) return;

    updateUser({ fullName, avatar }, {
      onSettled: () => {
        setAvatar(null);
      }
    })
  }

  function handleCancel() {
    setFullName(currentUserFullName);
    setAvatar(null);
  }

  return (
    <Form category='internal' onSubmit={handleSubmit} >
      <FormRow category='horizental' >
        <FormLabel htmlFor='email' >Email address</FormLabel>
        <input
          className="input bg-blue-100 "
          id='email'
          value={email}
          disabled
        />
      </FormRow>
      <FormRow category='horizental' >
        <FormLabel htmlFor='fullName'>Full Name</FormLabel>
        <input
          className="input"
          type='text'
          id='fullName'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          disabled={isUpdatingUser}
        />
      </FormRow>
      <FormRow category='horizental' >
        <FormLabel htmlFor='avatar'>Avatar Image</FormLabel>
        <input
          className="input  file:bg-blue-600 file:text-blue-50 file:py-4 file:px-3 file:rounded-lg "
          type="file"
          id='avatar'
          onChange={e => setAvatar(e.target.files[0])}
          disabled={isUpdatingUser}
        />
      </FormRow>
      <div className="text-right ">
        <Button category='secondary' type='reset' onClick={handleCancel} >Cancel</Button>
        <Button category='primary' onClick={handleSubmit} >Update account</Button>
      </div>
    </Form>
  )
}