import {useState, useEffect} from 'react';

const Tour =({id, name, image, price, info, removeTour})=>{
    const [readMore, setReadMore]=useState(false);

    const toggleInfo=()=>{
        if(readMore){
            setReadMore(false);
            return;
        }
        setReadMore(true);
    };

    return (
        <>
            <h2>{name}</h2>
            <img src={image} alt={name} style={{width:'50%'}}/>
            <p>${price}</p>
            <p>
            {
                readMore?info:`${info.substring(0,100)}...`
            }
            </p>
            <button type='button' onClick={toggleInfo} style={{fontStyle:'italic'}}>
                {
                    readMore?'Show Less':'Read More'
                }
            </button>
            <button type='button' onClick={()=>removeTour(id)}>Not Interested</button>
            <hr/>
        </>
    )
};

export default Tour;