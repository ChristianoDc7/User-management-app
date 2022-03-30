import React, { FunctionComponent } from 'react'
import { Checkbox } from 'react-materialize';

type tbody ={
    Saisis : any,
    years : any
}
const OgtBody : FunctionComponent<tbody> = ({Saisis , years}) => {
    
    const filtered = () =>
    {   let arr : Array<any> = []
        for(let y of years){
            let matiere : Array<number> = Saisis.filter((el: any) => el.version_id.annee === y)
            //let note : number = matiere.map(function(el){return el[row]})[0]
            arr.push(matiere)
        }
        console.log(arr)
        return arr ;
    }

   const filteredValue = filtered()
   
    return (
    <>
    { Saisis.map((saisi: any , i: React.Key) => (
        
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