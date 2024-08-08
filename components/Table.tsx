import React from "react"

const Table:React.FC<{data:any}> = ({data})=>{
    
    if(data.length===0){
        return null
    }
    
    return (
      <div className=" mt-5 mb-2">
        <table className="table-auto w-full">
        <thead>
            <tr className="bg-slate-400 h-20">
                <th className="text-white">Target Zone</th>
                <th className="text-white">% Intensity</th>
                <th className="text-white">THR in BPM</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((item:any, index:any)=>(
                    <tr key={index} className={`${index===0? 'bg-red-400':index===1?"bg-orange-300":index===2?"bg-yellow-300":index===3?"bg-green-400":"bg-slate-300"} h-20`}>
                        <td className="text-center h-2">
                            <div>
                                {item.target}
                            </div>
                            <div className="font-bold">
                                {item.des}
                            </div>
                        </td>
                        <td className="text-center">
                                {item.intesity}
                        </td>
                        <td className="text-center">
                            <div>
                                {item.bpm}
                            </div>
                        </td>
                    </tr>
                ))
            }
            
        </tbody>
      </table>
      </div>
      
    )
}

export default Table