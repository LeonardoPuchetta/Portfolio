import React , {useEffect}from 'react';
import './../Styles/NavbarRight.scss';
import LinkedinIcon from './../assets/icons/linkedin.svg';
import GithubIcon from './../assets/icons/github.svg';
import CvIcon from './../assets/icons/cv.svg';

export default function NavbarRight() {
    return (
        <div className='navbar-right'>
              <ul className='navbar-right-icon-list-ul'>
                     
                        <li className='navbar-right-icon-list-li'>
                            <a href=''>
                                <img src={LinkedinIcon} className='navbar-right-icon-link'/>
                            </a>
                        </li>
                        <li className='navbar-right-icon-list-li'>
                            <a href=''>
                                <img src={GithubIcon} className='navbar-right-icon-link'/>
                            </a>
                        </li>
                        <li className='navbar-right-icon-list-li'>
                            <a href=''>
                                <img src={CvIcon} className='navbar-right-icon-link'/>
                            </a>
                        </li>
                </ul>
        </div>
      )
}
