import React from 'react'
import { FaTimes } from 'react-icons/fa';
import logo from './assets/react.svg';
import { useGlobalContext } from './context';
import {links, social} from './data.js'

const Sidebar = () => {

   const {isSidebarOpen, toggleSidebar} =useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ?'sidebar show-sidebar':'sidebar'}`}>
        <div className='sidebar-header'> 
            <img src={logo} alt='logo'/>
            <button className='close-btn' onClick={toggleSidebar}>
                <FaTimes />
            </button>
        </div>
        <ul className='links'>
            {
                links.map((link)=>{
                    const {id, text, icon, url}=link;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}{text}</a>
                        </li>
                    )
                })
            }
        </ul>
    </aside>
  )
}

export default Sidebar