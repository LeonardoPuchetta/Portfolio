import React from 'react';
import './../Styles/LayoutHome.scss'


export default function LayoutHome(props) {

    const {children} = props;

  return (
    <div className='container'>
        {children}
    </div>
  )
}
