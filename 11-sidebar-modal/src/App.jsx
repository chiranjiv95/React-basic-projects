import { useState } from 'react'
import './App.css';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';

function App() {

  return (
    <div className="App">
      <Home/>
      <Modal/>
      <Sidebar/>
    </div>
  )
}

export default App
