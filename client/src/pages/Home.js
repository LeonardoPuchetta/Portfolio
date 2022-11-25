import React ,{useState,useEffect}from 'react';

import {Link} from 'react-router-dom'
import RocketAnimatedIcon from '../components/RocketAnimatedIcon';
import AstroAnimatedIcon from '../components/AstroAnimatedIcon';
import AlienAnimatedIcon from '../components/AlienAnimatedIcon';


import './../Styles/Home.scss'

export default function Home() {

  const [iconsIdsArray, setIconsIdsArray] = useState(['rocket','astro','alien','rocket','astro','alien','rocket','astro','alien',
  'rocket','astro']);

  const iconRender = {
    'rocket' : (id) => {return (<RocketAnimatedIcon rocketId={id} key={id}/>) },
    'astro' : (id) => {return (<AstroAnimatedIcon astroId={id} key={id}/>) },
    'alien' : (id) => {return (<AlienAnimatedIcon alienId={id} key={id}/>) },
  }

 

  return (
    <>
    <div>
      <h1>Leonardo Puchetta</h1>
    </div>

    {iconsIdsArray.map((icon,index) => {
      return(
       iconRender[icon](index)
      )
    })}

    <div>
      <Link to='/projects'>to projects</Link>
    </div>


 
  
    </>
  )
}
