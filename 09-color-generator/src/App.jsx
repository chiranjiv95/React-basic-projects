import { useState } from 'react'
import './App.css'
import SingleColor from './Single-color';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [shades, setShades]=useState(new Values('#f15025').all(10));
  const [error, setError]=useState(false);

  const handleSubmit=(e)=>{
    setError(false);
    e.preventDefault();

    try {

      // the value 10 means generate 10 tints and 10 shades, 100/10 if we provide 20, 100/20
      let colors=new Values(color).all(10);
      setShades(colors);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true)
    }
   

  }

  return (
    <div className="App">
      <div>
          <h3>Color Generator</h3>
          <form>
            <input type='text' placeholder='#f15025' value={color} onChange={(e)=>setColor(e.target.value)}
            style={{height:'24px', padding:'8px 16px',marginRight:'16px',borderRadius:'16px', fontSize:'16px'}}
            className={`${error?'error':null}`}/>
            <button type='submit' onClick={handleSubmit}>Generate</button>
          </form>
      </div>
      <br/><hr/>
      <div style={{marginTop:'24px'}} className='shades-list'>
        {
          error? <h2 style={{color:'red'}}>Enter correct hashcode</h2>:
          
          (shades.map((shade, index)=>{
            return <SingleColor key={index} index={index} {...shade}/>
          }))
        
        }
      </div>
    </div>
  )
}

export default App
