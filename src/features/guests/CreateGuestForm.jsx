import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormLabel from "../../ui/FormLabel";
import FormRow from "../../ui/FormRow";
import FormError from "../../ui/FormError";
import { useCreateGuest } from "./useCreateGuest";
import { CountrySelect } from "react-country-state-city";
import { useState } from "react";

export default function CreateGuestForm() {
    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;
    const [country, setCountry] = useState(null);
    const [countryFlag,setCountryFlag] =useState(null);
    const { createGuest, isCreatingGuest } = useCreateGuest();

    function handleCountry(country) {
        setCountry(country.name);
        setCountryFlag(country.iso2.toLowerCase())
    }
    
    function onSumbit(data) {
        console.log('guest submit clicked');
        if (!data) return;
        createGuest( {...data, nationality:country,countryFlag:`https://flagcdn.com/${countryFlag}.svg` }, {
            onSuccess: () => {
                reset();
            }
        })
    }
    return (
        <Form onSubmit={handleSubmit(onSumbit)}>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='fullName'>FullName</FormLabel>
                <input
                    className="input"
                    id='fullName'
                    type="text"
                    placeholder="FullName"
                    disabled={isCreatingGuest}
                    {...register('fullName', {
                        required:'This Field is Required'
                    })}
                />
                {
                    errors?.fullName?.message && <FormError> {errors.fullName.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <input
                    className="input"
                    id='email'
                    type="email"
                    placeholder="Email"
                    disabled={isCreatingGuest}
                    {...register('email', {
                        required:'This Field is Required'
                    })}
                />
                {
                    errors?.email?.message && <FormError> {errors.email.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='nationalID'>National ID</FormLabel>
                <input
                    className="input"
                    id='nationalID'
                    type='text'
                    placeholder="National ID"
                    disabled={isCreatingGuest}
                    {...register('nationalID', {
                        required:'This field is Required'
                    })}
                />
                {
                    errors?.nationalID?.message && <FormError> {errors.nationalID.message} </FormError>
                }
            </FormRow>
            <FormRow style='mb-8'>
                <FormLabel htmlFor='nationality'>Nationality</FormLabel>
                <CountrySelect
                    containerClassName="input flex "
                    inputClassName=" flex"
                    id='nationality'
                    placeHolder="Select country"
                    value={country}
                    onChange={handleCountry}
                    disabled={isCreatingGuest}
                />
                {/* <input
                    className="input"
                    id='nationality'
                    type='text'
                    placeholder="Nationality"
                    {...register('nationality', {
                        required:'This Field is required'
                    })}
                /> */}
                {
                    errors?.nationality?.message && <FormError> {errors.nationality.message} </FormError>
                }
            </FormRow>
            <div className="text-right">
                <Button category='secondary' >Cancel</Button>
                <Button category='primary' onClick={handleSubmit(onSumbit)} disabled={isCreatingGuest} >Create New Guest</Button>
            </div>
        </Form>
    )
}