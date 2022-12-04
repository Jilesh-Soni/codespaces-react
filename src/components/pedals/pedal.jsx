
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../pedals/pedal.css'
export const Pedal = ({type}) => {    
    // TODO : Stop at 100 , when user clicks / holds / drags
    // TODO : make it look like a pedal
    // TODO : give readings of half clutch maybe ?
    const [val,setVal] = useState(0);
    const incrementor = useRef(null);

    useEffect(()=>{
        incrementor.current = setInterval(()=>{
            // console.log(val);
            // if()
            setVal((v)=>(v+1));
        },200)
        return () =>{
            clearInterval(incrementor.current);
        }
    },[]);

    return ( 
        <>
        <div className="pedal">
        {type}
        </div>
        <input type="range" orient="vertical" value={val}/>
        <div className="pedal">{val}</div>
        <button onClick={()=>{clearInterval(incrementor.current)}}>remove inc</button>

        </>

    );
}