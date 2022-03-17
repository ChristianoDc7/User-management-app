import React, { FunctionComponent } from 'react'
import { Button, Card, Col, Icon, Row, TextInput} from 'react-materialize'
import './login.css'
const Login : FunctionComponent = () =>
{
  return (
    <Row className='container'>
        <Col m={6} s={12}>
            <Card className="#e0f7fa cyan lighten-5">
               <Row>
                    <Col s={12}>
                            <TextInput icon="account_circle" id="TextInput-81" label="UserName" noLayout/>
                    </Col>
               </Row>
               <Row>
                    <Col s={12}>
                            <TextInput icon="vpn_key" id="pswd" password label="Password" noLayout/>
                    </Col>
               </Row>
               <Row>
                    <Button className="floatright" small node="a" tooltip="Connect" waves="light" >Connect <Icon right>login</Icon></Button>
               </Row>
            </Card>
        </Col>
    </Row>
  )
}

export default Login