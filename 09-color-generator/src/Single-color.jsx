import { useEffect, useState } from "react";
import { rgbToHex } from "./utils";

const SingleColor=({rgb, weight, index})=>{
    const [alert, setAlert]=useState(false);
    
    //convert array to string and join with ,
    const bcg=rgb.join(',');

    const hex=rgbToHex(...rgb);

    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setAlert(false);
        },1000);
        return ()=>clearTimeout(timeout);
    },[alert]);

    return (
        <div style={{backgroundColor:`rgb(${bcg})`, width:'150px', height:'150px'}}
        onClick={()=>{
            setAlert(true);
            navigator.clipboard.writeText(hex);
        }}>
            <p style={{color:`${index>10?'white':'black'}`}}>{weight}%</p>
            <p style={{color:`${index>10?'white':'black'}`}}>{hex}</p>
            { alert && <p>copied to clipboard</p>}
        </div>
    )
};

export default SingleColor;