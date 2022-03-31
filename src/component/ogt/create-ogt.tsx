import React from 'react'
import { Select } from 'react-materialize';

const CreateOgt = () => {
    const range = (start: number, end: number) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }
    const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    const rub = ["Impôt","Douane"]
  return (
    <>
       <Select
            label="Selectionnez l'année"
       >
           {
               range(2005, 2011).map(el=>(
                   <option key={el} value={el.toString()}>{el}</option>
               ))
           }
       </Select>
       
       <Select
            label="Selectionnez le mois"
       >
           {
               month.map((el,i)=>(
                   <option key={i} value={(i+1).toString()}>{el}</option>
               ))
           }
       </Select>

       <Select
            label="Selectionnez le rubrique"
       >
           {
               rub.map((el,i)=>(
                   <option key={i} value={(i).toString()}>{el}</option>
               ))
           }
       </Select>
    </>
  )
}

export default CreateOgt;