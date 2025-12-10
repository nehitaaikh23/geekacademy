import React, {useEffect, useState} from 'react'
import {Link, Element } from 'react-scroll';
import './Navbar.css'
import Logo from '../../assets/school-512.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
        <div className='geek-logo'>
            <img src={Logo} alt="hat" className='nav-logo'/>
            <h2>THE GEEK ACADEMY</h2>
        </div>
        
        <ul className={mobileMenu? '' : 'hide-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} className='nav-element'>HOME</Link></li>
            <li><Link to='programs' smooth={true} offset={-250} duration={500} className='nav-element'>GEEK PROGRAMS</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} className='nav-element'>MEET THE LORD</Link></li>
            <li><Link to='campus' smooth={true} offset={-250} duration={500} className='nav-element'>GEEK ARENA</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-250} duration={500} className='nav-element'>SAY GEEK</Link></li>
            <li><Link to='contact' smooth={true} offset={-250} duration={500}><button className='white-btn'>HIT US UP</button></Link></li>
        </ul>
        <img src={menu_icon} alt="" className='light-menu-icon'onClick={toggleMobileMenu}/>
    </nav>
  )
}

export default Navbar