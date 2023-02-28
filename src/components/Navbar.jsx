import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Navbar(){
    const [Mobile, setMobile] = useState(false)
    const [activeNav, setActiveNav] = useState('#');
	return (
        <>
        <nav  className='navbar'>
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <li><a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>Topity top</a></li>
            <li><a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
            <li><a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>

          </ul>
          {/* 
          whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
          */}
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </nav>
      </>
	);
}


