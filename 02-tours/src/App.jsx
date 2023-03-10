import { useEffect, useState } from 'react'
import './App.css';
import Tour from './Tour';

const url='https://course-api.com/react-tours-project';

function App() {

  const [tours, setTours]=useState([]);
  const [isLoading, setIsLoading]=useState(true);

  const fetchTours=async()=>{
    setIsLoading(true)
    try{
      const response=await fetch(url);
      const tours=await response.json();
      setTours(tours);
    }catch(erre){
      console.log(error)
    }
    setIsLoading(false)
  };

  const removeTour=(id)=>{
    setTours(tours.filter((tour)=>tour.id!==id));
  };


  useEffect(()=>{
    fetchTours();
  },[]);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(tours.length===0){
    return (
      <>
        <h2>No Tours Left</h2>
        <button type='button' onClick={fetchTours}>Refresh</button>
      </>
    )
  }; 

  return (
    <div className="App">
      <h1 style={{color:'cyan'}}>Tours Project</h1>
      {
        tours.map((tour)=>{
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          )
        })
      }
    </div>
  )
}

export default App
