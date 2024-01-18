import React, { useState } from 'react'
import getImageUrl from '../../utils'
import { Link } from 'react-scroll';
import './NavBar.css'
 
const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        <img src={getImageUrl('logo3.png')} alt="Logo" className="logo" />

        <div className="navLinks">

                <img src={menuOpen ? getImageUrl('closeIcon.png') : getImageUrl('menuIcon.png')} alt="menu Icon" 
                className={"menuIcon"} 
                onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={menuOpen ? 'openUl' : 'closeUl'}>
                
                <li><Link to="home" smooth={true} duration={500} className='navLink' onClick={() => setMenuOpen(false)}>Home</Link> </li>
                <li><Link to="service" smooth={true} duration={500} className='navLink' onClick={() => setMenuOpen(false)}>Service</Link> </li>
                <li><Link to="about" smooth={true} duration={500} className='navLink' onClick={() => setMenuOpen(false)}>About</Link> </li>
                <li><Link to="testimonials" smooth={true} duration={500} className='navLink' onClick={() => setMenuOpen(false)}>Testimonials</Link> </li>
                <li><Link to="contact" smooth={true} duration={500} className='navLink' onClick={() => setMenuOpen(false)}>Contact</Link> </li>
            </ul>
        </div>
        
    </nav>
  )
}

export default NavBar