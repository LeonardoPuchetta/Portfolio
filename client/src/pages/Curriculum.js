import React,{useState,useEffect} from 'react';

import './../Styles/Curriculum.scss';

export default function Curriculum() {


  return (
<div className='curriculum-container'>
  <object
    data={require('./../docs/leonardopuchettaCV.pdf')} 
    type='application/pdf'
   
    width='100%' 
    height='100%'      >
     
  </object>
</div>
  )
}


