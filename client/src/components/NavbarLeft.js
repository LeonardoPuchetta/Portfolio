import React , {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import './../Styles/NavbarLeft.scss';
import {Link} from 'react-router-dom';
import HomeIcon from './../assets/icons/home.svg';
import FoxIcon from './../assets/icons/fox-2.svg';
import ProjectsIcon from './../assets/icons/projects-2.svg';


export default function NavbarLeft() {

  const location = useLocation();
  
  return (
    <div className='navbar-left' data-aos="zoom-out-right">
        <ul className='navbar-left-icon-list-ul' >
                    <li className='navbar-left-icon-list-li'>
                            <Link to='/'><img src={HomeIcon} className='navbar-left-icon-link' alt='home'/></Link>
                    </li>
                    {location.pathname === '/about' ? 
                            <li className='navbar-left-icon-list-li'>
                                  <Link to='/projects'><img src={ProjectsIcon} className='navbar-left-icon-link' alt='about'/></Link>
                            </li> :
                            <li className='navbar-left-icon-list-li'>
                                  <Link to='/about'><img src={FoxIcon} className='navbar-left-icon-link' alt='about'/></Link>
                            </li>
                    }
                
                  
        </ul>
    </div>
  )
}
