import {useState, useRef} from 'react';
import logo from '../public/vite.svg'

const Navbar =()=>{
    const[toggle, setToggle]=useState(false);
    return (
        <nav>
            <div className='nav-container'>
                <div className='header'>
                    <img src={logo} alt='logo'/>
                    <button className='nav-toggle' onClick={()=>setToggle(!toggle)}>=</button>
                </div>
                <div className={`${toggle?'show-container':'links-container'}`}>
                    <ul className='links'>
                        <li>
                            <a href='#'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='social-icons show-container'>
                    <ul className='links'>
                        <li>
                            <a href='#'>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};  

export default Navbar;