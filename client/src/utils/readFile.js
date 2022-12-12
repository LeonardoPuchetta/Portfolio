// import React , {useEffect,useState} from 'react';

export default function readFile(fileName,setFileDataURL){

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
        setFileDataURL(event.target.result)
        
      });
    // reader.readAsDataURL(fileName);

    return (reader.readAsDataURL(fileName))

}