'use client'
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Table from "@/components/Table";
import { title } from "process";
import { useState } from "react";


export default function Home() {
  const [age, setAge] =useState()
  const [data, setData]  = useState([])
  const ageHandler = (d:any)=>{
    setAge(d)
  }

  const clicked = ()=>{
    if(age!==undefined && +age>=20 && +age<=70){
      let x_:any = []
      let age_ = 220 - parseInt(age)
      let multiple = 0;
      if(+age>=20 && +age<=24){
        multiple = 20
      }else if(+age>=25 && +age<=34){
        multiple=19
      }else if(+age>=35 && +age<=44){
        multiple=18
      }else if(+age>=45 && +age<=50){
        multiple=17
      }else if(+age>=55 && +age<=60){
        multiple=16
      }else if(+age>=65 && +age<=70){
        multiple=15
      }
      for(let i=0; i<5;i++){
        let x = {target:"", des:"",intesity:"", bpm:""}
        if(i===0){
          x.target = "Maximum VO2"
          x.des="Max Zone"
          x.intesity = "90%-100%"
        }else if(i===1){
           x.target = "Hard"
           x.des="Anaerobic Zone"
           x.intesity = "80%-90%"
        }else if(i===2){
          x.target = "Moderate"
          x.des= "Aerobic Zone"
          x.intesity = "70%-80%"
       }else if(i===3){
         x.target = "Light"
         x.des=" Fat Burn Zone"
         x.intesity = "60%-70%"
       }else if(i===4){
         x.target = "Very Light"
         x.des="Warm Up Zone"
         x.intesity = "60%-70%"
       }
       x.bpm = `${age_ - multiple} - ${age_}`
       x_.push(x)
       age_ = age_ - multiple
      }
      setData(x_)
    }else{
      alert("Minimal umur 20 dan max 60 tahun")
      setData([])
    }
  }
  return (
   <div className="flex justify-center items-center w-full  bg-primary h-full">
      <Card title="Heart Rate Calculate">
        <div className="mb-2">
        <div className="w-full">
          <Input title="Umur" passingData={ageHandler}/>
        </div>
          <div className="flex justify-end">
            <Button title="Hitung" click={clicked}/>
          </div>
          <Table data={data}/>
          </div>
        <div className="text-right mt-3">
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9307357/">Source: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9307357</a>
        </div>
      </Card>
      

    </div>
  );
}
