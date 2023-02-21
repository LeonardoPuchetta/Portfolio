import React ,{useEffect,useState}from 'react';
import './../Styles/About.scss';
import Loading from '../components/Loading';
import { getImageApi } from '../api/fileProject';
import readFile from '../utils/readFile';

export default function About() {

  //name de la imagen en el servidor 
  const image = 'photo.jpg';

  //para almacenar imagen del servidor 
  const [dataUrlImage,setDataUrlImage] = useState(null);

  const [isLoading,setIsLoading] = useState(true);


  useEffect(() => {
    getImageApi(image).then(response =>{
        readFile(response,setDataUrlImage );
        setIsLoading(false)
    }).catch(error =>{
      console.log(error)
  })

   
  }, []);

  if (isLoading) {
    return <Loading/>
  } else  return (
    <div className='about-container' data-aos="fade-up" data-aos-duration="3000">
        <div className='about-image'>
          <img src={dataUrlImage} alt='img'/>
        </div>
        <div className='about-description'>
            <h1 className='about-description-title'>Sobre mi</h1>
            <p className='about-description-content'>
                Hola , gracias por visitar mi portfolio ! Mi nombre es Leonardo Puchetta soy un estudiante de ingeniería eléctrica y profesorado en electrónica apasionado por la programación y la tecnología.
            </p>
            <p className='about-description-content'>
            Durante mi formación en ingeniería eléctrica he adquirido habilidades sólidas en matemáticas, física , electrónica, fundamentos de programacion orientada a objetos y resolucion de problemas lógicos. 
            También he desarrollado habilidades importantes como la capacidad de resolver problemas complejos, trabajar en equipo y comunicarme de manera efectiva. 
            </p>
            <p className='about-description-content'>
              En la actualidad estoy enfocado en el aprendizaje de React y NodeJS y siempre abierto a aprender nuevas tecnologías y ampliar mis conocimientos.
              
            </p>

        </div>
    </div>
  )
}
