import React ,{useEffect,useState}from 'react';
import './../Styles/About.scss';

import { getImageApi } from '../api/fileProject';
import readFile from '../utils/readFile';

export default function About() {

  const image = 'photo.jpg';

  //para almacenar imagen del servidor 
  const [dataUrlImage,setDataUrlImage] = useState(null);


  useEffect(() => {

    getImageApi(image).then(response =>{
        readFile(response,setDataUrlImage )
    }).catch(error =>{
      console.log(error)
  })

   
  }, [])
  




  return (
    <div className='about-container' data-aos="fade-up" data-aos-duration="3000">

      <div className='about-image'>
        <img src={dataUrlImage}/>
        
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
