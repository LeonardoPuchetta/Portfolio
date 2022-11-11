import React from 'react';
import './../Styles/LayoutBasic.scss'

export default function LayoutBasic(props) {

    const {children} = props;

  return (
    <div className='container'>
        {children}
    </div>
  )
}
