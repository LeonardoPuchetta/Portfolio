import React, { useEffect} from 'react';

import alienImage from './../assets/icons/alien.svg';
import './../Styles/AlienAnimatedIcon.scss';


export default function AlienAnimatedIcon(props) {

    const {alienId} = props;

    const alienClassSizeArray = ['alien-big','alien-medium','alien-small'];
    const originsArray = [10,30,50,70,90];

    useEffect(() => {

    sortedClass();
    
    }, []);

     const sortedClass = () => {

        //sorteo de clases 
        const random_size= alienClassSizeArray[Math.floor(Math.random()*alienClassSizeArray.length)];
        const random_origin = originsArray[Math.floor( Math.random()*originsArray.length)];
  
        //asignacion de clases 
        let x = document.getElementById(alienId);
        x.removeAttribute('class')
        
        objectOriginSizeClassAlien[random_size][random_origin](x);
        
        //hacemos el objeto visible
        changeVisibilityDelays[random_size](x);


     };

     const objectOriginSizeClassAlien = {
        "alien-big" : {
            10 : (icon) => {icon.classList.add('alien-big-10','alien-big')},
            30 : (icon) => {icon.classList.add('alien-big-30','alien-big')},
            50 : (icon) => {icon.classList.add('alien-big-50','alien-big')},
            70 : (icon) => {icon.classList.add('alien-big-70','alien-big')},
            90 : (icon) => {icon.classList.add('alien-big-90','alien-big')},
        },
        "alien-medium" : {
            10 : (icon) => {icon.classList.add('alien-medium-10','alien-medium')},
            30 : (icon) => {icon.classList.add('alien-medium-30','alien-medium')},
            50 : (icon) => {icon.classList.add('alien-medium-50','alien-medium')},
            70 : (icon) => {icon.classList.add('alien-medium-70','alien-medium')},
            90 : (icon) => {icon.classList.add('alien-medium-90','alien-medium')},
        },
        "alien-small" : {
                10 : (icon) => {icon.classList.add('alien-small-10','alien-small')},
                30 : (icon) => {icon.classList.add('alien-small-30','alien-small')},
                50 : (icon) => {icon.classList.add('alien-small-50','alien-small')},
                70 : (icon) => {icon.classList.add('alien-small-70','alien-small')},
                90 : (icon) => {icon.classList.add('alien-small-90','alien-small')},
                },
    
       }
    
       const changeVisibilityDelays = {
        "alien-big": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 500),
        "alien-medium": (icon) => setTimeout(() => {;icon.style.display="block";icon.style.opacity='0'},700),
        "alien-small": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 1200),
       }
      
      return (
        <div id={alienId}>
            <img src={alienImage} alt=''/>
        </div>
      )
}
