import { useState } from "react";

const SingleMenuItem=({id, title, category, img, desc, price})=>{
    return (
        <div style={{padding:'8px 16px', marginTop:'16px', width:'600px', display:'flex'}}>
           <div style={{width:'400px', padding:'8px 16px'}}>
                <img src={img} alt={title} style={{width:'150px', height:'150px'}}/>
           </div>
           <div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
                <hr/>
                <div>
                    {desc}
                </div>
           </div>
        </div>
    )
};

export default SingleMenuItem;