import DatePicker from "react-datepicker";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useCabin from "../cabins/useCabin";
import useGuests from "../guests/useGuests";
import { useForm } from "react-hook-form";

export default function Createbooking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [breakfastPaid, setBreakfastPaid] = useState(false);
    const [cabinId, setCabinId] = useState(null);
    const[guestId,setGuestId] =useState(null);
    const { cabins } = useCabin();
    const { guests } = useGuests();
    const {register,formState,handleSubmit,reset} =useForm();
    const cabinIds = cabins?.map(cabin => cabin.id);
    const guestIds =guests?.map(guest => guest.id); 

    return (
        <Form>
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
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='numGuests'>Number of Guests</FormLabel>
                <input
                    className="input"
                    id='numGuests'
                    type='number'
                    placeholder="Number of Guests"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='cabinId' >Cabin Id </FormLabel>
                <select
                    className="input"
                    id='cabinId'
                    value={cabinId}
                    onChange={e=>setCabinId(e.target.value)}
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
                <input
                    type='text'
                    className="input"
                    placeholder="Enter Cabin Id"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='guestId' >Guest Id</FormLabel>
                <select
                    className="input"
                    id='guestId'
                    value={guestId}
                    onChange={e=>setGuestId(e.target.value)}
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
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='status'>Guest Status</FormLabel>
                <select
                    className="input"
                    id='status'
                    value={breakfastPaid}
                    onChange={(e)=>setBreakfastPaid(e.target.value)}
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
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='hasBreakfast' >Breakfast Included?</FormLabel>
                <select
                    className="input"
                    id='hasBreakfast'
                    value={isBreakfast}
                    onChange={(e)=>setIsBreakfast(e.target.value)}
                    
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={true}>Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={false}>No</option>
                </select>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='isPaid' >Breakfast Paid?</FormLabel>
                <select
                    className="input"
                    id='isPaid'
                    value={breakfastPaid}
                    onChange={(e)=>setBreakfastPaid(e.target.value)}
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={true} >Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={false} >No</option>
                </select>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel htmlFor='observations' >Observation</FormLabel>
                <textarea
                    className="input"
                    id='observations'
                    placeholder="Enter Observations"
                />
            </FormRow>
        </Form>
    )
}