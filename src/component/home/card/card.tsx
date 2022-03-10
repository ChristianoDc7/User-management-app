import React, { FunctionComponent } from 'react'
import Language from '../language'

type Props = {
    techno : Language
}

const CardL : FunctionComponent <Props> = ({techno}) =>

{
    const {brand , description } = techno

  return (
    
        <div className="col s3 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{brand}</span>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href="#">Learn {brand} </a>
                </div>
            </div>
        </div>

  )
}

export default CardL;