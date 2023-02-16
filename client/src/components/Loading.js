import React from 'react';
import './../Styles/Loading.scss';

import FoxColorIcon from './../assets/icons/fox-1.svg'

export default function Loading() {
  return (
    <div className='loading'>
        <div className='loader'> 
            <img src={FoxColorIcon} alt='loadImage'/>
         </div>
    </div>
  )
}
