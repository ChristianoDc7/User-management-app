import React, { FunctionComponent } from 'react'
import Language from '../language'

type Props = {
    techno : Language
}

const CardL : FunctionComponent <Props> = ({techno}) =>

{

  return (
    
        <div className="col s3 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{techno.brand}</span>
                    <p>{techno.description}</p>
                </div>
                <div className="card-action">
                    <a href="#">Learn {techno.brand} </a>
                </div>
            </div>
        </div>

  )
}

export default CardL;