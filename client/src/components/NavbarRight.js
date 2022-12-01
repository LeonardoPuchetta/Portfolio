import React , {useEffect}from 'react';
import './../Styles/NavbarRight.scss';

import { Link } from 'react-router-dom';

import LinkedinIcon from './../assets/icons/linkedin.svg';
import GithubIcon from './../assets/icons/github.svg';
// 

export default function NavbarRight() {
    
    return (
        <div className='navbar-right'>
              <ul className='navbar-right-icon-list-ul'>
                     
                        <li className='navbar-right-icon-list-li'>
                            <a href='https://www.linkedin.com/in/leonardo-puchetta' target='_blank' rel='noopener noreferrer'>
                                <img src={LinkedinIcon} className='navbar-right-icon-link' alt='linkedin'/>
                            </a>
                        </li>
                        <li className='navbar-right-icon-list-li'>
                            <a href='https://github.com/LeonardoPuchetta' target='_blank' rel='noopener noreferrer'>
                                <img src={GithubIcon} className='navbar-right-icon-link' alt='github'/>
                            </a>
                        </li>
                        {/* */}
                </ul>
        </div>
      )
}
