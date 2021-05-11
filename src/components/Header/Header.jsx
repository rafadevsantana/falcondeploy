import React, { useEffect } from 'react';
import NavBarMenu from '../navBar/NavBarMenu'
import falcon from '../../assets/LOGO.png';
import './header.css';

function Header() {
  useEffect(() => {
    document.title = "FalconStetic"
 }, []);
  return(
    <div className='d-flex p-2 bd-highlight justify-content-between'>
      <NavBarMenu />
      <img className='falcon' src={falcon} alt="logo falcon"/>
    </div>
  )
}

export default Header;