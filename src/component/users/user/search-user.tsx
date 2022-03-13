import React, { FunctionComponent, useState } from 'react';
import AppServices from '../../../services/app.services';
import {UserInterface} from '../usersInterface';


type props = {
    setUsers(user : React.SetStateAction<UserInterface[]>) : void
}

const Search : FunctionComponent<props> = ({setUsers}) =>
{

  const [showInput , setShowInput] = useState<boolean>(false)

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>
  {
    AppServices.getUsers()
    .then( data => data.filter(({name}) => name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    .then( data => setUsers(data) )
  }

  return showInput ? (
    <div className='row'>
        <div className='col'>
            <button className="btn-floating waves-effect waves-light blue lighten-2 margin " onClick={()=>{setShowInput(!showInput)}}><i className="material-icons">search</i></button>
        </div>
        <div className="input-field col s3">
            <input id="search" type="text" className="validate" onChange={ (e) => handleChange(e) } />
            <label htmlFor="search">Search</label>
        </div>
    </div>
  ) : (
    <button className="btn-floating waves-effect waves-light blue lighten-2 margin" onClick={()=>{setShowInput(!showInput)}} ><i className="material-icons">search</i></button>
  )
}

export default Search;