import React from 'react'
import Form from '@/components/Form'
import DropdownMenu from '@/components/DropDownMenu'

export default function Participant() {
  return (
    <div className='bg-slate-300 w-full h-full flex items-center justify-center'>
        <div className="md:w-[40%] w-[80%]">
            <DropdownMenu/>
            <Form/>
        </div>
    </div>
  )
}