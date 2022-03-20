import React, { FunctionComponent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Col, Icon, Row} from 'react-materialize'
import './login.css'
import { AuthContext } from '../../services/Auth/Auth-Provider';


const Login : FunctionComponent = () =>
{
     const {user, setUser} = useContext(AuthContext)
     const [inputForms , setInputForm] = useState<any>({
          userName : '',
          password : ''
     })

     const [errmsg , setErrMsg] = useState<string>('')

     const navigate = useNavigate()

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
     {
          e.preventDefault();
          if(inputForms.userName == 'tino' && inputForms.password == 'tino'){
          setUser({...user,...inputForms})
          navigate('/')
          } else {
               setErrMsg('Wrong Password or userName , please retry ')
          }
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
    <>
         {
              errmsg != '' ? (
          <Row className='container'>
              <Col m={6} s={12}>
                    <div className='card-panel red lighten-1 text-white'>
                         <span>
                              {errmsg}
                         </span>
                    </div>
              </Col>
          </Row>) : ('')
         }
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
    </>
  )
}

export default Login