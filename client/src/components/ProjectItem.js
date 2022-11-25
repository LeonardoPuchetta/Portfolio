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
            <div className='project-item-skills'>
                <ul className='skills-ul'>
                {skills.map((skill,index)=>{
                    return (<li className='skill-li'>{skill}</li>)
                })}
                </ul>
            </div>
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

    // let containerDivs = document.getElementsByClassName('project-item-container');
    let infoDivs = document.getElementsByClassName('project-item-info');
    let titleDivs = document.getElementsByClassName('project-item-title');
    let skillDivs = document.getElementsByClassName('project-item-skills');
    let imgDivs = document.getElementsByClassName('project-item-image');

    if(isPar(order)){
        infoDivs[order].setAttribute('style','grid-column:6/13');
        titleDivs[order].setAttribute('style','text-align: right');
        skillDivs[order].setAttribute('style','text-align: right');
        imgDivs[order].setAttribute('style','grid-column:1/7')
    }

}
 