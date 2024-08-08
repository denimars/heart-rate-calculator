
import React, { ReactNode } from 'react'

const Card:React.FC<{title:string, children:ReactNode}> = ({title, children})=>  {
  return (
    <div className=' bg-white border-4 border-yellow-900 w-[95%] md:w-[40%] rounded-3xl p-5 items-stretch'>
        <div className='font-semibold font-mono mb-10'>
            {title}
        </div>
        {children}
    </div>
  )
}

export default Card;
