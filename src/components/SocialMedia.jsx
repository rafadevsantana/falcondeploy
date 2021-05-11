import React from 'react'
import * as AiIcopns from 'react-icons/ai'
import './components.css';

function SocialMedia() {
  return(
    <div className='d-flex justify-content-center'>
     <a className='social-media' href='https://www.instagram.com/p/CNINEcRhbi6/?igshid=1fsq87cxhi91x'>
      <AiIcopns.AiFillInstagram />
     </a>
     <a className='social-media' href='http://api.whatsapp.com/send?1=pt_BR&phone=5519989734253'>
      <AiIcopns.AiOutlineWhatsApp />
     </a>
     <a className='social-media' href='https://www.facebook.com/falconsteticcleaner/'>
      <AiIcopns.AiOutlineFacebook />
     </a>
     
    </div>
  )
}

export default SocialMedia;