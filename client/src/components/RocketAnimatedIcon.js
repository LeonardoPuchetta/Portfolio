import React, { useEffect } from 'react';

import rocketImage from './../assets/icons/rocket.svg';
import './../Styles/RocketAnimatedIcon.scss';

export default function RocketAnimatedIcon(props) {

const {rocketId} = props;

const rocketClassSizeArray = ['rocket-big','rocket-medium','rocket-small'];
const originsArray = [10,30,50,70,90];

useEffect(() => {
  //sorteo de clases 
  const random_size= rocketClassSizeArray[Math.floor(Math.random()*rocketClassSizeArray.length)];
  const random_origin = originsArray[Math.floor( Math.random()*originsArray.length)];

  //asignacion de clases 
  let x = document.getElementById(rocketId);
  x.removeAttribute('class')

  objectOriginSizeClassRocket[random_size][random_origin](x);

  //hacemos el objeto visible
  changeVisibilityDelays[random_size](x);
  

}, [])


 const {rocketClassSize,rocketClassOrigin} = props;

 const objectOriginSizeClassRocket = {
    "rocket-big" : {
        10 : (icon) => {icon.classList.add('rocket-big-10','rocket-big')},
        30 : (icon) => {icon.classList.add('rocket-big-30','rocket-big')},
        50 : (icon) => {icon.classList.add('rocket-big-50','rocket-big')},
        70 : (icon) => {icon.classList.add('rocket-big-70','rocket-big')},
        90 : (icon) => {icon.classList.add('rocket-big-90','rocket-big')},
    },
    "rocket-medium" : {
        10 : (icon) => {icon.classList.add('rocket-medium-10','rocket-medium')},
        30 : (icon) => {icon.classList.add('rocket-medium-30','rocket-medium')},
        50 : (icon) => {icon.classList.add('rocket-medium-50','rocket-medium')},
        70 : (icon) => {icon.classList.add('rocket-medium-70','rocket-medium')},
        90 : (icon) => {icon.classList.add('rocket-medium-90','rocket-medium')},
    },
    "rocket-small" : {
            10 : (icon) => {icon.classList.add('rocket-small-10','rocket-small')},
            30 : (icon) => {icon.classList.add('rocket-small-30','rocket-small')},
            50 : (icon) => {icon.classList.add('rocket-small-50','rocket-small')},
            70 : (icon) => {icon.classList.add('rocket-small-70','rocket-small')},
            90 : (icon) => {icon.classList.add('rocket-small-90','rocket-small')},
            },

   }

   const changeVisibilityDelays = {
    "rocket-big": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 1000),
    "rocket-medium": (icon) => setTimeout(() => {;icon.style.display="block";icon.style.opacity='0'},1200),
    "rocket-small": (icon) => setTimeout(() => {icon.style.display="block";icon.style.opacity='0'}, 1400),
   }

 //para animar necesito clases de tamaño y de origen 

  return (
    <div id={rocketId}>
        <img src={rocketImage} alt=''/>
    </div>
  )
}
