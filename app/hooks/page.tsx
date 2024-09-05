'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import React from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import {z} from 'zod';
import HookInput from "@/components/HookInput";
import HookSelect from "@/components/HookSelecet";

interface Login{
    email:string;
    password:string;
    admin:string;
}

const schema = z.object({
    email:z.string().email("please insert emial"),
    password:z.string().min(7, "min 7 char"),
    admin:z.string()
})
export default function hooks(){
    const {register, handleSubmit,control, formState:{errors}} = useForm<Login>({
        resolver:zodResolver(schema)
    });
    const onSubmit:SubmitHandler<Login> = (data)=>{
        console.log(data)
    }
    return(
        <div className="flex flex-col">
        <h1>Hallo ini aku form...</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 p-2">
            <HookInput register={register} name="email" type="email" error={errors.email}/>
            <HookInput register={register} name="password" type="password" error={errors.password}/>
            <HookSelect label="Status Admin??" options={["admin", "tidak admin"]} control={control} name="admin" error={errors.admin}/>
            <button type="submit" className="rounded-sm bg-red-700 text-white">Ok</button>
            </div>
        </form>
        </div>
    )
}