import React, { FunctionComponent, useEffect, useState } from 'react'
import { Row, Select, Table ,Col } from 'react-materialize'
import AppServices from '../../services/app.services'
import { OgtInterface } from './ogtInterface'



const OgtTable : FunctionComponent = () => {

    const [ogtData , setOgtData] = useState<OgtInterface[]>([])

    

    const fetchOgt = async () => 
    {
       let datas =  await AppServices.getRub()  
       return setOgtData(datas.data);
    }
    const [head , setHead] = useState<Array<number>>([])
    

    useEffect(()=>{
            fetchOgt()
    },[])

    useEffect(()=>{
        setHead(ogtData.map(element => element.year))
    },[ogtData])

    const handleSelect = (e: any   ) =>
    {
        //let selectedYear = Array.from(e.target.selectedOptions, option => option.value).map(Number)
        setChecked(e.value.split(", ").map(Number))
        
    }

    let [checked , setChecked] = useState<Array<number>>([2022,2023,2024])


    const hasSelected = (sel : number): boolean =>{
        return checked.includes(sel)
    }

    const [rows , setRows] = useState<Array<string>>([
        'SVT' , 'PC' , 'MATH'
    ])

  return (
    <div>
        <h2>Ogt Table</h2>
        <Row>
            <Col >
                    <Select multiple  options={{
                        dropdownOptions : {
                            closeOnClick : false,
                            onCloseEnd : handleSelect,
                        }
                    }}>
                            <option value="e" disabled >Choose the columns</option>
                            {
                                head?.map((el,i)=>(
                                    <option key={i} value={el} selected={hasSelected(el)} >{el}</option>
                                ))
                            }
                    </Select>
            </Col>
            
        </Row>
        <button className="btn-floating waves-effect waves-light green margin-bottom" onClick={()=>{setHead(ogtData.map(element => element.year))}}><i className="material-icons">edit</i></button>
        <Table striped={true}>
            <thead>
                <tr>
                    <th></th>
                    {
                        checked?.map((element,index)=>(
                            <TableHeader key={index} checked = {element} />
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows?.map((element,index)=>(
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


