import {useState} from 'react';

const Accordion =({id, title, info})=>{

    const [showInfo, setShowInfo]=useState(false);

    return (
    <div style={{border:'1px solid grey', borderRadius:'10px', marginTop:'16px', padding:'8px 16px', width:'800px'}}>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <h3>{title}</h3>
        <button type='button' onClick={()=>setShowInfo(!showInfo)}>
            {showInfo?'-':'+'}
        </button>
      </div>
        {
            showInfo &&  <p>{info}</p>
        }
    </div>)
};

export default Accordion;