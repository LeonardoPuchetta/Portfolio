import React from 'react';
import './../Styles/Loading.scss';

import FoxColorIcon from './../assets/icons/fox-1.svg'

export default function Loading() {
  return (
    <div className='loading'>
        <div className='loading-image'> 
            <img src={FoxColorIcon} alt='loadImage'/>
         </div>
        <div className='loading-text'>
              Un poco de paciencia por favor ...
        </div>
    </div>
  )
}
