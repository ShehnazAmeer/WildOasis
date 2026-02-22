import { useForm } from "react-hook-form";
import useCreateCabin from "./useCreateCabin";
import useUpdateCabin from "./useUpdateCabin";

import Button from "../../ui/Button";
import FormError from "../../ui/FormError";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";

function CreateCabinForm({ cabinToEdit={},onClick}) {
  const [isCreatingCabin, setCreateCabin] = useCreateCabin();
  const [isUpdateCabin, setUpdateCabin] = useUpdateCabin();
  const isWorking = isCreatingCabin || isUpdateCabin;

  const { id: editCabinId, ...editCabinValues } = cabinToEdit;
  const isEditCabinSession = Boolean(editCabinId);

  const { register, handleSubmit,getValues, formState,reset } = useForm({
    defaultValues: isEditCabinSession? editCabinValues:{},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditCabinSession) {
        setUpdateCabin(
          { newCabinData: { ...data, image }, id: editCabinId },
          {
          onSuccess: (data) => {
              reset();
              onClick?.();
          },
        }
      )
    }
    else
      setCreateCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onClick?.();
          },
        }
      );
  }
  
  function onError(errors) {
    console.log(errors)
  }
  // function onUpdate(data) {
  //   const image = typeof data.image === 'string' ? data.image : data.image[0];

  //   console.log('updating');
  //   UpdatingCabin({newCabinData:{...data,image},id:editCabinId})
  // }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)} categoary={onClick?'modal':'regular'}>
      <FormRow>
        <FormLabel htmlFor='name'>Cabin Name</FormLabel>
         <input
          className="input"
          id='name'
          type='text'
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
        
          {...register('discount', {
            required: 'This Field is Required',
            validate: (value) =>
              value <= getValues().regularPrice || ' Discount Should be less than regular price'
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
          disabled={isWorking}
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
          disabled={isWorking}
          {...register('image', {
            required: isEditCabinSession? false: 'This Field is Required'
          })}
        />
        {
          errors?.image?.message && <FormError> {errors?.image?.message} </FormError>
        }
      </FormRow>
      <div className="text-right " >
        <Button type="reset" category='secondary' onClick={()=>onClick?.()} >Cancel</Button>
        <Button
          type='submit'
          category='primary'
          onClick={handleSubmit(onSubmit,onError)}
          disabled={isWorking}
        >
          {
            isEditCabinSession? "Edit Cabin":" Create New Cabin"
          }
          
        </Button>
      </div>
    </Form>
  )
}


export default CreateCabinForm;
