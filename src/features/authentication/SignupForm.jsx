import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const { register, formState, getValues, handleSubmit,reset } = useForm();
 const { signUp,isSignUp }= useSignup();
  const { errors } = formState;
  function onSubmit({ email, fullName, password }) {
    signUp(
      { email, password, fullName }, {
      onSettled: ()=> reset(),
    })
  }
  return (
    <Form category='internal' onSubmit={handleSubmit(onSubmit)} >
      <FormRow category='horizental' style='pb-8 '>
        <FormLabel htmlFor='fullName' >FullName</FormLabel>
        <input
          id='fullName'
          className="input  "
          type='text'
          {...register('fullName',{required:'This field is required!'})}
        />
        {
          errors?.fullName?.message && <FormError> {errors.fullName.message} </FormError>
        }
      </FormRow>
      <FormRow category='horizental' style='pb-8'>
        <FormLabel htmlFor='email' >Email address</FormLabel>
        <input
          id='email'
          className="input"
          type='email'
          {...register('email',{required:'This field is required',pattern:{value:/\S+@\S+\.\S+/, message:'Please enter valid email'}})}
        />
        {
          errors?.email?.message && <FormError> {errors.email.message} </FormError>
        }
      </FormRow>
      <FormRow category='horizental' style='pb-8'>
        <FormLabel htmlFor='password' >Password</FormLabel>
        <input
          id='password'
          className="input"
          type='password'
          {...register('password',{maxLength:{value:8,message:'Password must be minimum 8 character longs'}, required:'This field is required'})}
        />
        {
          errors?.password?.message && <FormError> {errors.password.message} </FormError>
        }
      </FormRow>
      <FormRow category='horizental' style='pb-8' >
        <FormLabel htmlForm='passwordConfirm'>Retype Password</FormLabel>
        <input
          id='passwordConfirm'
          className="input"
          type="password"
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value)=>value===getValues().password ||'Password needs to match'
          })}
        />
        {
          errors?.passwordConfirm?.message && <FormError> {errors.passwordConfirm.message} </FormError>
        }
      </FormRow>
      <div className="text-right space-x-10">
        <Button
          category='secondary'
        >
          Cancel
        </Button>
        <Button
          category='primary'
          onClick={handleSubmit(onSubmit)}
          disabled={isSignUp}
        >
          Create Nww User
        </Button>
      </div>
    </Form>
  )
}