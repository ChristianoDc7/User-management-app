import React, { FunctionComponent, useState } from "react";
import { UserInterface } from "../usersInterface";
import AppServices from "../../../services/app.services";

type props = {
    Users : UserInterface
    fetchUsers() : void ;
    isEdit : boolean ;
}

const User : FunctionComponent<props> = ({Users , fetchUsers , isEdit}) =>

{   
    const {id, name, email, phone, fonction} = Users

    const [updatedUser , setUpdatedUser] = useState<UserInterface>(Users)

    const [toEdit , setToEdit] = useState<boolean>(isEdit)

    const deleteOne = async (id : number) => 
    {
        AppServices.deleteOne(id)
        fetchUsers();
    }

    const editOne = () : void =>
    {
        setToEdit(!toEdit);
    }

    const submitUpdate = () =>
    {
        AppServices.updatePost(updatedUser) 
        setToEdit(!toEdit);
        fetchUsers();

    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>
    {
        const fieldId : string = e.target.id
        const fieldValue : string = e.target.value
        const newField : object = {
            [fieldId]: fieldValue 
        };
        setUpdatedUser({...updatedUser, ...newField})
    }

    return !toEdit ? (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{fonction}</td>
            <td>
                <button className="btn-floating waves-effect waves-light blue margin" onClick={()=>editOne()}><i className="material-icons">edit</i></button>
                <button className="btn-floating waves-effect waves-light red" onClick={()=>{deleteOne(Number(id))}}><i className="material-icons">delete_sweep</i></button>
            </td>
        </tr>

    ) : (
        <tr className="row">
            <td>{id}</td>
            <td><input type="text" id="name" className="validate retrecir" onChange={(e)=>handleChange(e)} value={updatedUser.name} /></td>
            <td><input type="text" id="email" className="validate retrecir" onChange={(e)=>handleChange(e)} value={updatedUser.email} /></td>
            <td><input type="text" id="phone" className="validate retrecir" onChange={(e)=>handleChange(e)} value={updatedUser.phone} /></td>
            <td><input type="text" id="fonction" className="validate retrecir" onChange={(e)=>handleChange(e)} value={updatedUser.fonction} /></td>
            <td>
                <button className="btn-floating waves-effect waves-light green margin" onClick={()=>submitUpdate()}><i className="material-icons">check</i></button>
                <button className="btn-floating waves-effect waves-light red" onClick={()=>editOne()}><i className="material-icons">cancel</i></button>
            </td>
        </tr>
    )
}

export default User;