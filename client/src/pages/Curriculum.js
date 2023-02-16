import React,{useState,useEffect} from 'react';
import './../Styles/Curriculum.scss';
import { getFileApi } from '../api/fileProject';
import readFile from '../utils/readFile';

export default function Curriculum() {

  const name = 'leonardopuchettaCV.pdf'

  const [dataUrlFile,setDataUrlFile] = useState(null);

      useEffect(() => {
          getFileApi(name).then(response =>{
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


