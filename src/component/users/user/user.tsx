import React, { FunctionComponent } from "react";
import { UserInterface } from "../usersInterface";

type props = {
    Users : UserInterface
}

const User : FunctionComponent<props> = ({Users}) =>

{   
    const {id,name,email,phone,fonction} = Users

    return (
            <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{fonction}</td>
            </tr>

    )
}

export default User;