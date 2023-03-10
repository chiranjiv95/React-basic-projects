import {useState} from 'react';
import data from './data.js';

const LoremIpsum=()=>{
    const [paragraphCount, setParagraphCount]=useState(0);
    const [paragraphs, setParagraphs]=useState([]);
    
    const handleChange=(e)=>{
        setParagraphCount(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    
        let amount=parseInt(paragraphCount);

        if(amount<0){
            amount=1;
        };
        if(amount>data.length){
            amount=(data.length);
        }
        setParagraphs(data.slice(0,amount));
    };

    return (
        <>
        <h2>Paragraphs Generator</h2>
            <form>
             <div>
                <label htmlFor='count'></label>
                <input type='number' id='count' onChange={handleChange} value={paragraphCount} />
             </div>
             <button type="submit" onClick={handleSubmit}>Generate</button>
            </form>
            <div>
                {
                    paragraphs.map((p, index)=>{
                        return <p key={index}>{p}</p>
                    })
                }
            </div>
        </>

    )
};

export default LoremIpsum;