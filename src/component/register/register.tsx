import React, { FunctionComponent } from 'react'
import { RadioGroup } from 'react-materialize';
import './register.css'

const Register : FunctionComponent = () => {

  return (
    <div className="container">
            <form className="col s12" onSubmit={(e)=>e.preventDefault()}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" required/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" required/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" required/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate"  required/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <RadioGroup options={[{
                                label: 'Homme',
                                value: 'xl'
                                },
                                {
                                label: 'Femme',
                                value: 'l'
                                }]} value="xl" onChange={(e)=>console.log(e.target)} withGap>
                    </RadioGroup>
                    <div className="input-field col s6">
                        <button className="btn btn-large btn-register waves-effect waves-light" type="submit" name="action">Register
                            <i className="material-icons right">done</i>
                        </button>
                    </div>
                </div>
            </form>
    <a title="Login" className="ngl btn-floating btn-large waves-effect waves-light red"><i className="material-icons">input</i></a>
</div>
  )
}

export default Register;