import React, { FunctionComponent, useState } from 'react'
import { Card, Col, Icon, Row} from 'react-materialize'
import './login.css'
const Login : FunctionComponent = () =>
{
     const [inputForms , setInputForm] = useState<any>({
          userName : '',
          password : ''
     })

     const handleSubmit = (e: { preventDefault: () => void }) =>
     {
          e.preventDefault();
          
     }

     const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => 
     {
          const fieldId : string = e.target.id
          const fieldValue : string = e.target.value
          const newField : object = {
            [fieldId]: fieldValue 
        };
        setInputForm({ ...inputForms, ...newField})
     }

  return (
    <Row className='container'>
        <Col m={6} s={12}>
           <form onSubmit={handleSubmit}>
               <Card className="#e0f7fa cyan lighten-5">
                    <Row>
                         <div className="input-field col s12">
                              <i className="material-icons prefix">account_circle</i>
                              <input id="userName" type="text" className="validate" required value={inputForms.userName} onChange={(e)=>handleInputChange(e)}/>
                              <label htmlFor="userName">UserName</label>
                         </div>
                    </Row>
                    <Row>
                         <div className="input-field col s12">
                              <i className="material-icons prefix">vpn_key</i>
                              <input id="password" type="password" className="validate" required value={inputForms.password} onChange={(e)=>handleInputChange(e)}/>
                              <label htmlFor="password">Password</label>
                         </div>
                    </Row>
                    <Row>
                         <button className="floatright small btn waves-effect waves-light" >Connect <Icon right>login</Icon></button>
                    </Row>
               </Card>
            </form>
        </Col>
    </Row>
  )
}

export default Login