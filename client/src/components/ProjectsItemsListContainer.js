import React from 'react';

import ProjectItem from './ProjectItem';
import './../Styles/ProjectsItemsListContainer.scss'


export default function ProjectsItemsListContainer(props) {

  const {projects} = props;

  return (
    <div className='projects-items-list-container'>
      {projects.map((project,index) =>{
        const order = index ; 
        return (<ProjectItem project={project} key={index} order={order}/>)
      })}
    </div>
   
  )
}
