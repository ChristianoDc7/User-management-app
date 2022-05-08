import React, { FunctionComponent, useEffect, useState } from "react";
import Language from "./language";
import techs from "../../data/data";
import CardL from "./card/card";
import { useNavigate } from "react-router-dom";
import styles from '../../styles/style.module.scss';


const Home : FunctionComponent= () =>
{
    
    const [ techno , setTechno ] = useState<Language[]>([])

    const navigate = useNavigate()

    useEffect(()=>{
        setTechno(techs)
    },[])

    return (
        <div className={styles.homepage}>
            <h1>Pg Languages</h1>
        
            <div className="row">
                {
                    techno.map((element) => (
                        <CardL key={element.id} techno = {element} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home ;