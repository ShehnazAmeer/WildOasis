import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import { useUpdateUser } from "./useUpdateUser";
import FormError from "../../ui/FormError";

export default function UpdatePasswordForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;

  const {updateUser,isUpdatingUser} =useUpdateUser();

  function onSubmit(data) {
    console.log(data)
    const { password } = data;
    updateUser({password}, {
      onSettled:()=>reset()
    })
  }
  
  return (
    <Form category='internal'onSubmit={handleSubmit(onSubmit)} >
      <FormRow category='horizental' >
        <FormLabel htmlFor='password' >Password <br/> (min 8 characters) </FormLabel>
        <input
          className="input"
          type='password'
          id='password'
        disabled={isUpdatingUser}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message:'Password must be minimum 6 characters long'
            }
          })}
        />
        {
          errors?.password && <FormError> {errors?.password?.message} </FormError>
       }
      </FormRow>
      <FormRow category='horizental' >
        <FormLabel htmlForm='confirmPassword'>Confim Password</FormLabel>
        <input
          className="input"
          type='password'
          id='confirmPassword'
        disabled={isUpdatingUser}
          {...register('confirmPassword', {
            required: 'This field is required',
            validate:(value)=>getValues().password===value ||'Passwords need to be match'
          })}
        />
        {
          errors?.confirmPassword && <FormError> {errors?.confirmPassword?.message} </FormError>
        }
      </FormRow>
      <FormRow>
        
      </FormRow>
      <div className="text-right">
        <Button category='secondary' onClick={()=> reset()}  >Cancel</Button>
        <Button category='primary' onClick={handleSubmit(onSubmit)} >Update password </Button>
      </div>
    </Form>
  )
}