import React from 'react'
import { FieldError, UseFormRegister, FieldValues, Path } from 'react-hook-form'

interface Field_<T extends FieldValues>{
    name: Path<T>
    type:string
    register:UseFormRegister<T>
    error:FieldError | undefined
}

export default function HookInput<T extends FieldValues>({
    name,
    type,
    register,
    error
}:Field_<T>) {
  return (
    <div className='flex flex-col'>
        <input {...register(name)} type={type}/>
        {error && <span className='text-red-300'>{error.message}</span>}
    </div>
  )
}

