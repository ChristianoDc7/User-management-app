import React, { FunctionComponent, useEffect, useState } from "react";
import User from "./user/user";
import { UserInterface } from "./usersInterface";
import AppServices from "../../services/app.services";
import AddUsers from "./user/add-users";


const Users : FunctionComponent = () =>
{
    const [Users , setUsers] = useState<UserInterface[]>([])

    useEffect(()=>{
        AppServices.getUsers().then( datas => setUsers(datas) )
    },[])

    return (
        <div className="row">
            <AddUsers />
            <table className="centered highlight">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Fonction</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user)=>(
                            <User key={user.id} Users={user}/>
                        ))
                    }
                </tbody>
      </table>
        </div>
    )
}

export default Users;