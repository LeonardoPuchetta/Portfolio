import React , {useEffect}from 'react';
import './../Styles/NavbarLeft.scss';
import {Link} from 'react-router-dom';

import BackIcon from './../assets/icons/back.svg';
import AboutMeIcon from './../assets/icons/about-me.svg';
import HomeIcon from './../assets/icons/home.svg';



export default function NavbarLeft() {
    

  return (
    <div className='navbar-left'>
          <ul className='navbar-left-icon-list-ul'>
                    <li className='navbar-left-icon-list-li'>
                            <Link to='/'><img src={HomeIcon} className='navbar-left-icon-link'/></Link>
                    </li>
                    <li className='navbar-left-icon-list-li'>
                            <Link to='/about'><img src={AboutMeIcon} className='navbar-left-icon-link'/></Link>
                    </li>
                
            </ul>
    </div>
  )
}
