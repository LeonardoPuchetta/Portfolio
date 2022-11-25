import React ,{useState,useEffect} from 'react';

import ProjectsItemsListContainer from '../components/ProjectsItemsListContainer';
import {projects} from './../utils/projects'
//page
export default function Projects(props) {

  useEffect(() => {
   
  }, [])
  

  return (
    <><ProjectsItemsListContainer projects={projects}/></>
  )
}
