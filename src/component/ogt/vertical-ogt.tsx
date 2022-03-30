import React, { useEffect, useState } from 'react'
import { Checkbox, Col, Row, Select, Table } from 'react-materialize'
import AppServices from '../../services/app.services'
import OgtBody from './ogt-body'

export const VerticalOgt = () => {
  
    const [Saisi , setSaisi] = useState<any[]>([])

    const fetchSaisi = async () => 
    {
       let datas =  await AppServices.getSaisi()  
       return setSaisi(datas.data);
    }

    const [years , setYears] = useState<Array<number>>([])

    const handleYearChange = (e: any) => {
        console.log(e.value.split(', '))
    }
    
    useEffect(()=>{
        fetchSaisi()
    },[])

    useEffect(()=>{
        let yearList = Saisi?.map(el => el.version_id.annee)
        setYears(yearList)
    },[Saisi])
  
   
    return (
    <>
        <Row>
            <Col>
                <Select
                    multiple
                    id='year'
                    label="Selectionnez l'année"
                    options={{
                        dropdownOptions : {
                            onCloseEnd : handleYearChange
                        }
                    }}
                >
                    <option value="all" >All</option>
                    {
                        years.map((year,i)=>(
                            <option key={i} value={year.toString()}>{year}</option>
                        ))
                    }
                </Select>
            </Col>
            <Col>
                <Select
                    id="periode"
                    label='Selectionnez à quelle période'
                    multiple
                >
                    <option value="all" >All</option>
                    <option value="1">Janvier</option>
                    <option value="2">Avril</option>
                    <option value="3">Septembre</option>
                </Select>
            </Col>
        </Row>
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
                <OgtBody Saisis={Saisi} years={years}/>
            </tbody>
            
        </Table>
    </>
  )
}
