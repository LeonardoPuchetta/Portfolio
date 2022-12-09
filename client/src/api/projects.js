
//funciones para conectar con los endpoints de project
import {basePath,apiVersion} from './config';


export function getProyectsApi(){

    const url = `${basePath}/${apiVersion}/get-projects`;

    const params ={
        method: 'GET',
        headers: {
            "Content-type":"application/json" 
        }
    };

        return fetch(url,params)
        .then(response => {
            return response.json()
        }).then(result => {
            return result
        }).catch(error =>{
            return error.message
        })


}