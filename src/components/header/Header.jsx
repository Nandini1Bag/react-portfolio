import React from 'react'
import CTA from './CTA'
import ME from '../../assets/training.jpg'
import HeaderSocials from './HeaderSocials'

import './header.css'

const Header = () => {
  return (
    
  <header>
    <div className='container header__container'>
    <h5>Hello I'm</h5>
    <h1>Nandini Bag </h1>
    <h5 className='text-light'>Frontend Developer</h5> 
    <CTA/>
    <HeaderSocials/>
    <div className='me'>
    <img src={ME} alt='me'/> 
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>
   </div>
   </header>
  )
}

export default Header