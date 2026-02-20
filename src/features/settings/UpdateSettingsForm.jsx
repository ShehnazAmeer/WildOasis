import FormLabel from '../../ui/FormLabel';
import FormRow from '../../ui/FormRow';
import useSettings from './useSettings';
import Spinner from '../../ui/Spinner';
import useUpdateSetting from './useUpdateSetting';
import Button from '../../ui/Button';
import { useForm } from 'react-hook-form';

function UpdateSettingsForm() {
  const { settings = {}, isLoadingSettings, settingsError } = useSettings();
  const [isPendingSetting,setSetting] = useUpdateSetting();
  const { minBookingLength, maxBookings, maxGuestPerBooking, breakfastPrice } = settings;
  const { register, handleSubmit, formState } = useForm();
  const { error } = formState;

  function onSubmit(data) {
    console.log('Settings Updating');
    setSetting({...data})
  }
  function onError(error) {
    console.log(error)
  }

  if(isLoadingSettings) return <Spinner/>

  return (
    <form>
      <FormRow>
        <FormLabel>Minimum Nights</FormLabel>
        <input
          placeholder='Minimum Nights'
          type='number'
          id='minBookingLength'
          className='input'
          defaultValue={minBookingLength}
          disabled={isPendingSetting}
          {...register('minBookingLength')}
        />
      </FormRow>
      <FormRow>
        <FormLabel>Maximum Nights</FormLabel>
        <input 
          placeholder='Maximum nights'
          type='number'
          id='maxBookings'
          className='input'
          defaultValue={maxBookings}
          disabled={isPendingSetting}
          {...register('maxBookings')}

        />
      </FormRow>
      <FormRow>
        <FormLabel>Maximum Guests</FormLabel>
        <input
          placeholder='Maximum guests'
          type='number'
          id='maxGuestPerBooking'
          className='input'
          defaultValue={maxGuestPerBooking}
          disabled={isPendingSetting}
          {...register('maxGuestPerBooking')}
        />
      </FormRow>
      <FormRow>
        <FormLabel>Breakfast Price</FormLabel>
        <input
          placeholder='Breakfast Price'
          type='number'
          id='breakfastPrice'
          className='input'
          defaultValue={breakfastPrice}
          disabled={isPendingSetting}
          {...register('breakfastPrice')}
        />
      </FormRow>
        <div className=' bg-stone-100 text-center pb-9'>
        <Button
          category='primary'
          styles="max-md:text-lg max-md:p-2 "
          onClick={handleSubmit(onSubmit,onError)}
        >
          Apply Settings
        </Button>
        </div>
    </form>
  );
}

export default UpdateSettingsForm;
