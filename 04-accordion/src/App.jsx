import { useState } from 'react'
import './App.css';
import Accordion from './Accordion';
import data from './data.js';

function App() {
  
  const [questions, setQuestions]=useState(data);

  return (
    <div className="App">
      {
        questions.map((question)=>{
          return (<Accordion key={question.id} {...question}/>)
        })
      }
    </div>
  )
}

export default App
