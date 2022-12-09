import React from 'react';
import './../Styles/About.scss';

export default function About() {
  return (
    <div className='about-container' data-aos="fade-up" data-aos-duration="3000">

      <div className='about-image'>
        <img src='https://www.blogdelfotografo.com/wp-content/uploads/2020/05/retrato-nin%CC%83a.jpg'/>
        
      </div>

      <div className='about-description'>
          <h1 className='about-description-title'>Sobre mi</h1>
          <p className='about-description-content'>
           Estudiante de Profesorado de Informática en INET en busqueda de mi primer experiencia laboral en el mundo
            del desarrollo
          </p>
      </div>
   
    </div>
  )
}
