import React, { useEffect ,useState} from 'react';
import './../Styles/AstroAnimatedIcon.scss';

import astroImage from './../assets/icons/astronaut.svg'


export default function AstroAnimatedIcon(props) {

    const {astroId} = props;
    

    // const [newAstro,setNewAstro] = useState(false);

    const astroClassSizeArray = ['astro-big','astro-medium','astro-small'];
    const originsArray = [10,30,50,70,90];

    useEffect(() => {
      //sorteo de clases 
      const random_size= astroClassSizeArray[Math.floor(Math.random()*astroClassSizeArray.length)];
      const random_origin = originsArray[Math.floor( Math.random()*originsArray.length)];
    
      //asignacion de clases 
      let x = document.getElementById(astroId);
      
      x.removeAttribute('class')
      
      objectOriginSizeClassAstro[random_size][random_origin](x);
    
      //hacemos el objeto visible
   
      x.style.display="block";
      x.style.opacity='0'
    
    }, []);

 
     const objectOriginSizeClassAstro = {
        "astro-big" : {
            10 : (icon) => {icon.classList.add('astro-big-10','astro-big')},
            30 : (icon) => {icon.classList.add('astro-big-30','astro-big')},
            50 : (icon) => {icon.classList.add('astro-big-50','astro-big')},
            70 : (icon) => {icon.classList.add('astro-big-70','astro-big')},
            90 : (icon) => {icon.classList.add('astro-big-90','astro-big')},
        },
        "astro-medium" : {
            10 : (icon) => {icon.classList.add('astro-medium-10','astro-medium')},
            30 : (icon) => {icon.classList.add('astro-medium-30','astro-medium')},
            50 : (icon) => {icon.classList.add('astro-medium-50','astro-medium')},
            70 : (icon) => {icon.classList.add('astro-medium-70','astro-medium')},
            90 : (icon) => {icon.classList.add('astro-medium-90','astro-medium')},
        },
        "astro-small" : {
                10 : (icon) => {icon.classList.add('astro-small-10','astro-small')},
                30 : (icon) => {icon.classList.add('astro-small-30','astro-small')},
                50 : (icon) => {icon.classList.add('astro-small-50','astro-small')},
                70 : (icon) => {icon.classList.add('astro-small-70','astro-small')},
                90 : (icon) => {icon.classList.add('astro-small-90','astro-small')},
                },
    
       }
    
    //    const changeVisibilityDelays = {
    //     "astro-big": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 500),
    //     "astro-medium": (icon) => setTimeout(() => {;icon.style.display="block";icon.style.opacity='0'},700),
    //     "astro-small": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 1200),
    //    }
    

    
      return (
        <div id={astroId}>
            <img src={astroImage} alt=''/>
        </div>
      )
    }
    

