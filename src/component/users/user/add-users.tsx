import React, { FunctionComponent, useRef, useState} from "react";
import { UserInterface} from '../usersInterface';
import AppServices from '../../../services/app.services'


type FuncProps = {
    fetchUsers() : void ;
}

const AddUsers : FunctionComponent<FuncProps> = ({fetchUsers}) =>
{

    const [newUser , setNewUser] = useState<UserInterface>({
        name : '',
        email : '',
        phone : '',
        fonction : ''
    })
    
    
    const [btnStatus , setBtnStatus] = useState<boolean>(true)
    
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => 
    {
        e.preventDefault();
        if(newUser.name != "" && newUser.email != "" && newUser.phone != "" && newUser.fonction != "" )
        {
             await AppServices.addUsers(newUser) && fetchUsers()
        }
        
        setNewUser({...newUser, ...{ name : '' , email : '' , phone : '' , fonction : '' }})
    }

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) =>
    {
        if(newUser.name != "" && newUser.email != "" && newUser.phone != "" && newUser.fonction != "" ){
            setBtnStatus(false)
        }else{
            setBtnStatus(true)
        }
        const fieldId : string = e.target.id
        const fieldValue : string = e.target.value
        const newField : object = {
            [fieldId]: fieldValue 
        };
        setNewUser({ ...newUser, ...newField})
    }
    return (
        <form className="row" onSubmit={handleSubmit}>
           
                <div className="input-field col s3">
                    <input id="name" type="text" className="validate" onChange={e => handleInputChange(e)} value={newUser.name}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s3">
                    <input id="email" type="email" className="validate" onChange={e => handleInputChange(e)}  value={newUser.email}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s2">
                    <input id="phone" type="text" className="validate" onChange={e => handleInputChange(e)} value={newUser.phone} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field col s3">
                    <input id="fonction" type="text" className="validate" onChange={e => handleInputChange(e)} value={newUser.fonction} />
                    <label htmlFor="fonction">Fonction</label>
                </div>
                <div className="col s1">
                    <button className="btn-floating btn-large waves-effect waves-light green" type="submit" disabled={btnStatus}><i className="material-icons">add</i></button>
                </div>
        </form>
    )
}

export default AddUsers;


