import React ,{useState,useEffect} from 'react';
import ProjectsItemsListContainer from '../components/ProjectsItemsListContainer';
import Loading from '../components/Loading';
import { getProyectsApi } from '../api/projects';
import AOS from 'aos';

//page
export default function Projects() {

  const [projectList,setProjectList] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {

   getProyectsApi().then(response => {
      setProjectList(response.projects);
      setIsLoading(false);
      //para que AOS funcione correctamente con varios divs animados
      setTimeout((() => {
        window.addEventListener('scroll', AOS.refresh)
      }),2000)
    });
  }, [])

if (isLoading) {
  return <Loading/>
} else 
  return (
    <ProjectsItemsListContainer projects={projectList}/>
  )
}
