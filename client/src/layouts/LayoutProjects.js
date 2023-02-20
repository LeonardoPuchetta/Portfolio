import React from 'react';
import './../Styles/LayoutProjects.scss';
import NavbarLeft from '../components/NavbarLeft';
import NavbarRight from '../components/NavbarRight';

export default function LayoutProjects(props) {

    const {children} = props;

  return (
    <>
    
    <div className='container-projects'>
      <NavbarLeft/>
          {children}
      <NavbarRight/>
    </div>
    </>
  )
}