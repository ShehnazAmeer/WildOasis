import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCapbins";
import toast from "react-hot-toast";

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit,reset } = useForm();
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
    mutate(data);
    console.log(data)
  }
  return (
    <form className="mx-8 py-8 bg-stone-50" onSubmit={handleSubmit(onSubmit)}>
      <div className=" grid items-center grid-cols-[20rem_2fr_1.2fr] gap-10 mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2 ">
        <label className="label " htmlFor="name">Cabin Name</label>
        <input
          className="input"
          id='name'
          type='text'
          placeholder="FullName"
          {...register('name')}
        />
      </div>
      <div className="grid items-center  grid-cols-[20rem_2fr_1.2fr] gap-10  mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2">
        <label htmlFor='maxCapacity' className="label">Maximum Capacity</label>
        <input
          className="input"
          placeholder="Maximum Capacity"
          id='maxCapacity'
          type="number"
          {...register('maxCapacity')}
        />
      </div>
      <div className="grid items-center grid-cols-[20rem_2fr_1.2fr] gap-10 mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2">
        <label htmlFor="regularPrice" className="label">Regular Price</label>
        <input
          className="input"
          id='regularPrice'
          placeholder="Regular Price"
          type="number"
          {...register('regularPrice')}
        />
      </div>
      <div className="grid items-center grid-cols-[20rem_2fr_1.2fr] gap-10 mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2">
        <label htmlFor="discount" className="label">Discount</label>
        <input
          className="input"
          id='discount'
          placeholder="Discount"
          type="number"
          defaultValue={0}
        
          {...register('discount')}
        />
      </div>
      <div className="grid items-center grid-cols-[20rem_2fr_1.2fr] gap-10 mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2 ">
        <label htmlFor="description" className="label">Cabin Description</label>
        <textarea
          className="textarea"
          placeholder="Descripiton"
          id='description'
          {...register('description')}
        />
      </div>
      <div className="grid items-center grid-cols-[20rem_2fr_1.2fr] gap-10 mb-5 max-md:flex max-md:flex-col max-md:items-baseline max-md:text-sm max-md:gap-2">
        <label htmlFor="image" className="label">Cabin Photo</label>
        <input
          id='image'
          type="file"
          className="input "
          {...register('image')}
        />
      </div>
      <div className="text-right space-x-8" >
        <Button type="reset" category='secondary' >Cancel</Button>
        <Button
          type='submit'
          category='primary'
          onClick={handleSubmit(onSubmit)}
          disabled={isPendingCreatingCabins}
        >
          Add Cabin
        </Button>
      </div>
    </form>
  )
}

export default CreateCabinForm;
