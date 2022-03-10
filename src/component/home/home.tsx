import React, { useEffect, useState } from "react";
import Language from "./language";
import techs from "../../data/data";
import CardL from "./card/card";

export default function Home()
{
    
    const [ techno , setTechno ] = useState<Language[]>([])

    useEffect(()=>{
        setTechno(techs)
    },[])

    return (
        <div >
            Home sweet home
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

