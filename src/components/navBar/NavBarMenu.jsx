import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcopns from 'react-icons/ai'
import './NavBar.css';
import { IconContext } from 'react-icons';

function NavBarMenu() {
  const [sidebar,setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar)
  return(
    <div className='d-flex flex-column bd-highlight mb-3'>
    <IconContext.Provider value={{color: '#09CDF8'}}>
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars className='colorNav' onClick={ showSideBar } />
      </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul onClick={ showSideBar } className='nav-menu-item'>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bars'>
            <AiIcopns.AiOutlineClose  />
          </Link>
        </li>
        <li className='nav-text'>
          <a href='#about'>
            <scrol>
              <span>Sobre a empresa</span>
            </scrol>
          </a>
        </li>
        <li className='nav-text'>
          <a href='#products' >
            <span>Produtos utilizados</span>
          </a>
        </li>
        <li className='nav-text'>
          <a href='#galeries'>
            <span>Serviços realizados</span>
          </a>
        </li>
        <li className='nav-text'>
          <a href='#depoimentos'>
            <span>Depoimentos dos clientes</span>
          </a>
        </li>
        <li className='nav-text'>
          <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5519989734253">
            <span>Contatos</span>
          <AiIcopns.AiOutlineWhatsApp className='zap' />
          </a>
        </li>
      </ul>
    </nav>
    </IconContext.Provider>
    </div>
  )
}

export default NavBarMenu;