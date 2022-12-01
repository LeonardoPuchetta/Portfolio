import React , {useEffect}from 'react';
import './../Styles/NavbarLeft.scss';
import {Link} from 'react-router-dom';
import HomeIcon from './../assets/icons/home.svg';
import FoxIcon from './../assets/icons/fox-2.svg'

export default function NavbarLeft() {
    

  return (
    <div className='navbar-left'>
        <ul className='navbar-left-icon-list-ul'>
                    <li className='navbar-left-icon-list-li'>
                            <Link to='/'><img src={HomeIcon} className='navbar-left-icon-link' alt='home'/></Link>
                    </li>
                    <li className='navbar-left-icon-list-li'>
                            <Link to='/about'><img src={FoxIcon} className='navbar-left-icon-link' alt='about'/></Link>
                    </li>
        </ul>
    </div>
  )
}
