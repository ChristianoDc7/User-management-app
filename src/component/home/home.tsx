import React, { useEffect, useState } from "react";
import Language from "./language";
import techs from "../../data/data";
import CardL from "./card/card";

export default function Home()
{
    const [list , setList] = useState<Array<string>>(['Get Started','Close'])

    
    const [ techno , setTechno ] = useState<Language[]>([])

    useEffect(()=>{
        setTechno(techs)
    },[])

    return (
        <div >
            Home sweet home
            <div className="row">
                {
                    techno.map((element,index) => (
                        <CardL key={index} techno = {element} />
                    ))
                }
            </div>
        </div>
    )
}

