import React, { FunctionComponent } from "react";
import { UserInterface} from '../usersInterface';

type form = {
    
}

const AddUsers : FunctionComponent = () =>
{
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
    }
    return (
        <form className="row" onSubmit={handleSubmit}>
                <div className="input-field col s3">
                    <input id="name" type="text" className="validate"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s3">
                    <input id="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s2">
                    <input id="phone" type="text" className="validate"/>
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="input-field col s3">
                    <input id="fonction" type="text" className="validate"/>
                    <label htmlFor="fonction">Fonction</label>
                </div>
                <div className="col s1">
                    <button className="btn-floating btn-large waves-effect waves-light red" type="submit" ><i className="material-icons">add</i></button>
                </div>
        </form>
    )
}

export default AddUsers;


