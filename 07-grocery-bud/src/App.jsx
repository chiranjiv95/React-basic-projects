import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [text, setText] = useState('');
  const [groceries, setGroceries]=useState([]);
  const [edit, setEdit]=useState(false);
  const [editId, setEditId]=useState(null)

  const handleSubmit=(e)=>{
    
    e.preventDefault();
    setEdit(false)

    if(text===''){
      alert("can't submit empty value")
      return;
    }else if(text && edit){
      setGroceries(groceries.map((g)=>{
        if(g.id===editId){
          return {...g, item:text};
        }
        return g;
      }))
    }else{
      const id=Date.now();
      setGroceries([...groceries, {id:id, item:text}]);
    }
    setText('')
  
  };

  const removeHandler=(id)=>{
      const newList=groceries.filter((grocery)=>grocery.id!==id);
      setGroceries(newList);
  }

  const editHandler=(id)=>{
    const obj=groceries.find(g=>g.id==id);
    setEdit(true);
    setEditId(id);
    const item=obj.item;
    setText(item);
  };

  return (
    <div className="App">
      <h3>Grocery Bud</h3>
      <form>
        <div>
          <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <button type='submit' onClick={handleSubmit}>{edit?'update':'add'}</button>
      </form>
      {
          groceries.map((grocery)=>{
            const {id, item}=grocery;
            return <div key={id}>
              <h3>{item}</h3>
              <div>
                <button onClick={()=>editHandler(id)}>Edit</button>
                <button onClick={()=>removeHandler(id)}>Delete</button>
              </div>
            </div>
          })
      }
      <button onClick={()=>setGroceries([])}>Clear All</button>
    </div>
  )
}

export default App
