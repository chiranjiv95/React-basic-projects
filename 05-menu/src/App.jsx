import { useState } from 'react'
import './App.css';
import data from './data.js';
import SingleMenuItem from './SingleMenuItem';

const allCategories=['all', ...new Set(data.map((item)=>item.category))];

function App() {
  const [menu, setMenu]=useState(data);
  const [category ,setCategory]=useState(allCategories);


  const filterItems=(c)=>{
    if(c==='all'){
      setMenu(data);
      return;
    }
    setMenu(()=>{
      const tempMenu=[...data];
      const newMenu=tempMenu.filter((item)=>item.category===c)
      return newMenu
    })
  };

  return (
    <div className="App" >
      <h1>Our Menu</h1>
      {
        category.map((c, index)=>{
          return <button key={index} style={{marginRight:'16px'}} onClick={()=>filterItems(c)}>{c}</button>
        })
      }
      <div className='menu-list'>
        {
          menu.map((item)=>{
           return (
            <SingleMenuItem key={item.id} {...item}/>
          )
          })
        }
      </div>
      
    </div>
  )
}

export default App
