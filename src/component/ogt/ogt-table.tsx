import React, { FunctionComponent, useEffect, useState } from 'react'
import { Table } from 'react-materialize'
import AppServices from '../../services/app.services'
import { OgtInterface } from './ogtInterface'




const OgtTable : FunctionComponent = () => {

    const [ogtData , setOgtData] = useState<OgtInterface[]>([])

    useEffect(()=>{
        AppServices.getRub()
        .then( data => setOgtData(data))
    },[])

    const [head , setHead] = useState<Array<number>>([
        
    ])

    let [checked , setChecked] = useState<Array<number>>([2022,2023,2024])

    const handleCheck = (element : number, e : React.ChangeEvent<HTMLInputElement>) =>
    {
        let checktest = e.target.checked 
        let checkedId = Number(e.target.id) 
        let newField : number[]
        if(checktest){
            const newElement : number[] = checked.concat([element]);
            newField = newElement;
        } else {
            const newElement: number[] = checked.filter(el => el != checkedId)
            newField = newElement;
        }
        setChecked(newField.sort((a,b) => a-b))
        
    }

    const hasType = (type: number): boolean => {
        return checked.includes(type);
      }

    const [rows , setRows] = useState<Array<string>>([
        'SVT' , 'PC' , 'MATH'
    ])

  return (
    <div>
        <h2>Ogt Table</h2>
        <button className="btn-floating waves-effect waves-light green margin-bottom" onClick={()=>{setHead(ogtData.map(element => element.year))}}><i className="material-icons">edit</i></button>
            <div className='row'>
            {
                head.map((element,index)=>(
                    <label key={index} className="margin col s2">
                        <input type="checkbox" id={element.toString()} className="filled-in" defaultChecked={hasType(element)} onChange={(e)=>handleCheck(element, e)}/> 
                        <span>{element}</span>
                    </label>
                ))
            }
            </div> 
        <Table striped={true}>
            <thead>
                <tr>
                    <th></th>
                    {
                        checked.map((element,index)=>(
                            <TableHeader key={index} checked = {element} />
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((element,index)=>(
                        <TableRow key={index} row = {element} checked= {checked} ogtData={ogtData}/>
                    ))
                }
            </tbody>
        </Table>
    </div>
  )
}


//composant header
type headsProp = {
    checked : number
}
const TableHeader : FunctionComponent<headsProp> = ({checked}) => <th>{checked}</th> 


//composant ligne
type rowsProp = {
    row : string,
    checked : Array<number>,
    ogtData : Array<OgtInterface>
}
const TableRow : FunctionComponent<rowsProp> = ({row , checked , ogtData }) => 
{

    const setter = () =>
    {   let arr : Array<number> = []
        for(let u of checked){
            let matiere : Array<any> = ogtData.filter(el => el.year === u)
            let note : number = matiere.map(function(el){return el[row]})[0]
            arr.push(note)
        }
        return arr ;
    }

   const value = setter()

    return (
        <tr>
            <th>{row}</th>
            {
                value.map((element,index) => (
                    <td key={index} >{element}</td>
                ))
            }
        </tr>
    )
}



export default OgtTable;