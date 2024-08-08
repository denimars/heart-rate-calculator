
import useInput from "@/hooks/useInput"
import React from "react"


const Input:React.FC<{title:string, passingData:(data:any)=>void}> = ({title, passingData})=>{
    const process = useInput("", passingData)
    return (
        <div className="w-full mb-1">
            <div className="font-bold font-mono mb-2">
                {title}
            </div>
            <div className="w-full">
                <input className="border-2 w-full border-primary p-2 rounded focus:outline-none focus:border-[#ebab34]" type="number" {...process}/>
            </div>
        </div>
    )
}

export default Input