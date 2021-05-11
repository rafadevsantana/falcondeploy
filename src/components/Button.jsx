import React from 'react'
import './components.css';

function ButtonGeneric({ children }) {
  return(
    <div className='d-flex justify-content-center color'>
    <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5519989734253'>
    <div className='button-generic'>
      { children }
    </div>
    </a>
    </div>
  )
}

export default ButtonGeneric;