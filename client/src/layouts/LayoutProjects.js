import React from 'react';
import './../Styles/LayoutProjects.scss'

export default function LayoutProjects(props) {

    const {children} = props;

  return (
    <div className='container-home'>
        {children}
    </div>
  )
}