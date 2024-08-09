import React from 'react'
import { FormFieldProps } from '@/types';

const FormField:React.FC<FormFieldProps> = ({
    type,
    placeholder,
    name,
    register,
    error,
    valueAsNumber
})=>{
   return(
    <>
        <input type={type} placeholder={placeholder} {...register(name, {valueAsNumber})} className='w-full p-2 m-1'/>
        {error && <span className='text-red-500'>{error.message}</span>}
    </>
   )
}

export default FormField;
