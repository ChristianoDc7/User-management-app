import React, { FunctionComponent, useState } from "react";
import { UserInterface} from '../usersInterface';
import AppSercices from '../../../services/app.services'

type form = {
    form : UserInterface
}

const AddUsers : FunctionComponent = () =>
{
    
    const [newUser , setNewUser] = useState<UserInterface[]>([])
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        AppSercices.addPosts(newUser)
        
    }

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) =>
    {
        const fieldName : string = e.target.name
        const fieldValue : string = e.target.value
        const newField : UserInterface = {
            [fieldName]: fieldValue 
        };
        setNewUser({ ...newUser, ...newField})
    }
    return (
        <form className="row" onSubmit={handleSubmit}>
           
                <div className="input-field col s3">
                    <input id="name" type="text" name="name" className="validate" onChange={e => handleInputChange(e)}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s3">
                    <input id="email" name="email" type="email" className="validate" onChange={e => handleInputChange(e)}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s2">
                    <input id="phone" name="phone" type="text" className="validate" onChange={e => handleInputChange(e)}/>
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field col s3">
                    <input id="fonction" name="fonction" type="text" className="validate" onChange={e => handleInputChange(e)} />
                    <label htmlFor="fonction">Fonction</label>
                </div>
                <div className="col s1">
                    <button className="btn-floating btn-large waves-effect waves-light red" type="submit" ><i className="material-icons">add</i></button>
                </div>
        </form>
    )
}

export default AddUsers;


