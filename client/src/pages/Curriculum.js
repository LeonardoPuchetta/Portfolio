import React,{useState,useEffect} from 'react';
import './../Styles/Curriculum.scss';
import { getFileApi } from '../api/fileProject';
import readFile from '../utils/readFile';

export default function Curriculum() {

  //nombre del cv en el servidor 
  const cv = 'leonardopuchettaCV.pdf'

  const [dataUrlFile,setDataUrlFile] = useState(null);

      useEffect(() => {
          getFileApi(cv).then(response =>{
              readFile(response,setDataUrlFile);              
          }).catch(error => {
            console.log(error)
          })
          
      }, [])

  return (
      <div className='curriculum-container'>
        <object
          data={dataUrlFile}
          type='application/pdf'
          width='100%' 
          height='100%'>
        </object>
      </div>
  )
}


