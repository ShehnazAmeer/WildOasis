import DatePicker from "react-datepicker";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useCabin from "../cabins/useCabin";
import useGuests from "../guests/useGuests";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormError from "../../ui/FormError";
import { useCreateBooking } from "./useCreateBooking";

export default function Createbooking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { cabins } = useCabin();
    const { guests } = useGuests();
    const { register, formState, handleSubmit, reset } = useForm();
    const {createBooking,isSendingBooking} =useCreateBooking();
    const cabinIds = cabins?.map(cabin => cabin.id);
    const guestIds = guests?.map(guest => guest.id); 
    const {errors} =formState;
    
    function onSubmit(data) {
        if (!data) return;
        createBooking({ ...data, startDate: startDate, endDate: endDate }, {
            onSuccess: () => {
                reset()
            }
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} >
            <FormRow style='mb-1'>
                <FormLabel htmlFor='startDate'>Start Date</FormLabel>
                <div className="dark:bg-gray-800 dark:text-gray-200 input">
                    <DatePicker id="startDate" placeholderText="Select Date" className="focus:outline-none focus:ring-2 focus:ring-blue-500" selected={startDate} onChange={date => setStartDate(date)} />
                </div>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='endDate'>End Date</FormLabel>
                <div className="dark:bg-gray-800 dark:text-gray-200 input">
                    <DatePicker id='endDate' placeholderText="Select Date" className="focus:outline-none focus:ring-2 focus:ring-blue-500" selected={endDate} onChange={date => setEndDate(date)} />
                </div>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='numNights'>Number of Nights</FormLabel>
                <input
                    type="number"
                    id='numNights'
                    className="input"
                    placeholder="Number of Nights"
                    {...register('numNights',{required:'This field is required'})}
                />
                {
                    errors?.numNights?.message && <FormError> {errors.numNights.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='numGuests'>Number of Guests</FormLabel>
                <input
                    className="input"
                    id='numGuests'
                    type='number'
                    placeholder="Number of Guests"
                    {
                    ...register('numGuests',{required:'This field is required'})
                    }
                />
                {
                    errors?.numGuests?.message && <FormError> {errors.numGuests.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='cabinId' >Cabin Id </FormLabel>
                <select
                    className="input"
                    id='cabinId'
                    {...register('cabinId',{required:'This field is required'})}
                >
                    { cabinIds?.map(id=>(
                        <option
                            key={id}
                            value={id}
                            className="dark:bg-gray-800 dark:text-gray-200"
                        >
                            {id}
                        </option>) 
                    )}
                </select>
                {
                    errors?.cabinId?.message && <FormError> {errors.cabinId.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='guestId' >Guest Id</FormLabel>
                <select
                    className="input"
                    id='guestId'
                    {...register('guestId',{required:'This field is required'})}
                >
                    { guestIds?.map(id=>(
                        <option
                            key={id}
                            value={id}
                            className="dark:bg-gray-800 dark:text-gray-200"
                        >
                            {id}
                        </option>) 
                    )}
                </select>
                {
                    errors?.guestId?.message && <FormError> {errors.guestId.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='status'>Guest Status</FormLabel>
                <select
                    className="input"
                    id='status'
                    {...register('status',{required:'This field is required'})}
                >
                    <option
                        className="dark:bg-gray-800 dark:text-gray-200"
                        value='unconfirmed'
                    >
                        unconfirmed
                    </option>
                    <option
                        className="dark:bg-gray-800 dark:text-gray-200"
                        value='checked-in'
                        
                    >
                        checked in
                    </option>
                    <option
                        className="dark:bg-gray-800 dark:text-gray-200"
                        value='checked-out'
                    >
                        checked out
                    </option>
                </select>
                {
                    errors?.status?.message && <FormError> {errors.status.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='hasBreakfast' >Breakfast Included?</FormLabel>
                <select
                    className="input"
                    id='hasBreakfast'
                    {...register('hasBreakfast',{required:'This field is required'})} 
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={true}>Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={false}>No</option>
                </select>
                {
                    errors?.hasBreakfast?.message && <FormError> {errors.hasBreakfast.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='isPaid' >Breakfast Paid?</FormLabel>
                <select
                    className="input"
                    id='isPaid'
                    {...register('isPaid',{required:'This field is required'})}
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={true} >Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={false} >No</option>
                </select>
                {
                    errors?.isPaid?.message && <FormError> {errors.isPaid.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='observations' >Observation</FormLabel>
                <textarea
                    className="input"
                    id='observations'
                    placeholder="Enter Observations"
                    {...register('observations',{required:'This field is required'})}
                />
                {
                    errors?.observations?.message && <FormError> {errors.observations.message} </FormError>
                }
            </FormRow>
            <div className="text-center">
                <Button onClick={handleSubmit(onSubmit)} category='primary'>Create New Booking</Button>
            </div>
        </Form>
    )
}