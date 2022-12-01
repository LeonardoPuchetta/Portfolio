import React ,{useState,useEffect}from 'react';

import {Link} from 'react-router-dom'
import RocketAnimatedIcon from '../components/RocketAnimatedIcon';
import AstroAnimatedIcon from '../components/AstroAnimatedIcon';
import AlienAnimatedIcon from '../components/AlienAnimatedIcon';

import ProjectsIcon from './../assets/icons/project.svg';
import FoxColorIcon from './../assets/icons/fox-1.svg';


import './../Styles/Home.scss'

export default function Home() {

  const [iconsIdsArray, setIconsIdsArray] = useState(['rocket','astro','alien','rocket','astro']);

  const iconRender = {
    'rocket' : (id) => {return (<RocketAnimatedIcon rocketId={id} key={id}/>) },
    'astro' : (id) => {return (<AstroAnimatedIcon astroId={id} key={id}/>) },
    'alien' : (id) => {return (<AlienAnimatedIcon alienId={id} key={id}/>) },
  }

  const styleRightTooltip = {
    left:'100%'
  }
  const styleLeftTooltip = {
    right:'100%'
  }

 

  return (
    <>
    <div className='home-title'>
      <h1>Portfolio - Leonardo Puchetta</h1>
    </div>

    {iconsIdsArray.map((icon,index) => {
      return(
       iconRender[icon](index)
      )
    })}
    <div className='icons'>
        <div className='icon-image-container'>
            <Link to='/projects'>
              <img src={ProjectsIcon} alt='proyectos' className='icon-image'/>
            </Link>
            <span className='span-tooltip' style={styleLeftTooltip}>Proyectos</span>
        </div>
        <div className='icon-image-container'>
            <Link to='/about'>
              <img src={FoxColorIcon} alt='acerca de mi' className='icon-image'/>
            </Link>  
            <span className='span-tooltip' style={styleRightTooltip}>Sobre mi</span>    
        </div>
      </div>

    </>
  )
}
