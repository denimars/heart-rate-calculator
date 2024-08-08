import React from "react"

const Button:React.FC<{title:string, click:()=>void}> = ({title, click})=>{
    return (
        <button className="bg-primary p-2 items-center rounded active:bg-blue-900 focus:outline-none" onClick={click}>
            <div className="text-white font-mono">
                {title}
            </div>
        </button>
    )
}

export default  Button