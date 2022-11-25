import React from 'react';
import './../Styles/LayoutProjects.scss'

export default function LayoutProjects(props) {

    const {children} = props;

  return (
    <div className='container-projects'>
        {children}
    </div>
  )
}