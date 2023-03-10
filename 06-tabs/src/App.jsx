import { useEffect, useState } from 'react'
import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [jobs, setJobs]=useState([]);
  const [value, setValue]=useState(0);

  const fetchJobs=async()=>{
    try {
      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(()=>{
    fetchJobs();
  },[])

  const {id, title, company, dates, duties}=jobs[value];
  return (
    <div className="App">
      <div>
        {
          jobs.map((item, index)=>{
            return <button key={item.id} onClick={()=>setValue(index)}>{item.company}</button>
          })
        }
      </div>
       <div>
       
        <h1>{title}</h1>
        <p>{company}</p>
        <p>{dates}</p>
        <ul>
          {
            duties.map((duty, index)=>{
              return <li key={index}>{duty}</li>
            })
          }
        </ul>
       
      </div> 
    </div>
  )
}

export default App
