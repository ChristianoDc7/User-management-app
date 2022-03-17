import React from 'react'
import { Link } from 'react-router-dom'


export const NotFound = () => {

  return (
    <div className='nf container-fluid'>
        <h1>
           Oups!! 
        </h1>
        <p>The page you requested was not found</p>
        <span> Please Write the right path ;-) </span><br />
        <Link to="/">Go to Home¨Page</Link>
    </div>
  )
}
