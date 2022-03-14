import React, { FunctionComponent, useEffect, useState } from 'react'
import AppServices from '../../services/app.services'
import { OgtInterface } from './ogtInterface'




const OgtTable : FunctionComponent = () => {

    const [ogtData , setOgtData] = useState<OgtInterface[]>([])

    useEffect(()=>{
        AppServices.getRub()
        .then( data => setOgtData(data))
        
    },[])

    const [head ,setHead] = useState<Array<number>>([])

    const [rows , setRows] = useState<Array<string>>([
        'SVT' , 'PC' , 'MATH'
    ])

  return (
    <div>
        <h2>Ogt Table</h2>
        <p>
            <form action="#">
            {
                head.map((element,index)=>(
                    <label key={index} className="margin">
                        <input type="checkbox" id={element.toString()} className="filled-in" /> 
                        <span>{element}</span>
                    </label>
                ))
            }
            </form> 
        </p>
        <table className='striped'>
            <thead>
                <th></th>
                {
                    head.map((element,index)=>(
                        <TableHeader key={index} head = {element} />
                    ))
                }
            </thead>
            <tbody>
                {
                    rows.map((element,index)=>(
                        <TableRow key={index} row = {element} ogtData = {ogtData} />
                    ))
                }
            </tbody>
        </table>
        <button onClick={()=>{setHead(ogtData.map(element => element.year))}}>Fetch</button>
    </div>
  )
}


//composant header
type headsProp = {
    head : number
}
const TableHeader : FunctionComponent<headsProp> = ({head}) => <th>{head}</th> 


//composant ligne
type rowsProp = {
    row : string,
    ogtData : OgtInterface[]
}
const TableRow : FunctionComponent<rowsProp> = ({row , ogtData}) => {

    const [value,setValue] = useState<Array<number>>(ogtData.map(element => element.SVT))
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