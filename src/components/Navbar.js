import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FaBars ,FaTimes} from 'react-icons/fa';


const Navbar = () => {
    const [showMediaIcons,setshowMediaIcons]=useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <li>
                    <Link to='/'><img src={logo} alt='logo'></img></Link>
                    </li>
                </div>
                <div className='authentication'>
                    <ul>
                        <li>
                            <Link to='/'>About</Link>
                        </li>

                        <li>
                            <Link to='/login'>Login/Signup</Link>
                        </li>
                    </ul>
                </div>

                <div className='mobile'>
                   <a href='#' onClick="showMediaIcons(!showMediaIcons)"><FaBars className='ham'/>
                    <FaTimes className='cross'/>
                    </a> 
                </div>
            </nav>
        </>
    )
}

export default Navbar