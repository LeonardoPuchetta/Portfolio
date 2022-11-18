import React ,{useState,useEffect}from 'react';
import { BasicButton } from '../components/BasicButton';
import {Link} from 'react-router-dom';

import RocketAnimatedIcon from '../components/RocketAnimatedIcon';
import AstroAnimatedIcon from '../components/AstroAnimatedIcon';
import AlienAnimatedIcon from '../components/AlienAnimatedIcon';

import './../Styles/Home.scss'

export default function Home() {


  const [iconsIdsArray, setIconsIdsArray] = useState(['rocket','astro','alien','rocket-1','astro-1','alien-1']);

  const iconRender = {
    'rocket' : () => {return (<RocketAnimatedIcon rocketId={'rocket'} />) },
    'astro' : () => {return (<AstroAnimatedIcon astroId={'astro'} />) },
    'alien' : () => {return (<AlienAnimatedIcon alienId={'alien'}/>) },
    'rocket-1' : () => {return (<RocketAnimatedIcon rocketId={'rocket-1'} />) },
    'astro-1' : () => {return (<AstroAnimatedIcon astroId={'astro-1'} />) },
    'alien-1' : () => {return (<AlienAnimatedIcon alienId={'alien-1'}/>) },
  }

 

  return (
    <>
    <div>
      <h1>Leonardo Puchetta</h1>
    </div>
 
    {iconsIdsArray.map((iconId) => {
      return(
       iconRender[iconId]()
      )
    })}
    
    </>
  )
}
