import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCapbins";
import toast from "react-hot-toast";
import FormError from "../../ui/FormError";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit}) {
  console.log(cabinToEdit)
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const {isPending:isPendingCreatingCabins,mutate} = useMutation({
    mutationFn: newCabin => createCabin(newCabin),
    onSuccess: () => {
      toast.success('New Cabin is successfully Created');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset()
    },
    onError: (err) => {
      toast.error(err.message)
    }
  });
  
  function onSubmit(data) {
    console.log('form Submitting')
    mutate({...data,image:data.image[0]});
  }
  function onError(errors) {
    console.log(errors)
  }
  return (
    <form className="mx-8 py-8" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <FormLabel htmlFor='name'>Cabin Name</FormLabel>
         <input
          className="input"
          id='name'
          type='text'
          disabled={isPendingCreatingCabins}
          placeholder="FullName"
          {...register('name', {
            required: 'This Field is Required',
          })}
        />
        {
          errors?.name?.message && <FormError> {errors.name.message} </FormError>
        }
      </FormRow>
      <FormRow>
        <FormLabel htmlFor='maxCapacity' > Maximum Capacity </FormLabel>
        <input
          className="input"
          placeholder="Maximum Capacity"
          id='maxCapacity'
          type="number"
          disabled={isPendingCreatingCabins}
          {...register('maxCapacity', {
            required: 'This Field is Required',
            min: {
              value: 1,
              message:'Max Capacity atleast 1'
            }
          })}
        />
        {
          errors?.maxCapacity?.message && <FormError> {errors.maxCapacity.message} </FormError>
        }
      </FormRow>
      <FormRow>
        <FormLabel htmlFor='regularPrice'>Regular Price</FormLabel>
        <input
          className="input"
          id='regularPrice'
          placeholder="Regular Price"
          type="number"
          disabled={isPendingCreatingCabins}
          {...register('regularPrice', {
            required: 'This Field is Required',
            min: {
              value: 20,
              message:'Regualr Price should be atleast 20'
            }
          })}
        />
        {
          errors?.regularPrice?.message && <FormError> {errors.regularPrice.message} </FormError>
        }
      </FormRow>
      <FormRow>
        <FormLabel htmlFor='discount'>Discount</FormLabel>
        <input
          className="input"
          id='discount'
          placeholder="Discount"
          type="number"
          defaultValue={0}
          disabled={isPendingCreatingCabins}
        
          {...register('discount', {
            required: 'This Field is Required',
            validate:(value)=>value<=getValues()?.regularPrice||' Discount Should be less than regular price'
          })}
        />
        {
          errors?.discount?.message && <FormError> {errors?.discount?.message} </FormError>
        }
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="description">Cabin Description</FormLabel>
        <textarea
          className="textarea"
          placeholder="Descripiton"
          id='description'
          disabled={isPendingCreatingCabins}
          {...register('description', {
            required:'This Field is Required'
          })}
        />
        {
          errors?.description?.message && <FormError> {errors?.description?.message} </FormError>
        }
      </FormRow>
      <FormRow>
        <FormLabel htmlFor="image">Cabin Photo</FormLabel>
        <input
          id='image'
          type="file"
          className="input file:bg-blue-600 file:text-blue-50 file:py-4 file:px-3 file:rounded-lg "
          disabled={isPendingCreatingCabins}
          {...register('image', {
            required:'This Field is Required'
          })}
        />
        {
          errors?.image?.message && <FormError> {errors?.image?.message} </FormError>
        }
      </FormRow>

      <div className="text-right " >
        <Button type="reset" category='secondary' >Cancel</Button>
        <Button
          type='submit'
          category='primary'
          onClick={handleSubmit(onSubmit,onError)}
          disabled={isPendingCreatingCabins}
        >
          Add Cabin
        </Button>
      </div>
    </form>
  )
}

export default CreateCabinForm;
