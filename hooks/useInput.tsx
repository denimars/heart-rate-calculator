'use client'
import React, { useEffect, useState } from 'react'

export default function useInput(text="", handlePassing:any) {
    const [value, setValue] = useState(text)
    const handleChange = (event:any)=>{
        setValue(event.target.value)
        handlePassing(event.target.value)
    }
    return {
        value, 
        onInput: handleChange,
    }
}
