import React from 'react'
import { Checkbox, Row, Select, Table } from 'react-materialize';

const CreateOgt = () => {
    const range = (start: number, end: number) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }
    const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    const rub = ["Impôt","Douane"]

    const typeOgt = ["type01","type02","type03"]

    const version = ["1.0","2.1"]

    const item = ["IRSA","IRS"]
  return (
    <>
        <Row>
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

            <Select
                    label="Selectionnez le typeOgt"
            >
                {
                    typeOgt.map((el,i)=>(
                        <option key={i} value={el}>{el}</option>
                    ))
                }
            </Select>

            <Select
                    label="Choisissez la version"
            >
                {
                    version.map((el,i)=>(
                        <option key={i} value={el}>{el}</option>
                    ))
                }
            </Select>
       </Row>
       <Row>
           <Table striped>
               <thead>
                   <tr>
                       <th>Rubrique</th>
                       <th>Montant</th>
                       <th>Description</th>
                       <th>Activation</th>
                   </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>
                       <Select
                                label="Item"
                        >
                            {
                                item.map((el,i)=>(
                                    <option key={i} value={el}>{el}</option>
                                ))
                            }
                        </Select>
                       </td>
                       <td><input type="text" name="rubrique"  className='validate retrecir'/></td>
                       <td><input type="text" name="rubrique"  className='validate retrecir'/></td>
                       <td><Checkbox value={'edit'} label={'edit'}/></td>
                   </tr>
               </tbody>
           </Table>
       </Row>

    </>
  )
}

export default CreateOgt;