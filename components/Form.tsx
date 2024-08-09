'use client'

import {useForm} from 'react-hook-form';
import { FormData, UserSchema } from '@/types';
import FormField from './FormField';
import { zodResolver } from '@hookform/resolvers/zod';



export default function Form() {
  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm<FormData>({
    resolver: zodResolver(UserSchema)
  });
  const onSubmit = async(data:FormData)=>{
    console.log("success", data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex-row'>
            <h1 className='text-black font-bold text-center'>
                Register
            </h1>
           
            <FormField type='email' placeholder='email' name="email" register={register} error={errors.email}/>
            <FormField type='text' placeholder='GitHub URL' name="githubUrl" register={register} error={errors.githubUrl}/>
            <FormField type='number' placeholder='Years of Experience' name="yearsOfExperience" register={register} error={errors.yearsOfExperience} valueAsNumber/>
            <FormField type='password' placeholder='Password' name="password" register={register} error={errors.password}/>
            <FormField type='password' placeholder='Confirm Password' name="confirmPassword" register={register} error={errors.confirmPassword}/>
            <button type='submit' className='bg-primary p-4 rounded-xl w-full text-white mt-2'>
                Save
            </button>
        </div>
    </form>
  )
}
