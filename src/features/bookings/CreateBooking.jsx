import DatePicker from "react-datepicker";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function Createbooking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isBreakfast, setIsBreakfast] = useState(false);
    const [breakfastPaid, setBreakfastPaid] = useState(false);

    return (
        <Form>
            <FormRow style='mb-1'>
                <FormLabel>Start Date</FormLabel>
                <div className="dark:bg-gray-800 dark:text-gray-200 input">
                    <DatePicker placeholderText="Select Date" className="focus:outline-none focus:ring-2 focus:ring-blue-500" selected={startDate} onChange={date => setStartDate(date)} />
                </div>
                
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>End Date</FormLabel>
                <div className="dark:bg-gray-800 dark:text-gray-200 input">
                    <DatePicker placeholderText="Select Date" className="focus:outline-none focus:ring-2 focus:ring-blue-500" selected={endDate} onChange={date => setEndDate(date)} />
                </div>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Number of Nights</FormLabel>
                <input
                    type="number"
                    className="input"
                    placeholder="Number of Nights"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Number of Guests</FormLabel>
                <input
                    className="input"
                    type='number'
                    placeholder="Number of Guests"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Cabin Id </FormLabel>
                <input
                    type='text'
                    className="input"
                    placeholder="Enter Cabin Id"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Guest Id</FormLabel>
                <input
                    type='text'
                    className="input"
                    placeholder="Enter Guest Id"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Guest Status</FormLabel>
                <input
                    type='text'
                    className="input"
                    placeholder="Guest Status"
                />
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Breakfast Included?</FormLabel>
                <select
                    className="input"
                    value={isBreakfast}
                    onChange={(e)=>setIsBreakfast(e.target.value)}
                    
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={true}>Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200" value={false}>No</option>
                </select>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Breakfast Paid?</FormLabel>
                <select
                    className="input"
                    value={breakfastPaid}
                    onChange={(e)=>setBreakfastPaid(e.target.value)}
                >
                    <option className="dark:bg-gray-800 dark:text-gray-200" >Yes</option>
                    <option className="dark:bg-gray-800 dark:text-gray-200">No</option>
                </select>
            </FormRow>
            <FormRow style='mb-1'>
                <FormLabel>Observation</FormLabel>
                <textarea
                    className="input"
                    placeholder="Enter Observations"
                />
            </FormRow>
        </Form>
    )
}