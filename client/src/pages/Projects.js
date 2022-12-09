import React ,{useState,useEffect} from 'react';

import ProjectsItemsListContainer from '../components/ProjectsItemsListContainer';
import {projects} from './../utils/projects';
import { getProyectsApi } from '../api/projects';


//page
export default function Projects(props) {

  const [projectList,setProjectList] = useState([]);

  useEffect(() => {
   getProyectsApi().then(response => {
      setProjectList(response.projects);
    });
    
  }, [])
  
  return (
    <ProjectsItemsListContainer projects={projects}/>
  )
}
