import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, GYSS</h5>
        <h1>Antares Nathan Andrew Biya</h1>
        <h5 className='text-light'>UI/UX</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ ME } alt='Antares Biya' />
        </div>

        <a href='#contact' className='scroll__down'>Scroller vers le bas</a>

      </div>
    </header>
  )
}

export default Header