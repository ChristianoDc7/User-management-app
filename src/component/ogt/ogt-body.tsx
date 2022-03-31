import { spawn } from 'child_process';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Checkbox } from 'react-materialize';

type tbody ={
    Saisis : any,
    years : any
}
const OgtBody : FunctionComponent<tbody> = ({Saisis , years}) => {
    
    const filtered = () =>
    {   let arr : Array<any> =[]
        for(let y of years){
            let matiere : Array<any> = Saisis.filter((el: any) => el.version_id.annee === y)[0]
            arr.push(matiere)
        }
        return arr ;
    }
    const [viewArr , setViewArr] = useState<Array<number>>([])

   useEffect(()=>{
       let temp = filtered()
       setViewArr(temp)
   },[years])
   
 
  
   if(viewArr[0]==undefined) return (<tr><td>Vide</td></tr>)

   return (
    <>
        { viewArr?.map((saisi: any , i: React.Key) => (
            
            <tr key={i}>
                <td>{saisi.intitule.intitule}</td>
                <td>{saisi.montant}</td>
                <td>{saisi.description}</td>
                <td><Checkbox value={saisi.version_id.annee.toString()} label={'edit'}/></td>
            </tr>
            
            ))
        }
    </>
  )
}

export default OgtBody;