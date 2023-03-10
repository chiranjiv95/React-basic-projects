import React, {useState} from 'react';
import people from './data';

const Review = () => {

    const [index, setIndex]=useState(0)

    const checkIndex=(index)=>{
        if(index > people.length-1){
            return 0;
        }
        if(index < 0){
            return people.length-1;
        }
        return index;
    };

    const previous=()=>{
        setIndex((prevIndex)=>{
            const newIndex=prevIndex-1;
            return checkIndex(newIndex);
        });
    };
  
    const next=()=>{
        setIndex((prevIndex)=>{
            const newIndex=prevIndex+1;
            return checkIndex(newIndex);
        });
    };
  
    const random=()=>{
      let randomNum=Math.floor(Math.random()*people.length);
      if(randomNum===index){
        setIndex(checkIndex(randomNum+1));
        return;
      }
      setIndex(randomNum);
    };
  
    const {id, name, job, text, image}=people[index];
    return (
        <>
            <img src={image} alt={name} style={{width:'150px', height:'150px', borderRadius:'50%'}}/>
            <h1>{name}</h1>
            <h3>{job}</h3>
            <p>{text}</p>
            <div>
                <button onClick={previous}>Previous</button>
                <button type='button' onClick={random}>Random</button>
                <button onClick={next}>Next</button>
            </div>
        </>
    )
};

export default Review;