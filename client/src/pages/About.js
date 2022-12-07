import React from 'react';
import {Link} from 'react-router-dom'

import './../Styles/About.scss';

import CvIcon from './../assets/icons/cv.svg';


export default function About() {
  return (
    <div className='about'>

      <div className='about-image'>
        <img src='https://www.blogdelfotografo.com/wp-content/uploads/2020/05/retrato-nin%CC%83a.jpg'/>
        <Link to='/curriculum'><img src={CvIcon} className='icon-download' alt='curriculum'/></Link>
      </div>
      <div className='about-description'>
      <h1>Sobre mi</h1>
           <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with 
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            {/* <img src={CvIcon} className='icon-download' alt='curriculum'/> */}
      </div>
   
    </div>
  )
}
