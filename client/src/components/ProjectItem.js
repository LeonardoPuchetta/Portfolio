import React,{useEffect} from 'react';
import './../Styles/ProjectItem.scss'

export default function ProjectItem(props) {

    const {project,order} = props;
    const {title,description,image,skills} = project;

    useEffect(() => {
        alternateItem(order);
    }, [])
    
  return (
    <div className='project-item-container'>
        <div className='project-item-info'>
            <div className='project-item-title'>{title}</div>
            <div className='project-item-description'><p>{description}</p></div>
            <div className='project-item-skills'>{skills}</div>
        </div>
        <div className='project-item-image'>
            <img src={image} alt='project'></img>
        </div> 
    </div>

  )
}

const isPar = (num) => {
    return (num%2)
}

const alternateItem = (order) =>{
    //se podria hacer generando ids con order para cada elemento 
    //en vez de seleccionarlos todos y elegir de un array 

    let containerDivs = document.getElementsByClassName('project-item-container');
    let titleDivs = document.getElementsByClassName('project-item-title');
    let skillDivs = document.getElementsByClassName('project-item-skills');
    let imgElements = document.getElementsByTagName('img');

    if(isPar(order)){
        containerDivs[order].setAttribute('style','flex-direction:row-reverse');
        titleDivs[order].setAttribute('style','align-self: flex-end');
        skillDivs[order].setAttribute('style','align-self: flex-end');
        imgElements[order].setAttribute('style','float:left')
    }

}
 