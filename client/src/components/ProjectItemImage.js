import React,{useEffect}from 'react';
import './../Styles/ProjectItemImage.scss';

import GithubIcon from './../assets/icons/github.svg';
import ExternalIcon from './../assets/icons/external-link.svg'

export default function ProjectItemImage(props) {

    const {url,order} = props ; 

    useEffect(() => {
        alternateItem(order);
    }, [])

  return (
    <div className='item-image'>
        <img src={url} alt='project' className='image'></img>
    </div> 
  )
}


const isPar = (num) => {
    return (num%2)
}

const alternateItem = (order) =>{
    let imgDivs = document.getElementsByClassName('item-image');
    if(isPar(order)){
        imgDivs[order].setAttribute('style','grid-column:1/7')
    } else {

    }

}
 
