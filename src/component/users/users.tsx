import React, { FunctionComponent, useEffect, useState } from "react";
import User from "./user/user";
import { UserInterface } from "./usersInterface";
import AppServices from "../../services/app.services";
import AddUsers from "./user/add-users";
import Search from "./user/search-user";
import { Navigate } from "react-router-dom";


const Users : FunctionComponent = () =>
{
    const [Users , setUsers] = useState<UserInterface[]>([])

    const fetchUsers = () : void => {
        AppServices.getUsers().then( datas => setUsers(datas) )
    }

    useEffect(()=>{
        fetchUsers();
    },[])

    return (
        <div className="row">
            <AddUsers fetchUsers = {fetchUsers} />
            <Search setUsers={setUsers} />
            <table className="centered highlight">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Fonction</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user)=>(
                            <User key={user.id} Users={user} fetchUsers = {fetchUsers} isEdit={false} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;