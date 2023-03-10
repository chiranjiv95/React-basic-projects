import { useState } from 'react'
import './App.css';
import data from './data.js';
import List from './List';

function App() {
  
  const [friends, setFriends]=useState(data);

  const clearAll=()=>{
    setFriends([]);
  }

  const deleteHandler=(id)=>{
    const newList=friends.filter((friend)=>friend.id !== id);
    setFriends(newList);
  }

  return (
    <div className="App">
      <h1>{friends.length} Birthdays Today</h1>
      {
        friends.map((friend)=>{
          return (
            <List key={friend.id} {...friend} deleteHandler={deleteHandler}/>
          )
        })
      }
      <button type='button' style={{background:'cyan'}} onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default App
