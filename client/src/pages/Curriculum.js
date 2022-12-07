import React,{useState,useEffect} from 'react';

import './../Styles/Curriculum.scss';





export default function Curriculum() {

  return (
<>
<embed src={'./../assets/docs/leonardo_puchettaCV.pdf'} type="application/pdf" width="100%" height="650px"></embed>
</>
    // <div className='curriculum-container'>
    //   <div className='name-image'>name-image</div>
    //   <div className='contact'>contact</div>
    //   <div className='education'>education</div>
    //   <div className='experience'>experirence</div>
    //   <div className='references'>references</div>
    // </div>
  )
}
