import React ,{useState,useEffect} from 'react';
import ProjectsItemsListContainer from '../components/ProjectsItemsListContainer';
import { getProyectsApi } from '../api/projects';
import AOS from 'aos';

//page
export default function Projects() {

  const [projectList,setProjectList] = useState([]);

  useEffect(() => {

   getProyectsApi().then(response => {
      setProjectList(response.projects);
      //para que AOS funcione correctamente con varios divs animados
      setTimeout((() => {
        window.addEventListener('scroll', AOS.refresh)
      }),2000)
    });
  }, [])

  return (
    <ProjectsItemsListContainer projects={projectList}/>
  )
}
